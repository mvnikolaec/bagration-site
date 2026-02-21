"use client";

import { useScrollDebug } from "../hooks/useScrollDebug";

export default function ScrollCulpritOverlay() {
  const { enabled, status, culprit, first, reset } = useScrollDebug();

  if (!enabled) return null;

  return (
    <div
      data-debug="ScrollCulpritOverlay"
      style={{
        position: "fixed",
        bottom: 12,
        right: 12,
        zIndex: 99999,
        background: "rgba(0,0,0,0.75)",
        color: "#fff",
        padding: "10px 12px",
        borderRadius: 10,
        pointerEvents: "none",
        maxWidth: "min(360px, calc(100vw - 24px))",
      }}
      aria-live="polite"
    >
      {status === "idle" && (
        <div style={{ fontSize: 12, opacity: 0.9 }}>Scroll once to detect</div>
      )}
      {status === "recording" && (
        <div style={{ fontSize: 12, opacity: 0.9 }}>Recording…</div>
      )}
      {status === "done" && (
        <>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>
            CULPRIT: {culprit}
          </div>
          <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 10 }}>
            FIRST: {first}
          </div>
          <div style={{ pointerEvents: "auto" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                background: "#333",
                color: "#fff",
                border: "1px solid #555",
                borderRadius: 6,
              }}
            >
              RESET
            </button>
          </div>
        </>
      )}
    </div>
  );
}
