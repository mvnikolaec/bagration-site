import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import CivilDisputesFaq from "./CivilDisputesFaq";
import StickySidebar from "./StickySidebar";

const CATEGORY_ICONS: Record<string, ReactNode> = {
  ownership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  ),
  property: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  debt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  damages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 9l7-4 7 4M5 15l7 4 7-4" />
    </svg>
  ),
  enrichment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  contract: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 12h8M8 16h4" />
    </svg>
  ),
  dispute: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2H9z" />
      <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2H9z" />
      <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  drafting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
};

const SITE_URL = "https://bagrationlegal.ru";

export const metadata: Metadata = {
  title: "Адвокаты по гражданским спорам",
  description:
    "Защита по гражданским спорам: признание права собственности, взыскание задолженности, оспаривание сделок и представительство в суде.",
  alternates: {
    canonical: `${SITE_URL}/services/civil-disputes`,
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Гражданские споры", item: `${SITE_URL}/services/civil-disputes` },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что относится к гражданским спорам?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "К гражданским спорам относятся конфликты, возникающие из имущественных и иных правоотношений между участниками гражданского оборота.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько длится рассмотрение гражданского дела?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Срок рассмотрения зависит от сложности дела, объема доказательств и процессуальной позиции сторон.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли урегулировать спор без суда?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В ряде случаев возможен досудебный порядок урегулирования, если стороны готовы к переговорам.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли взыскать судебные расходы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Возможность взыскания судебных расходов определяется результатом рассмотрения дела и процессуальными нормами.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли обжаловать решение суда?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Решения суда могут быть обжалованы в апелляционном и кассационном порядке при наличии соответствующих оснований.",
      },
    },
  ],
};

const CATEGORIES = [
  { icon: "ownership" as const, title: "Признание права собственности", description: "Правовая поддержка в делах о признании права собственности на недвижимость и иное имущество. Проводим анализ оснований возникновения права, формируем доказательственную базу и выстраиваем аргументированную позицию." },
  { icon: "property" as const, title: "Защита прав собственности", description: "Представляем интересы в спорах, связанных с нарушением прав владения и пользования имуществом. Разрабатываем стратегию восстановления нарушенных прав и минимизации дальнейших юридических рисков." },
  { icon: "debt" as const, title: "Взыскание задолженности", description: "Сопровождаем процедуры взыскания денежных средств по распискам, договорам займа и иным обязательствам. Подготавливаем процессуальные документы и контролируем исполнение судебного решения." },
  { icon: "damages" as const, title: "Возмещение вреда и убытков", description: "Оказываем правовую помощь при взыскании имущественного и неимущественного вреда. Обеспечиваем подготовку доказательств и представительство в судебном процессе." },
  { icon: "enrichment" as const, title: "Неосновательное обогащение", description: "Представляем интересы в делах о возврате имущества или денежных средств, полученных без законных оснований. Формируем правовую позицию с учетом обстоятельств дела." },
  { icon: "contract" as const, title: "Договорные споры", description: "Разрешаем конфликты, возникающие из договорных обязательств. Проводим анализ условий договора и определяем правовые механизмы защиты." },
  { icon: "dispute" as const, title: "Оспаривание сделок", description: "Подготавливаем правовую позицию по делам о признании сделок недействительными. Обеспечиваем сбор доказательств и сопровождение судебного процесса." },
  { icon: "support" as const, title: "Сопровождение сделок", description: "Проводим правовой анализ и сопровождение сделок с целью снижения рисков и предотвращения возможных споров." },
  { icon: "drafting" as const, title: "Разработка договоров", description: "Разрабатываем договоры с учетом конкретной правовой ситуации и интересов сторон. Обеспечиваем юридическую точность формулировок и профилактику будущих конфликтов." },
] as const;

const RELATED_LINKS = [
  { title: "Семейные споры", href: "/services/family-disputes" },
  { title: "Наследственные дела", href: "/services/inheritance" },
  { title: "Недвижимость", href: "/services/real-estate" },
] as const;

const SECTION_CLASS = "pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10";

