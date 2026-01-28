"use client";

import { useEffect } from "react";

/**
 * Измеряет фактическую высоту хедера (включая border) и задаёт --header-h на :root.
 * Hero использует это значение для calc(100dvh - var(--header-h)).
 */
export default function HeaderHeightInit() {
  useEffect(() => {
    const setHeaderHeight = () => {
      const header = document.querySelector("header");
      if (!header) return;
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${Math.round(h)}px`);
    };

    setHeaderHeight();

    const ro = new ResizeObserver(setHeaderHeight);
    const header = document.querySelector("header");
    if (header) ro.observe(header);

    return () => ro.disconnect();
  }, []);

  return null;
}
