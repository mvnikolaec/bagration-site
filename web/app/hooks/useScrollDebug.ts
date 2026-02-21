"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const DEBUG_ENABLED =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_DEBUG_SCROLL === "1";

const OBSERVATION_WINDOW_MS = 900;
const MUTATIONS_CAP = 300;

const LARGE_CONTAINER_SELECTORS = [
  ".app-shell",
  ".app-shell-content",
  ".app-shell-content-inner",
  "main",
  "footer",
];

function getSelector(el: Node): string {
  if (el.nodeType !== Node.ELEMENT_NODE) return (el as Element).nodeName.toLowerCase();
  const e = el as Element;
  const tag = e.tagName.toLowerCase();
  const id = e.id ? `#${e.id}` : "";
  const classes = e.className && typeof e.className === "string" ? "." + e.className.trim().split(/\s+/).slice(0, 3).join(".") : "";
  const debug = e.getAttribute("data-debug");
  const debugStr = debug ? `[data-debug=${debug}]` : "";
  return `${tag}${id}${classes}${debugStr}`.slice(0, 80);
}

function getDataDebugLabel(el: Node): string {
  let node: Node | null = el;
  while (node && node.nodeType === Node.ELEMENT_NODE) {
    const label = (node as Element).getAttribute("data-debug");
    if (label) return label;
    node = node.parentNode;
  }
  return "";
}

function isLargeContainer(el: Node): boolean {
  if (el.nodeType !== Node.ELEMENT_NODE) return false;
  const e = el as Element;
  for (const sel of LARGE_CONTAINER_SELECTORS) {
    if (e.matches(sel)) return true;
    if (sel.startsWith(".") && e.classList?.contains(sel.slice(1))) return true;
  }
  if (e.tagName === "MAIN" || e.tagName === "FOOTER") return true;
  if (e.classList?.contains("app-shell") || e.classList?.contains("app-shell-content") || e.classList?.contains("app-shell-content-inner")) return true;
  return false;
}

function classStyleDiff(record: MutationRecord): string {
  if (record.type !== "attributes" || record.attributeName == null) return "";
  const el = record.target as Element;
  const attr = record.attributeName;
  const oldVal = record.oldValue ?? "";
  const newVal = attr === "class" ? (el.getAttribute("class") ?? "") : attr === "style" ? (el.getAttribute("style") ?? "") : "";
  if (attr === "class") {
    const o = new Set(oldVal.split(/\s+/).filter(Boolean));
    const n = new Set(newVal.split(/\s+/).filter(Boolean));
    const added = [...n].filter((c) => !o.has(c));
    const removed = [...o].filter((c) => !n.has(c));
    const parts = [];
    if (added.length) parts.push(`+${added.join(",")}`);
    if (removed.length) parts.push(`-${removed.join(",")}`);
    return parts.length ? parts.join(" ") : "class changed";
  }
  if (attr === "style") return "style changed";
  return `${attr} changed`;
}

export type ScrollDebugStatus = "idle" | "recording" | "done";

export type ScrollDebugResult = {
  enabled: boolean;
  status: ScrollDebugStatus;
  culprit: string;
  first: string;
  reset: () => void;
};

export function useScrollDebug(): ScrollDebugResult {
  const [status, setStatus] = useState<ScrollDebugStatus>("idle");
  const [culprit, setCulprit] = useState("");
  const [first, setFirst] = useState("");
  const [runId, setRunId] = useState(0);

  const reset = useCallback(() => {
    setRunId((r) => r + 1);
    setStatus("idle");
    setCulprit("");
    setFirst("");
  }, []);

  useEffect(() => {
    if (!DEBUG_ENABLED || typeof document === "undefined") return;

    const scrollContainer = document.querySelector(".app-shell-content") as HTMLElement | null;
    const root: Node = scrollContainer ?? document.body;

    const mutations: Array<{
      time: number;
      type: string;
      selector: string;
      diff: string;
      isLarge: boolean;
      dataDebugLabel: string;
    }> = [];
    let windowEndTime: number | null = null;

    function addMutation(record: MutationRecord) {
      if (mutations.length >= MUTATIONS_CAP) return;
      const time = performance.now();
      const selector = getSelector(record.target);
      const isLarge = isLargeContainer(record.target);
      const diff = classStyleDiff(record);
      const dataDebugLabel = getDataDebugLabel(record.target);
      mutations.push({
        time,
        type: record.type,
        selector,
        diff,
        isLarge,
        dataDebugLabel,
      });
    }

    const mo = new MutationObserver((list) => {
      if (windowEndTime !== null && performance.now() > windowEndTime) return;
      for (const record of list) {
        if (record.type === "childList" || (record.type === "attributes" && record.attributeName && ["class", "style"].includes(record.attributeName))) {
          const sel = getSelector(record.target);
          if (sel.includes("scroll-debug") || sel.includes("SCROLL DEBUG") || sel.includes("ScrollCulpritOverlay")) continue;
          addMutation(record);
        }
      }
    });

    let poLayoutShift: PerformanceObserver | null = null;
    let poLongTask: PerformanceObserver | null = null;
    try {
      poLayoutShift = new PerformanceObserver(() => {});
      poLayoutShift.observe({ type: "layout-shift", buffered: true });
    } catch {
      /* */
    }
    try {
      poLongTask = new PerformanceObserver(() => {});
      poLongTask.observe({ type: "longtask", buffered: true });
    } catch {
      /* */
    }

    const startWindow = () => {
      setStatus("recording");
      windowEndTime = performance.now() + OBSERVATION_WINDOW_MS;
      mo.observe(root, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["class", "style"],
        attributeOldValue: true,
      });

      setTimeout(() => {
        mo.disconnect();
        poLayoutShift?.disconnect();
        poLongTask?.disconnect();

        const byTime = [...mutations].sort((a, b) => a.time - b.time);

        let culpritValue: string;
        const largeMutations = byTime.filter((m) => m.isLarge);
        if (largeMutations.length > 0) {
          culpritValue = "LargeContainer: " + largeMutations[0].selector;
        } else {
          const countByLabel = new Map<string, number>();
          for (const m of mutations) {
            if (!m.dataDebugLabel) continue;
            countByLabel.set(m.dataDebugLabel, (countByLabel.get(m.dataDebugLabel) ?? 0) + 1);
          }
          if (countByLabel.size > 0) {
            const [labelMost] = [...countByLabel.entries()].sort((a, b) => b[1] - a[1])[0];
            culpritValue = "Component: " + labelMost;
          } else {
            culpritValue = "Unknown (no mutations)";
          }
        }

        const firstMutation = byTime[0];
        const firstValue = firstMutation ? `${firstMutation.selector}: ${firstMutation.diff || firstMutation.type}` : "None";

        setCulprit(culpritValue);
        setFirst(firstValue);
        setStatus("done");
      }, OBSERVATION_WINDOW_MS);
    };

    let fired = false;
    const onFirstScroll = () => {
      if (fired) return;
      fired = true;
      startWindow();
    };

    scrollContainer?.addEventListener("scroll", onFirstScroll, { passive: true });
    window.addEventListener("scroll", onFirstScroll, { passive: true });

    return () => {
      mo.disconnect();
      poLayoutShift?.disconnect();
      poLongTask?.disconnect();
      scrollContainer?.removeEventListener("scroll", onFirstScroll);
      window.removeEventListener("scroll", onFirstScroll);
    };
  }, [runId]);

  return {
    enabled: DEBUG_ENABLED,
    status,
    culprit,
    first,
    reset,
  };
}
