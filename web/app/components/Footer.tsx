import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import { SERVICES_ITEMS } from "../lib/nav";

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
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60" role="contentinfo">
      <Container className="py-12 sm:py-14 lg:py-16">
        {/* Верхний уровень — 3 колонки на desktop */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Колонка A — Бренд, реквизиты, контакты, CTA */}
          <div className="space-y-5">
            <p className="text-base font-semibold leading-tight text-[var(--text-primary)] sm:text-lg">
              Коллегия адвокатов города Москвы «Багратион»
            </p>
            <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
              ИНН 9705175976 | ОГРН 1227700505757
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                Телефон:{" "}
                <a
                  href="tel:+74954106600"
                  className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  +7 (495) 410-66-00
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@bagrationlegal.ru"
                  className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  info@bagrationlegal.ru
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <Button href="/contacts" variant="primary" className="w-full sm:w-auto">
                Записаться на консультацию
              </Button>
            </div>
          </div>

          {/* Колонка B — Навигация */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Навигация
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)] sm:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка C — Практики (2 подколонки на desktop) */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Практики
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-3">
              <ul className="space-y-3">
                {SERVICES_ITEMS.slice(0, 5).map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)] sm:text-base"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {SERVICES_ITEMS.slice(5, 10).map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)] sm:text-base"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Юридическая оговорка */}
        <div className="mt-10 border-t border-[var(--border-subtle)]/70 pt-8 sm:mt-12 lg:mt-14">
          <p className="max-w-2xl text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
            {DISCLAIMER_1}
            <br />
            {DISCLAIMER_2}
          </p>
        </div>

        {/* Нижняя полоса (bottom bar) */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)]/70 pt-8 sm:flex-row sm:items-center sm:gap-6 lg:mt-10 lg:pt-10">
          <p className="text-xs text-[var(--text-muted)] sm:text-sm">
            © 2023 КАМ «Багратион»
          </p>
          <nav aria-label="Юридические документы" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {BOTTOM_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent-primary)] sm:text-sm"
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
