"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Container from "./Container";
import { SERVICES_ITEMS } from "../lib/nav";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О коллегии" },
  { href: "/services", label: "Услуги" },
  { href: "/press", label: "Пресс-служба" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
] as const;

const PRACTICES = SERVICES_ITEMS;

const ORG = {
  name: "Коллегия адвокатов города Москвы «Багратион»",
  inn: "9705175976",
  ogrn: "1227700505757",
  phone: "+7 (495) 410-66-00",
  email: "info@bagrationlegal.ru",
} as const;

const BOTTOM_LINKS = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/consent", label: "Согласие" },
  { href: "/#pop:cookie", label: "Cookie" },
] as const;

const DISCLAIMER = "Информация на сайте носит справочный характер. Адвокатская тайна соблюдается.";

function RequisitesPopover({
  open,
  onClose,
  anchorRef,
}: {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      const anchor = anchorRef.current;
      const pop = popRef.current;
      if (pop?.contains(e.target as Node) || anchor?.contains(e.target as Node)) return;
      onClose();
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  return (
    <div
      ref={popRef}
      className="absolute bottom-full left-0 mb-2 z-50 w-[min(320px,calc(100vw-2rem))] rounded-[var(--card-radius)] border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg"
      role="dialog"
      aria-label="Реквизиты"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card-hover-bg)]"
        aria-label="Закрыть"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <p className="text-sm font-semibold text-[var(--text-primary)] pr-6">{ORG.name}</p>
      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        ИНН {ORG.inn} · ОГРН {ORG.ogrn}
      </p>
      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        Телефон:{" "}
        <a href={`tel:${ORG.phone.replace(/\s/g, "")}`} className="text-[var(--text-primary)] underline">
          {ORG.phone}
        </a>
      </p>
      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        Email:{" "}
        <a href={`mailto:${ORG.email}`} className="text-[var(--text-primary)] underline">
          {ORG.email}
        </a>
      </p>
    </div>
  );
}

export default function Footer() {
  const [requisitesOpen, setRequisitesOpen] = useState(false);
  const requisitesBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <footer className="relative" role="contentinfo">
      <Container className="py-10 sm:py-11 lg:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Колонка 1: Коллегия + реквизиты + CTA */}
          <div className="min-w-0 flex flex-col gap-2.5">
            <h2 className="text-base font-semibold leading-[26px] text-[var(--text-primary)] sm:text-lg sm:leading-[28px]">
              Коллегия
            </h2>
            <p className="text-xs leading-[22px] text-[var(--text-muted)] sm:text-sm sm:leading-[24px]">
              ИНН {ORG.inn} · ОГРН {ORG.ogrn}
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm leading-[24px] text-[var(--text-secondary)] sm:leading-[26px]">
              <li>
                <a
                  href={`tel:${ORG.phone.replace(/\s/g, "")}`}
                  className="link-proxity text-[var(--text-primary)] rounded-[4px] focus-visible:outline-none"
                >
                  {ORG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${ORG.email}`}
                  className="link-proxity text-[var(--text-primary)] rounded-[4px] focus-visible:outline-none"
                >
                  {ORG.email}
                </a>
              </li>
            </ul>
            <div className="pt-0.5">
              <Button href="/contacts" variant="primary" className="w-fit">
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative">
              <button
                ref={requisitesBtnRef}
                type="button"
                onClick={() => setRequisitesOpen((v) => !v)}
                className="btn-proxity-base btn-proxity-secondary px-5 py-2.5 text-sm w-fit"
              >
                Реквизиты
              </button>
              <RequisitesPopover
                open={requisitesOpen}
                onClose={() => setRequisitesOpen(false)}
                anchorRef={requisitesBtnRef}
              />
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div className="min-w-0">
            <h3 className="text-sm font-medium uppercase leading-[24px] tracking-wider text-[var(--text-muted)]">
              Навигация
            </h3>
            <ul className="mt-2.5 list-none p-0 m-0 flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="leading-[24px] sm:leading-[26px]">
                  <Link
                    href={href}
                    className="link-proxity text-sm text-[var(--text-secondary)] rounded-[4px] focus-visible:outline-none sm:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонки 3–4: Практики (на md один список, на lg — два столбца) */}
          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-medium uppercase leading-[24px] tracking-wider text-[var(--text-muted)]">
              Практики
            </h3>
            <ul className="mt-2.5 list-none p-0 m-0 flex flex-col gap-2.5 lg:hidden">
              {PRACTICES.map(({ href, label }) => (
                <li key={href} className="leading-[24px] sm:leading-[26px]">
                  <Link
                    href={href}
                    className="link-proxity text-sm text-[var(--text-secondary)] rounded-[4px] focus-visible:outline-none sm:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-2.5 list-none p-0 m-0 hidden flex-col gap-2.5 lg:flex">
              {PRACTICES.slice(0, 5).map(({ href, label }) => (
                <li key={href} className="leading-[24px] sm:leading-[26px]">
                  <Link
                    href={href}
                    className="link-proxity text-sm text-[var(--text-secondary)] rounded-[4px] focus-visible:outline-none sm:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden min-w-0 lg:block">
            <h3
              className="text-sm font-medium uppercase leading-[24px] tracking-wider text-[var(--text-muted)] invisible select-none"
              aria-hidden
            >
              Практики
            </h3>
            <ul className="mt-2.5 list-none p-0 m-0 flex flex-col gap-2.5">
              {PRACTICES.slice(5, 10).map(({ href, label }) => (
                <li key={href} className="leading-[24px] sm:leading-[26px]">
                  <Link
                    href={href}
                    className="link-proxity text-sm text-[var(--text-secondary)] rounded-[4px] focus-visible:outline-none sm:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: ссылки слева, дисклеймер и © справа/ниже */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border-subtle)]/70 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:pt-7">
          <nav aria-label="Юридические документы" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {BOTTOM_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="link-proxity text-xs leading-[22px] text-[var(--text-muted)] rounded-[4px] focus-visible:outline-none sm:text-sm sm:leading-[24px]"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-1 sm:items-end">
            <p className="text-xs leading-[22px] text-[var(--text-muted)] sm:text-sm sm:leading-[24px]">
              © 2023 КАМ «Багратион»
            </p>
            <p className="max-w-md text-xs leading-[22px] text-[var(--text-muted)] sm:text-sm sm:leading-[24px]">
              {DISCLAIMER}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
