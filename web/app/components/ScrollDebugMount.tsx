"use client";

import { useScrollDebug } from "../hooks/useScrollDebug";

/**
 * Mounts scroll debug hook when NEXT_PUBLIC_DEBUG_SCROLL=1.
 * Renders nothing. Use once in root layout.
 */
export default function ScrollDebugMount() {
  useScrollDebug();
  return null;
}
