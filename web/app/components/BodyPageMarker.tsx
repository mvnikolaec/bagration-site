"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Выставляет на body data-page="home" | "inner" для CSS (высота Hero: главная без изменений, внутренние — на 20% ниже).
 */
export default function BodyPageMarker() {
  const pathname = usePathname();

  useEffect(() => {
    const value = pathname === "/" ? "home" : "inner";
    document.body.setAttribute("data-page", value);
  }, [pathname]);

  return null;
}
