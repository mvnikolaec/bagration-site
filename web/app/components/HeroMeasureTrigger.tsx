"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { measureHeroBadge } from "@/app/lib/heroMeasure";

const isDev = process.env.NODE_ENV !== "production";

/**
 * DEV-only: при монтировании и при resize (debounce 200ms) логирует в консоль
 * [HeroBadgeMetric] /path | width=N | metric=M
 * metric = расстояние от верха Hero-секции до верха бейджа (px).
 * В production ничего не делает.
 */
export default function HeroMeasureTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isDev) return;

    measureHeroBadge(pathname ?? "");

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        measureHeroBadge(pathname ?? "");
        timeout = null;
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeout) clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
