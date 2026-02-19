"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
const REVEAL_PX = 20; /* фон хедера появляется плавно за первые 20px прокрутки */

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
  const [bgOpacity, setBgOpacity] = useState(0);
  const [logoWidth, setLogoWidth] = useState<number | null>(null);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line1MeasureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
      setBgOpacity(Math.min(1, Math.max(0, scrollY / REVEAL_PX)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const syncLogoWidth = () => {
      const line2 = line2Ref.current;
      const measure = line1MeasureRef.current;
      if (!line2 || !measure) return;
      const w2 = line2.offsetWidth;
      const w1 = measure.offsetWidth;
      if (w2 > 0 && w1 >= 0) {
        setLogoWidth(w2);
        setLetterSpacing((w2 - w1) / 8);
      }
    };
    const runAfterLayout = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(syncLogoWidth);
      });
    };
    runAfterLayout();
    window.addEventListener("resize", runAfterLayout);
    const observer = new ResizeObserver(runAfterLayout);
    const tid = setTimeout(() => {
      if (line2Ref.current) observer.observe(line2Ref.current);
    }, 0);
    return () => {
      clearTimeout(tid);
      window.removeEventListener("resize", runAfterLayout);
      observer.disconnect();
    };
  }, []);

  const atTop = bgOpacity <= 0;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 ${atTop ? "header-at-top" : ""}`}
        style={{
          backdropFilter: atTop ? "none" : "blur(12px)",
          WebkitBackdropFilter: atTop ? "none" : "blur(12px)",
        }}
        role="banner"
      >
        {/* Фон хедера: появляется при прокрутке за первые 20px */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-150 ease-out"
          style={{
            opacity: bgOpacity,
            background: "var(--header-footer-overlay)",
            borderColor: "transparent",
          }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="flex items-center justify-between py-3">
            <Link
              href="/"
              className="link-proxity relative flex items-center rounded-[var(--btn-radius)] pl-0 pr-1 py-0.5 text-[var(--text-primary)] focus-visible:outline-none"
              style={{ gap: 8 }}
              aria-label="Багратион — на главную"
            >
              {/* Логотип: один размер на всех устройствах */}
              <Image
                src="/images/logo.png"
                alt=""
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 object-contain block header-logo-blue"
                aria-hidden
              />
              {/* Скрытый span для измерения естественной ширины «БАГРАТИОН» (без доп. интервала) */}
              <span
                ref={line1MeasureRef}
                className="text-base font-semibold absolute left-[-9999px] top-0 whitespace-nowrap"
                aria-hidden
              >
                БАГРАТИОН
              </span>
              <span
                className="inline-flex flex-col items-stretch -mt-[3px]"
                style={logoWidth != null ? { width: logoWidth } : undefined}
              >
                <span
                  className="text-base font-semibold whitespace-nowrap"
                  style={{
                    letterSpacing:
                      logoWidth != null && letterSpacing !== 0
                        ? `${letterSpacing}px`
                        : "0.12em",
                  }}
                >
                  БАГРАТИОН
                </span>
                <span
                  ref={line2Ref}
                  className="text-[9px] text-[var(--text-muted)] tracking-[0.1em] whitespace-nowrap leading-tight"
                >
                  КОЛЛЕГИЯ АДВОКАТОВ
                </span>
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
              className="btn-proxity-base btn-proxity-ghost md:hidden flex items-center justify-center rounded-[var(--btn-radius)] p-1.5 focus-visible:outline-none"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-dialog"
              aria-haspopup="dialog"
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
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
