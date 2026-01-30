"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Button from "./Button";
import {
  SERVICES_ITEMS,
  ABOUT_ITEMS,
  CTA_LABEL,
  CTA_HREF,
} from "../lib/nav";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  triggerId: string;
}

export default function MobileMenu({
  open,
  onClose,
  triggerId,
}: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      const t = document.getElementById(triggerId);
      if (t instanceof HTMLElement) t.focus();
    };
  }, [open, onClose, triggerId]);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      setAboutOpen(false);
    }
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  const content = (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-menu-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        aria-labelledby={triggerId}
        className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-[var(--bg-secondary)] shadow-xl sm:max-w-xs"
      >
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-4">
          <span className="text-sm font-medium text-[var(--text-muted)]">
            Меню
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="btn-proxity-base btn-proxity-ghost rounded-[var(--btn-radius)] p-2 focus-visible:outline-none"
            aria-label="Закрыть меню"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col overflow-y-auto px-4 py-4"
          aria-label="Основная навигация"
        >
          <div className="flex flex-col gap-1">
            <Button
              href={CTA_HREF}
              variant="primary"
              className="mb-4 w-full justify-center"
            >
              {CTA_LABEL}
            </Button>

            <Link
              href="/"
              className="link-proxity rounded-[var(--btn-radius)] px-4 py-3 text-sm text-[var(--text-primary)] focus-visible:outline-none"
              onClick={onClose}
            >
              Главная
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                className="btn-proxity-base btn-proxity-ghost flex w-full items-center justify-between rounded-[var(--btn-radius)] px-4 py-3 text-left text-sm text-[var(--text-primary)] focus-visible:outline-none"
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-accordion"
                id="mobile-services-trigger"
              >
                Услуги
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="mobile-services-accordion"
                role="region"
                aria-labelledby="mobile-services-trigger"
                className={`overflow-hidden ${servicesOpen ? "" : "hidden"}`}
              >
                <Link
                  href="/services"
                  className="link-proxity block rounded-[4px] px-6 py-2 text-sm text-[var(--text-secondary)] focus-visible:outline-none hover:bg-[var(--bg-hover)]"
                  onClick={onClose}
                >
                  Все услуги
                </Link>
                {SERVICES_ITEMS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="link-proxity block rounded-[4px] px-6 py-2 text-sm text-[var(--text-secondary)] focus-visible:outline-none hover:bg-[var(--bg-hover)]"
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setAboutOpen((o) => !o)}
                className="btn-proxity-base btn-proxity-ghost flex w-full items-center justify-between rounded-[var(--btn-radius)] px-4 py-3 text-left text-sm text-[var(--text-primary)] focus-visible:outline-none"
                aria-expanded={aboutOpen}
                aria-controls="mobile-about-accordion"
                id="mobile-about-trigger"
              >
                О коллегии
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="mobile-about-accordion"
                role="region"
                aria-labelledby="mobile-about-trigger"
                className={`overflow-hidden ${aboutOpen ? "" : "hidden"}`}
              >
                {ABOUT_ITEMS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="link-proxity block rounded-[4px] px-6 py-2 text-sm text-[var(--text-secondary)] focus-visible:outline-none hover:bg-[var(--bg-hover)]"
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/press"
              className="link-proxity rounded-[var(--btn-radius)] px-4 py-3 text-sm text-[var(--text-primary)] focus-visible:outline-none"
              onClick={onClose}
            >
              Пресс-служба
            </Link>
            <Link
              href="/news"
              className="link-proxity rounded-[var(--btn-radius)] px-4 py-3 text-sm text-[var(--text-primary)] focus-visible:outline-none"
              onClick={onClose}
            >
              Новости
            </Link>
            <Link
              href="/contacts"
              className="link-proxity rounded-[var(--btn-radius)] px-4 py-3 text-sm text-[var(--text-primary)] focus-visible:outline-none"
              onClick={onClose}
            >
              Контакты
            </Link>
          </div>
        </nav>
      </div>
    </>
  );

  return createPortal(content, document.body);
}
