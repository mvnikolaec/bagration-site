import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Багратион — коллегия адвокатов Москвы",
  description:
    "Коллегия адвокатов города Москвы «Багратион». Гражданские и семейные споры, наследство, недвижимость, арбитраж, корпоративные и уголовные дела. Москва и онлайн.",
};

const nav = [
  { href: "/services", label: "Услуги" },
  { href: "/attorneys", label: "Адвокаты" },
  { href: "/about", label: "О коллегии" },
  { href: "/press", label: "Пресс-служба" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-lg font-semibold tracking-wide">
                Багратион
              </span>
              <span className="hidden text-xs text-white/60 sm:block">
                коллегия адвокатов Москвы
              </span>
            </Link>

            <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+74954106600"
                className="hidden text-sm text-white/80 hover:text-white md:block"
              >
                +7 (495) 410-66-00
              </a>
              <Link
                href="/contacts"
                className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30 hover:bg-white/5 transition"
              >
                Консультация
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">КА «Багратион»</div>
              <div className="mt-2 text-sm text-white/60">
                Москва · онлайн. Представительство и защита интересов доверителей.
              </div>
            </div>

            <div className="text-sm text-white/60">
              <div>119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652</div>
              <div className="mt-2">
                <a className="hover:text-white" href="mailto:info@bagrationlegal.ru">
                  info@bagrationlegal.ru
                </a>
              </div>
              <div className="mt-2">
                <a className="hover:text-white" href="tel:+74954106600">
                  +7 (495) 410-66-00
                </a>
              </div>
            </div>

            <div className="text-sm text-white/60 md:text-right">
              <div>© {new Date().getFullYear()} КА «Багратион»</div>
              <div className="mt-2">
                <span className="text-white/40">ИНН</span> 9705175976 ·{" "}
                <span className="text-white/40">ОГРН</span> 1227700505757
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
