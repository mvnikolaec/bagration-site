"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О коллегии" },
  { href: "/services", label: "Услуги" },
  { href: "/attorneys", label: "Адвокаты" },
  { href: "/press", label: "Пресс-служба" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header data-header-root className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-white/5 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-[0.15em] text-[var(--text-primary)] group-hover:text-[var(--accent-light)] transition-colors leading-tight inline-block">
                БАГРАТИОН
              </span>
              <span className="text-[9.6px] text-[var(--text-muted)] leading-tight inline-block whitespace-nowrap tracking-[0.15em]">
                КОЛЛЕГИЯ АДВОКАТОВ
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 text-sm md:flex">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all px-4 py-2 ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  }`}
                >
                  <span className={`relative inline-block ${
                    isActive
                      ? "after:content-[''] after:absolute after:-bottom-[6px] after:left-0 after:w-full after:h-[1px] after:bg-[#FFFFFF] hover:after:bg-[#42C8F5] after:transition-colors"
                      : ""
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/contacts"
              variant="primary"
              className="hidden sm:inline-flex text-xs px-5 py-2.5"
            >
              Получить консультацию
            </Button>
            <button className="md:hidden text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
