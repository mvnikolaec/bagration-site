import Link from "next/link";

const PRACTICES = [
  {
    title: "Гражданские споры",
    description:
      "Защита прав и интересов в сложных гражданско-правовых конфликтах.",
    href: "/services/civil-disputes",
  },
  {
    title: "Семейные споры",
    description:
      "Юридическое сопровождение семейных конфликтов и судебных разбирательств.",
    href: "/services/family-disputes",
  },
  {
    title: "Наследственные дела",
    description: "Оформление, оспаривание и защита наследственных прав.",
    href: "/services/inheritance",
  },
  {
    title: "Недвижимость",
    description:
      "Сделки, споры и защита прав на объекты недвижимости.",
    href: "/services/real-estate",
  },
  {
    title: "Жилищные споры",
    description:
      "Разрешение конфликтов, связанных с правом пользования жильём.",
    href: "/services/housing-disputes",
  },
  {
    title: "Арбитраж",
    description:
      "Представительство в арбитражных судах и коммерческих спорах.",
    href: "/services/arbitration",
  },
  {
    title: "Земельные споры",
    description:
      "Правовая защита по вопросам владения и использования земли.",
    href: "/services/land-disputes",
  },
  {
    title: "Авторское право",
    description:
      "Защита интеллектуальной собственности и нематериальных активов.",
    href: "/services/copyright",
  },
  {
    title: "Корпоративные споры",
    description:
      "Юридическое сопровождение конфликтов между участниками бизнеса.",
    href: "/services/corporate-disputes",
  },
  {
    title: "Уголовные дела",
    description:
      "Защита по уголовным делам на всех стадиях процесса.",
    href: "/services/criminal-cases",
  },
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
          {PRACTICES.map(({ title, description, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="card-proxity group flex h-full flex-col p-4 sm:p-5"
              >
                <h3 className="text-base font-medium leading-tight text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-snug text-[var(--text-secondary)] line-clamp-2 sm:mt-2">
                  {description}
                </p>
                <span
                  className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-medium text-[var(--accent-primary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:mt-3"
                  aria-hidden
                >
                  Подробнее
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
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
