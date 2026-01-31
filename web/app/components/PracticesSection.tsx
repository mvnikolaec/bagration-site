import Link from "next/link";
import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  civil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 12h8M8 16h4" />
    </svg>
  ),
  family: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  inheritance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6" />
      <path d="M16 11H8M16 14H8M10 7H8" />
      <circle cx="12" cy="19" r="2.5" strokeWidth={2} />
    </svg>
  ),
  realEstate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" />
    </svg>
  ),
  housing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 7a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L11 17H9v2H7v2H4a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 1 1 21 9z" />
    </svg>
  ),
  arbitration: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v16M8 22h8" />
      <path d="M5 6Q12 3 19 6" />
      <path d="M7 5.5L5 10M7 5.5L9 10M17 5.5L15 10M17 5.5L19 10" />
      <path d="M5 10L3 14Q6 17 9 14L9 10M19 10L21 14Q18 17 15 14L15 10" />
    </svg>
  ),
  land: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-3.3 0-6 2.7-6 6 0 4 6 10 6 10s6-6 6-10c0-3.3-2.7-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  ),
  copyright: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9.5a3.5 3.5 0 0 0-5 0 3.5 3.5 0 0 0 0 5 3.5 3.5 0 0 0 5 0" />
    </svg>
  ),
  corporate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M14 10L20 12M14 10L12 4" />
    </svg>
  ),
  criminal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const PRACTICES = [
  { title: "Гражданские споры", description: "Защита прав и интересов в сложных гражданско-правовых конфликтах.", href: "/services/civil-disputes", icon: "civil" },
  { title: "Семейные споры", description: "Юридическое сопровождение семейных конфликтов и судебных разбирательств.", href: "/services/family-disputes", icon: "family" },
  { title: "Наследственные дела", description: "Оформление, оспаривание и защита наследственных прав.", href: "/services/inheritance", icon: "inheritance" },
  { title: "Недвижимость", description: "Сделки, споры и защита прав на объекты недвижимости.", href: "/services/real-estate", icon: "realEstate" },
  { title: "Жилищные споры", description: "Разрешение конфликтов, связанных с правом пользования жильём.", href: "/services/housing-disputes", icon: "housing" },
  { title: "Арбитраж", description: "Представительство в арбитражных судах и коммерческих спорах.", href: "/services/arbitration", icon: "arbitration" },
  { title: "Земельные споры", description: "Правовая защита по вопросам владения и использования земли.", href: "/services/land-disputes", icon: "land" },
  { title: "Авторское право", description: "Защита интеллектуальной собственности и нематериальных активов.", href: "/services/copyright", icon: "copyright" },
  { title: "Корпоративные споры", description: "Юридическое сопровождение конфликтов между участниками бизнеса.", href: "/services/corporate-disputes", icon: "corporate" },
  { title: "Уголовные дела", description: "Защита по уголовным делам на всех стадиях процесса.", href: "/services/criminal-cases", icon: "criminal" },
] as const;

export default function PracticesSection() {
  return (
    <section
      className="section-py"
      aria-labelledby="practices-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="section-header max-w-3xl">
          <h2
            id="practices-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Юридические практики коллегии адвокатов
          </h2>
          <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Работаем с частными лицами и бизнесом — в Москве и по всей России
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5">
          {PRACTICES.map(({ title, description, href, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="card-proxity group flex h-full flex-col p-4 sm:p-5"
              >
                <span className="mb-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--card-hover-bg)] text-[var(--accent-primary)] transition-colors duration-200 group-hover:bg-[var(--card-bg)] group-hover:text-[var(--accent-primary)]" aria-hidden>
                  <span className="h-5 w-5">{ICONS[icon]}</span>
                </span>
                <h3 className="text-base font-medium leading-tight text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-snug text-[var(--text-secondary)] line-clamp-2 sm:mt-2">
                  {description}
                </p>
                <span
                  className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-medium text-[var(--accent-primary)] sm:mt-3"
                  aria-hidden
                >
                  Подробнее
                  <svg
                    className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[5px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
