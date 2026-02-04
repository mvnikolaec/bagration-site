"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ABOUT_ITEMS } from "../lib/nav";

interface AboutDropdownProps {
  isActive: boolean;
  onNavigate?: () => void;
}

const PANEL_ID = "about-dropdown-panel";

export default function AboutDropdown({
  isActive,
  onNavigate,
}: AboutDropdownProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const t = triggerRef.current;
      const p = panelRef.current;
      const target = e.target as Node;
      if (t?.contains(target) || p?.contains(target)) return;
      setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`link-proxity group flex items-center gap-1 rounded-[var(--btn-radius)] px-4 py-2 text-sm focus-visible:outline-none ${
          isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={PANEL_ID}
        aria-current={isActive ? "page" : undefined}
        id="about-dropdown-trigger"
      >
        <span
          className={
            isActive
              ? "relative inline-block after:absolute after:-bottom-[6px] after:left-0 after:h-[1px] after:w-full after:bg-[var(--text-primary)] after:content-[''] after:transition-colors group-hover:after:bg-[var(--accent-primary)]"
              : ""
          }
        >
          О коллегии
        </span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={panelRef}
        id={PANEL_ID}
        role="menu"
        aria-labelledby="about-dropdown-trigger"
        className={`absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-2 shadow-lg ${
          open ? "block" : "hidden"
        }`}
      >
        {ABOUT_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="link-proxity block rounded-[4px] px-4 py-2 text-sm text-[var(--text-secondary)] focus-visible:outline-none hover:bg-[var(--bg-hover)]"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
