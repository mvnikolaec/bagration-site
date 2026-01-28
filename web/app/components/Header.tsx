"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Button from "./Button";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import AboutDropdown from "./AboutDropdown";
import MobileMenu from "./MobileMenu";
import { CTA_LABEL, CTA_HREF } from "../lib/nav";

const BURGER_ID = "mobile-menu-trigger";

function isServicesActive(pathname: string) {
  return pathname === "/services" || pathname.startsWith("/services/");
}

function isAboutActive(pathname: string) {
  return (
    pathname === "/about" ||
    pathname.startsWith("/about") ||
    pathname === "/attorneys" ||
    pathname.startsWith("/attorneys")
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-md"
        role="banner"
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] rounded"
              aria-label="Багратион — на главную"
            >
              <span className="text-lg font-semibold tracking-[0.12em]">
                БАГРАТИОН
              </span>
              <span className="text-[10px] text-[var(--text-muted)] tracking-[0.1em] hidden sm:inline">
                КОЛЛЕГИЯ АДВОКАТОВ
              </span>
            </Link>

            <nav
              className="hidden md:flex md:items-center md:gap-1"
              aria-label="Основная навигация"
            >
              <NavLink
                href="/"
                label="Главная"
                isActive={pathname === "/"}
              />
              <ServicesDropdown
                isActive={isServicesActive(pathname)}
                onNavigate={() => setMobileOpen(false)}
              />
              <AboutDropdown
                isActive={isAboutActive(pathname)}
                onNavigate={() => setMobileOpen(false)}
              />
              <NavLink
                href="/press"
                label="Пресс-служба"
                isActive={pathname === "/press"}
              />
              <NavLink
                href="/news"
                label="Новости"
                isActive={pathname === "/news"}
              />
              <NavLink
                href="/contacts"
                label="Контакты"
                isActive={pathname === "/contacts"}
              />
            </nav>

            <div className="hidden md:block shrink-0">
              <Button href={CTA_HREF} variant="primary">
                {CTA_LABEL}
              </Button>
            </div>

            <button
              id={BURGER_ID}
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden flex items-center justify-center rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-dialog"
              aria-haspopup="dialog"
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
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
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        triggerId={BURGER_ID}
      />
    </>
  );
}