export default function CivilDisputesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      {/* Hero: 70vh, как на странице Пресс-службы — full-bleed фон, фиксированная высота, контент по верху, без наложения на следующий блок */}
      <section data-hero="section" className="relative flex min-h-[70vh] h-[70vh] w-full flex-col justify-start overflow-hidden">
        <div className="absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 opacity-[0.15] hero-press-bg">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/hero/civil-disputes-hero.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_22%]"
              priority
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" aria-hidden="true" />
        </div>
        <div className="relative z-10 flex h-full min-h-0 flex-col overflow-y-auto container-main hero-content-top-ref pb-10 sm:pb-12 lg:pb-14">
          <div className="stack-md max-w-3xl">
          <nav aria-label="Хлебные крошки">
            <ol data-hero="badge" className="hero-badge inline-flex w-fit flex-wrap items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/60 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 md:text-sm backdrop-blur-sm">
              <li>
                <Link href="/" className="link-proxity hover:text-[var(--accent-primary)]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="link-proxity hover:text-[var(--accent-primary)]">
                  Услуги
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[var(--text-primary)]" aria-current="page">
                Гражданские споры
              </li>
            </ol>
          </nav>
          <header className="flex flex-1 min-h-0 flex-col stack-md">
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              Защита по гражданским спорам
            </h1>
            <p className="text-sm leading-snug text-[var(--text-secondary)] sm:text-base">
              Комплексное сопровождение гражданских дел в судах общей юрисдикции — от правового анализа ситуации до исполнения судебного решения.
            </p>
            <p className="text-xs leading-snug text-[var(--text-secondary)] sm:text-sm">
              Коллегия адвокатов «Багратион» сопровождает гражданские дела различной сложности. Работа строится на оценке судебной практики, анализе доказательственной базы и формировании правовой стратегии с учетом процессуальных рисков.
            </p>
          </header>
          <div className="mt-auto shrink-0 flex flex-wrap gap-3">
            <Button href="/contacts" variant="primary">
              Получить консультацию
            </Button>
            <Button href="/contacts" variant="secondary">
              Оценить перспективы дела
            </Button>
          </div>
          </div>
        </div>
      </section>

      <div className="container-main bg-transparent lg:grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] lg:gap-10 xl:gap-12 lg:overflow-visible">
        <div className="min-w-0">
        {/* Блок 2 — Экспертный ввод */}
        <section className={SECTION_CLASS} aria-labelledby="expert-heading">
          <h2
            id="expert-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Гражданские споры и судебная защита прав
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  Гражданские споры возникают при нарушении имущественных и неимущественных прав. К таким делам относятся конфликты, связанные с признанием права собственности, взысканием задолженности, возмещением вреда, оспариванием сделок и исполнением договорных обязательств.
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  Результат спора во многом зависит от корректного определения способа защиты права и правовой квалификации требований. Ошибки на начальном этапе могут повлиять на дальнейший ход процесса и перспективу дела.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Блок 3 — Категории гражданских дел */}
        <section className={SECTION_CLASS} aria-labelledby="categories-heading">
          <h2
            id="categories-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Категории гражданских дел
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 min-[480px]:gap-4 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5">
            {CATEGORIES.map(({ icon, title, description }) => (
              <li key={title}>
                <article className="card-proxity group flex h-full min-h-0 flex-col p-3 min-[480px]:p-4 sm:p-5 md:p-4 lg:p-5">
                  <div className="mb-1.5 flex min-w-0 items-center justify-between gap-2 min-[480px]:mb-2 min-[480px]:gap-3 sm:gap-3">
                    <h3 className="min-w-0 flex-1 truncate text-sm font-medium leading-tight text-[var(--text-primary)] min-[480px]:text-base sm:text-lg">
                      {title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 translate-y-0.5 items-center justify-center rounded-lg bg-[var(--card-hover-bg)] text-[var(--accent-primary)] transition-colors duration-200 group-hover:bg-[var(--card-bg)]" aria-hidden>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0">{CATEGORY_ICONS[icon]}</span>
                    </span>
                  </div>
                  <p className="mt-1 flex-1 text-xs leading-snug text-[var(--text-secondary)] min-[480px]:mt-1.5 min-[480px]:text-sm sm:mt-2">
                    {description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Блок 4 — Типичные сложности */}
        <section className={SECTION_CLASS} aria-labelledby="complexity-heading">
          <h2
            id="complexity-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Процессуальные и правовые сложности
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                В гражданских спорах нередко возникают процессуальные и доказательственные трудности:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-sm text-[var(--text-secondary)] sm:text-base marker:text-[var(--accent-primary)]">
                <li>недостаточность доказательственной базы</li>
                <li>пропуск срока исковой давности</li>
                <li>неверная правовая квалификация требований</li>
                <li>встречные иски</li>
                <li>необходимость проведения экспертиз</li>
                <li>применение обеспечительных мер</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Комплексный правовой анализ позволяет своевременно выявить риски и сформировать обоснованную позицию.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 5 — Как выстраивается защита */}
        <section className={SECTION_CLASS} aria-labelledby="protection-heading">
          <h2
            id="protection-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Как выстраивается защита по гражданскому спору
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Гражданский спор требует не только подготовки процессуальных документов, но и стратегического анализа ситуации. Каждое дело рассматривается индивидуально с учетом фактических обстоятельств и судебной практики.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Работа включает:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[var(--text-secondary)] sm:text-base marker:text-[var(--accent-primary)]">
                <li>определение способа защиты нарушенного права</li>
                <li>анализ документов и доказательств</li>
                <li>оценку процессуальных рисков</li>
                <li>подготовку исковых требований или возражений</li>
                <li>представительство на всех стадиях процесса</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Правовая позиция формируется исходя из перспектив конкретного дела, а не шаблонных решений.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 6 — Стратегия ведения дела */}
        <section className={SECTION_CLASS} aria-labelledby="strategy-heading">
          <h2
            id="strategy-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Стратегия ведения гражданского дела
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--text-secondary)] sm:text-base marker:font-medium marker:text-[var(--accent-primary)]">
                <li>Анализ обстоятельств спора и оценка правовой перспективы</li>
                <li>Формирование доказательственной базы</li>
                <li>Подготовка процессуальных документов</li>
                <li>Представительство в суде первой инстанции</li>
                <li>Обжалование судебных актов</li>
                <li>Контроль исполнения судебного решения</li>
              </ol>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Последовательность действий определяется спецификой дела и выбранной правовой стратегией.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 7 — Выбор способа защиты права */}
        <section className={SECTION_CLASS} aria-labelledby="method-heading">
          <h2
            id="method-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Выбор способа защиты права
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Неверно выбранный способ защиты может привести к отказу в удовлетворении требований независимо от фактических обстоятельств. Правильная квалификация требований и корректная формулировка исковых требований являются ключевыми элементами судебной стратегии.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 8 — Судебные расходы */}
        <section className={SECTION_CLASS} aria-labelledby="costs-heading">
          <h2
            id="costs-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Судебные расходы
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                В зависимости от обстоятельств дела возможно взыскание судебных расходов, включая расходы на представителя и иные процессуальные издержки. Вопрос о распределении расходов решается судом с учетом характера спора и итогового судебного акта.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 9 — Исполнение судебного решения */}
        <section className={SECTION_CLASS} aria-labelledby="enforcement-heading">
          <h2
            id="enforcement-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Исполнение судебного решения
          </h2>
          <div className="mt-4 max-w-3xl lg:max-w-none">
            <div className="card-proxity px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Правовая защита не ограничивается вынесением судебного акта. Контроль исполнения решения и взаимодействие с органами принудительного исполнения являются важным этапом работы по делу.
              </p>
            </div>
          </div>
        </section>

        {/* Блок 10 — FAQ */}
        <section id="faq-section" className={SECTION_CLASS} aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Ответы на вопросы по гражданским спорам
          </h2>
          <div className="mt-5">
            <CivilDisputesFaq />
          </div>
        </section>

        {/* Блок 11 — Связанные практики (только вне lg: на мобильных и вертикальном планшете) */}
        <section className={`${SECTION_CLASS} lg:hidden`} aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Связанные практики
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
            {RELATED_LINKS.map(({ title, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="card-proxity group flex h-full items-center justify-between p-4 transition-colors sm:p-5"
                >
                  <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-base">
                    {title}
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Блок 12 — Финальный CTA (только вне lg: на мобильных и вертикальном планшете) */}
        <section className="pt-6 pb-12 sm:pt-8 sm:pb-14 lg:hidden" aria-labelledby="cta-heading">
          <div className="card-proxity mx-auto max-w-2xl px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <h2
              id="cta-heading"
              className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
            >
              Оценка перспектив дела
            </h2>
            <p className="section-title-sub mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Предварительный правовой анализ позволяет определить возможные риски и сформировать стратегию защиты.
            </p>
            <div className="mt-5 sm:mt-6">
              <Button href="/contacts" variant="primary">
                Получить консультацию
              </Button>
            </div>
          </div>
        </section>
        </div>

        {/* Правая колонка: только на ПК и горизонтальном планшете (lg+), анимированная при скролле */}
        <StickySidebar />
      </div>
    </>
  );
}
