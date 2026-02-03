"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import { SERVICES_ITEMS } from "../lib/nav";

const REVEAL_PX = 20; /* фон футера появляется плавно за 20px при входе в viewport */

const FOOTER_NAV = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О коллегии" },
  { href: "/services", label: "Услуги" },
  { href: "/press", label: "Пресс-служба" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
] as const;

const BOTTOM_LINKS = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/consent", label: "Согласие на обработку персональных данных" },
  { href: "/#pop:cookie", label: "Политика cookie" },
] as const;

const DISCLAIMER_1 =
  "Информация на сайте носит справочный характер и не является публичной офертой.";
const DISCLAIMER_2 =
  "Адвокатская тайна и конфиденциальность соблюдаются.";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const update = () => {
      const rect = footer.getBoundingClientRect();
      const vh = typeof window !== "undefined" ? window.innerHeight : 0;
      const progress = vh - rect.top;
      setBgOpacity(Math.min(1, Math.max(0, progress / REVEAL_PX)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-transparent bg-transparent"
      style={{
        backdropFilter: bgOpacity > 0 ? "blur(12px)" : "none",
        WebkitBackdropFilter: bgOpacity > 0 ? "blur(12px)" : "none",
      }}
      role="contentinfo"
    >
      {/* Фон футера: как у хедера — прозрачность, цвет, blur */}
      <div
        className="footer-bg-reveal pointer-events-none absolute inset-0 border-t"
        style={{
          opacity: bgOpacity,
          background: "rgba(7, 25, 35, 0.6)",
          borderColor: "transparent",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 py-10 sm:py-11 lg:py-12">
        {/* Верхний уровень: mobile/portrait — стопка; desktop/landscape (md+) — 4 равные колонки */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-x-8 md:gap-y-8 md:justify-items-stretch">
          {/* Колонка 1 — Бренд «Багратион», реквизиты, контакты, CTA (интервал 10px) */}
          <div className="min-w-0 space-y-2.5">
            <p className="text-base font-semibold leading-[26px] text-[var(--text-primary)] sm:text-lg sm:leading-[28px]">
              Коллегия адвокатов города Москвы «Багратион»
            </p>
            <p className="text-xs leading-[22px] text-[var(--text-muted)] sm:text-sm sm:leading-[24px]">
              ИНН 9705175976 | ОГРН 1227700505757
            </p>
            <ul className="space-y-2.5 text-sm leading-[24px] text-[var(--text-secondary)] sm:leading-[26px]">
              <li>
                Телефон:{" "}
                <a
                  href="tel:+74954106600"
                  className="link-proxity text-[var(--text-primary)] rounded-[4px] focus-visible:outline-none"
                >
                  +7 (495) 410-66-00
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@bagrationlegal.ru"
                  className="link-proxity text-[var(--text-primary)] rounded-[4px] focus-visible:outline-none"
                >
                  info@bagrationlegal.ru
                </a>
              </li>
            </ul>
            <div className="pt-2.5">
              <Button href="/contacts" variant="primary" className="w-full sm:w-auto">
                Записаться на консультацию
              </Button>
            </div>
          </div>

          {/* Колонка 2 — Навигация (интервал 10px); на ПК/планшете сдвиг 60px вправо */}
          <div className="min-w-0 md:ml-[60px]">
            <h3 className="text-sm font-medium uppercase leading-[24px] tracking-wider text-[var(--text-muted)]">
              Навигация
            </h3>
            <ul className="mt-2.5 space-y-2.5">
              {FOOTER_NAV.map(({ href, label }) => (
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

          {/* Колонка 3 — Услуги (интервал 10px) */}
          <div className="min-w-0">
            <h3 className="text-sm font-medium uppercase leading-[24px] tracking-wider text-[var(--text-muted)]">
              Услуги
            </h3>
            {/* Один список на мобильных и вертикальном планшете */}
            <ul className="mt-2.5 space-y-2.5 md:hidden">
              {SERVICES_ITEMS.map(({ href, label }) => (
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
            {/* Первые 5 пунктов на desktop/landscape */}
            <ul className="mt-2.5 hidden space-y-2.5 md:block">
              {SERVICES_ITEMS.slice(0, 5).map(({ href, label }) => (
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

          {/* Колонка 4 — Услуги, вторые 5 пунктов (интервал 10px) */}
          <div className="hidden min-w-0 md:block">
            <div
              className="text-sm font-medium uppercase leading-[24px] tracking-wider text-[var(--text-muted)] invisible select-none"
              aria-hidden
            >
              Услуги
            </div>
            <ul className="mt-2.5 space-y-2.5">
              {SERVICES_ITEMS.slice(5, 10).map(({ href, label }) => (
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

        {/* Юридическая оговорка (интервал 10px) */}
        <div className="mt-8 border-t border-[var(--border-subtle)]/70 pt-6 sm:mt-8 sm:pt-7">
          <p className="max-w-2xl text-xs leading-[22px] text-[var(--text-muted)] sm:text-sm sm:leading-[24px]">
            {DISCLAIMER_1}
            <br />
            {DISCLAIMER_2}
          </p>
        </div>

        {/* Нижняя полоса (bottom bar), интервал 10px */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[var(--border-subtle)]/70 pt-6 sm:flex-row sm:items-center sm:gap-4 sm:pt-7">
          <p className="text-xs leading-[22px] text-[var(--text-muted)] sm:text-sm sm:leading-[24px]">
            © 2023 КАМ «Багратион»
          </p>
          <nav aria-label="Юридические документы" className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
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
        </div>
      </Container>
    </footer>
  );
}
