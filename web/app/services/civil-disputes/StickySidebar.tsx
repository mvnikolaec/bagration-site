"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../../components/Button";

const FAQ_SECTION_ID = "faq-section";
const FAQ_STOP_ID = "faq-accordion-last-item"; // нижняя граница последнего пункта аккордеона
const LG_BREAKPOINT = "(min-width: 1024px)";
const RELATED_LINKS = [
  { title: "Семейные споры", href: "/services/family-disputes" },
  { title: "Наследственные дела", href: "/services/inheritance" },
  { title: "Недвижимость", href: "/services/real-estate" },
] as const;

type Mode = "static" | "sticky" | "absolute";

interface BlockerInfo {
  tagName: string;
  id: string;
  className: string;
  overflow: string;
  overflowY: string;
  overflowX: string;
  transform: string;
  filter: string;
  perspective: string;
}

function getHeaderOffset(): number {
  if (typeof document === "undefined") return 80;
  const header = document.querySelector("header");
  return (header?.offsetHeight ?? 0) + 16;
}

function findBlocker(sidebarEl: HTMLElement | null): BlockerInfo | null {
  if (!sidebarEl) return null;
  let el: HTMLElement | null = sidebarEl.parentElement;
  while (el) {
    const tagName = el.tagName.toLowerCase();
    if (tagName === "html" || tagName === "body") {
      el = el.parentElement;
      continue;
    }
    const style = getComputedStyle(el);
    const overflow = style.overflow;
    const overflowX = style.overflowX;
    const overflowY = style.overflowY;
    const transform = style.transform;
    const filter = style.filter;
    const perspective = style.perspective;
    if (
      overflow !== "visible" ||
      overflowX !== "visible" ||
      overflowY !== "visible" ||
      transform !== "none" ||
      filter !== "none" ||
      perspective !== "none"
    ) {
      return {
        tagName: el.tagName,
        id: el.id || "",
        className: el.className || "",
        overflow,
        overflowY,
        overflowX,
        transform,
        filter,
        perspective,
      };
    }
    el = el.parentElement;
  }
  return null;
}

