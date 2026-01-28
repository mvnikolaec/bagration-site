import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-lg font-semibold text-[var(--text-primary)]">КА «Багратион»</div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Московская коллегия адвокатов. Представительство и защита интересов
              доверителей в Москве и по всей России.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium text-[var(--text-primary)]">Контакты</div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652</div>
              <div>
                <a
                  className="hover:text-[var(--accent-primary)] transition-colors"
                  href="mailto:info@bagrationlegal.ru"
                >
                  info@bagrationlegal.ru
                </a>
              </div>
              <div>
                <a
                  className="hover:text-[var(--accent-primary)] transition-colors"
                  href="tel:+74954106600"
                >
                  +7 (495) 410-66-00
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium text-[var(--text-primary)]">Навигация</div>
            <nav className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>
                <Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">
                  О коллегии
                </Link>
              </div>
              <div>
                <Link href="/services" className="hover:text-[var(--accent-primary)] transition-colors">
                  Услуги
                </Link>
              </div>
              <div>
                <Link href="/attorneys" className="hover:text-[var(--accent-primary)] transition-colors">
                  Адвокаты
                </Link>
              </div>
              <div>
                <Link href="/news" className="hover:text-[var(--accent-primary)] transition-colors">
                  Новости
                </Link>
              </div>
            </nav>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium text-[var(--text-primary)]">Реквизиты</div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--text-muted)]">ИНН</span> 9705175976
              </div>
              <div>
                <span className="text-[var(--text-muted)]">ОГРН</span> 1227700505757
              </div>
              <div className="pt-2 text-[var(--text-muted)]">
                © {new Date().getFullYear()} КА «Багратион»
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