export default function StickySidebar() {
  const [mode, setMode] = useState<Mode>("static");
  const [absoluteTop, setAbsoluteTop] = useState(0);
  const [effectiveTop, setEffectiveTop] = useState(0); // реальный top в sticky: max(headerOffset, centerTop)
  const [asideMinHeight, setAsideMinHeight] = useState<number | null>(null);
  const asideRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null); // якорь перед sticky-элементом
  const sidebarRef = useRef<HTMLDivElement>(null);
  const effectiveTopRef = useRef(0); // для scroll: не пересчитываем effectiveTop
  const rafIdRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // recalcEffectiveTop: true = resize/ResizeObserver (пересчитать effectiveTop), false = scroll (только mode/absoluteTop)
  const update = useCallback((recalcEffectiveTop: boolean) => {
    const faqEl = document.getElementById(FAQ_SECTION_ID);
    if (!faqEl) {
      console.warn("[StickySidebar] Элемент с id=\"faq-section\" не найден.");
      return;
    }
    const asideEl = asideRef.current;
    const sentinelEl = sentinelRef.current;
    const sidebarEl = sidebarRef.current;
    if (!asideEl || !sidebarEl) return;

    const mq = window.matchMedia(LG_BREAKPOINT);
    if (!mq.matches) {
      setMode("static");
      setAsideMinHeight(null);
      return;
    }

    const scrollContainer = document.querySelector<HTMLElement>(".app-shell-content");
    const scrollY = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
    const asideRect = asideEl.getBoundingClientRect();
    const stopEl = document.getElementById(FAQ_STOP_ID);
    const bottomEl = stopEl ?? faqEl;
    const bottomRect = bottomEl.getBoundingClientRect();
    const asideTopDoc = asideRect.top + scrollY;
    const faqBottomDoc = bottomRect.bottom + scrollY;
    const sidebarH = sidebarEl.offsetHeight;

    let effectiveTopPx: number;
    if (recalcEffectiveTop) {
      const viewportH = window.innerHeight;
      const centerTop = Math.max(0, (viewportH - sidebarH) / 2);
      const headerOffset = getHeaderOffset();
      effectiveTopPx =
        sidebarH >= viewportH - headerOffset
          ? headerOffset
          : Math.max(headerOffset, centerTop);
      effectiveTopRef.current = effectiveTopPx;
      setEffectiveTop(effectiveTopPx);
    } else {
      effectiveTopPx = effectiveTopRef.current;
    }

    // 2) startScrollY от sentinel; fallback на aside, если sentinel ещё нет
    const sentinelTopDoc = sentinelEl
      ? sentinelEl.getBoundingClientRect().top + scrollY
      : asideTopDoc;
    const startScrollY = sentinelTopDoc - effectiveTopPx;
    const stopScrollY = faqBottomDoc - sidebarH - effectiveTopPx;

    const values = {
      scrollY,
      startScrollY,
      stopScrollY,
      sentinelTopDoc,
      asideTopDoc,
      faqBottomDoc,
      sidebarH,
      effectiveTopPx,
    };
    const hasBad = Object.entries(values).some(([, v]) => typeof v === "number" && (Number.isNaN(v) || !Number.isFinite(v)));
    if (hasBad) {
      console.error("[StickySidebar] NaN/Infinity в значениях:", values);
    }

    let nextMode: Mode;
    let nextAbsoluteTop = 0;

    if (scrollY < startScrollY) {
      nextMode = "static";
      setAsideMinHeight(null);
    } else if (scrollY >= startScrollY && scrollY < stopScrollY) {
      nextMode = "sticky";
      setAsideMinHeight(null);
    } else {
      nextMode = "absolute";
      nextAbsoluteTop = faqBottomDoc - asideTopDoc - sidebarH;
      setAbsoluteTop(nextAbsoluteTop);
      setAsideMinHeight(nextAbsoluteTop + sidebarH);
    }

    setMode(nextMode);

    // Упрощённый debug в консоль только при scroll и ?debug=1 (не чаще 1 раз на кадр — вызывается из rAF)
    if (!recalcEffectiveTop && typeof window !== "undefined" && window.location.search.includes("debug=1")) {
      console.log("[StickyDebug]\nsentinelTopDoc=" + sentinelTopDoc + " startScrollY=" + startScrollY + " scrollY=" + scrollY);
      console.log("effectiveTop=" + effectiveTopPx + " sidebarH=" + sidebarH + " mode=" + nextMode);
    }

    const blocker = findBlocker(sidebarEl);
    if (blocker) {
      console.warn("[StickySidebar] Найден CSS-блокер sticky:", blocker);
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(LG_BREAKPOINT);

    let rafScheduled = false;
    let rafScheduledRecalc = false;

    const run = (recalc: boolean) => {
      rafScheduled = false;
      rafScheduledRecalc = false;
      update(recalc);
    };

    const schedule = () => {
      if (rafScheduled) return;
      rafScheduled = true;
      rafIdRef.current = requestAnimationFrame(() => run(false));
    };

    const scheduleRecalc = () => {
      if (rafScheduledRecalc) return;
      rafScheduledRecalc = true;
      rafIdRef.current = requestAnimationFrame(() => run(true));
    };

    const onMediaChange = () => {
      if (!mq.matches) {
        setMode("static");
        setAsideMinHeight(null);
      } else {
        update(true);
      }
    };

    const scrollContainer = document.querySelector(".app-shell-content");
    const scrollTarget = scrollContainer ?? window;
    scrollTarget.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", scheduleRecalc);
    mq.addEventListener("change", onMediaChange);

    const rafInit = requestAnimationFrame(() => {
      run(true);
      const faqEl = document.getElementById(FAQ_SECTION_ID);
      const stopEl = document.getElementById(FAQ_STOP_ID);
      const asideEl = asideRef.current;
      const sidebarEl = sidebarRef.current;
      if (!resizeObserverRef.current) resizeObserverRef.current = new ResizeObserver(scheduleRecalc);
      const ro = resizeObserverRef.current;
      if (faqEl) ro.observe(faqEl);
      if (stopEl) ro.observe(stopEl);
      if (asideEl) ro.observe(asideEl);
      if (sidebarEl) ro.observe(sidebarEl);
    });

    return () => {
      scrollTarget.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", scheduleRecalc);
      mq.removeEventListener("change", onMediaChange);
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      cancelAnimationFrame(rafInit);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [update]);

  const sidebarStyle =
    mode === "static"
      ? { position: "relative" as const, top: "auto" as const, left: "auto" as const, right: "auto" as const }
      : mode === "sticky"
        ? { position: "sticky" as const, top: `${effectiveTop}px`, left: "auto" as const, right: "auto" as const }
        : {
            position: "absolute" as const,
            top: `${absoluteTop}px`,
            left: 0,
            right: 0,
          };

  return (
    <>
      <aside
        ref={asideRef}
        className="relative hidden lg:block lg:pt-[5.75rem]"
        aria-label="Действия и разделы"
        style={asideMinHeight != null ? { minHeight: `${asideMinHeight}px` } : undefined}
      >
        <div ref={sentinelRef} aria-hidden="true" />
        <div ref={sidebarRef} className="space-y-5 xl:space-y-6" style={sidebarStyle}>
          <div className="card-proxity px-4 py-5 sm:px-5 sm:py-6">
            <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
              Оценка перспектив дела
            </h3>
            <p className="mt-2 text-sm leading-snug text-[var(--text-secondary)]">
              Предварительный правовой анализ позволяет определить возможные риски и сформировать стратегию защиты.
            </p>
            <div className="mt-4">
              <Button href="/contacts" variant="primary" className="w-full justify-center">
                Оценить перспективы дела
              </Button>
            </div>
          </div>
          <div className="card-proxity px-4 py-5 sm:px-5 sm:py-6">
            <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
              Связанные практики
            </h3>
            <ul className="mt-3 space-y-2">
              {RELATED_LINKS.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="link-proxity flex items-center justify-between gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  >
                    <span>{title}</span>
                    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Временно отключён overlay; debug только в console.log при ?debug=1
      {showDebug && Object.keys(debug).length > 0 && (
        <div
          className="fixed bottom-4 right-4 z-[9999] max-h-[50vh] overflow-auto rounded bg-black/90 px-2 py-1.5 font-mono text-[10px] text-green-400"
          style={{ width: "280px" }}
        >
          <div className="mb-1 border-b border-green-600 pb-1 font-bold">DEBUG</div>
          <div>sentinelTopDoc: {Number(debug.sentinelTopDoc)}</div>
          <div>startScrollY: {Number(debug.startScrollY)}</div>
          <div>effectiveTop: {Number(debug.effectiveTop)}</div>
          <div>mode: {String(debug.mode)}</div>
          <div className="mt-1 border-t border-green-600 pt-1">computedPosition: {String(debug.computedPosition)}</div>
          <div>computedTop: {String(debug.computedTop)}</div>
          <div className="mt-1 border-t border-green-600 pt-1">stopScrollY: {Number(debug.stopScrollY)}</div>
          <div>scrollY: {Number(debug.scrollY)}</div>
          <div>asideTopDoc: {Number(debug.asideTopDoc)}</div>
          <div>faqBottomDoc: {Number(debug.faqBottomDoc)}</div>
          <div>sidebarH: {Number(debug.sidebarH)}</div>
          <div>absoluteTop: {Number(debug.absoluteTop)}</div>
          <div className="mt-1 border-t border-green-600 pt-1 text-yellow-400 break-words">
            blocker:{" "}
            {debug.blocker
              ? (() => {
                  const b = debug.blocker as BlockerInfo;
                  const parts = [
                    b.tagName,
                    b.id ? `#${b.id}` : "",
                    b.className ? `.${b.className.split(" ").slice(0, 2).join(".")}` : "",
                    `overflow=${b.overflow}`,
                    `overflowY=${b.overflowY}`,
                    b.transform !== "none" ? `transform=${b.transform.substring(0, 20)}` : "",
                    b.filter !== "none" ? `filter=${b.filter.substring(0, 20)}` : "",
                    b.perspective !== "none" ? `perspective=${b.perspective}` : "",
                  ].filter(Boolean);
                  return parts.join(" ");
                })()
              : "нет"}
          </div>
        </div>
      )}
      */}
    </>
  );
}
