import type { Metadata } from "next";
import Link from "next/link";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Section from "./components/Section";
import ScrollIndicator from "./components/ScrollIndicator";

export const metadata: Metadata = {
  title: "Багратион — коллегия адвокатов Москвы",
  description:
    "Коллегия адвокатов города Москвы «Багратион». Гражданские и семейные споры, наследство, недвижимость, арбитраж, корпоративные и уголовные дела. Москва и онлайн.",
};

const services = [
  { href: "/services", title: "Гражданские споры", desc: "Защита интересов в судах общей юрисдикции." },
  { href: "/services", title: "Семейные споры", desc: "Развод, раздел имущества, дети, алименты." },
  { href: "/services", title: "Наследство", desc: "Оспаривание, принятие, споры между наследниками." },
  { href: "/services", title: "Недвижимость", desc: "Сделки, споры, взыскания, признание прав." },
  { href: "/services", title: "Арбитраж", desc: "Споры бизнеса: договоры, взыскания, банкротные риски." },
  { href: "/services", title: "Уголовные дела", desc: "Защита на всех стадиях: проверка, следствие, суд." },
];

const painPoints = [
  {
    title: "Сложно понять, что делать дальше",
    description: "Неясно, какие документы нужны, куда обращаться, какие сроки и риски.",
  },
  {
    title: "Боюсь потерять время и деньги",
    description: "Неправильные действия могут усугубить ситуацию и увеличить расходы.",
  },
  {
    title: "Нужна защита, а не просто консультация",
    description: "Требуется не только совет, но и активные действия, представительство в суде.",
  },
];

const solutions = [
  {
    title: "Стратегия до подачи документов",
    description: "Анализируем ситуацию, формируем правовую позицию и план действий до начала процесса.",
  },
  {
    title: "Прозрачные этапы работы",
    description: "Чёткие этапы: анализ → план → действия → результат. Понятные отчёты и контроль сроков.",
  },
  {
    title: "Опыт 20+ лет практики",
    description: "Каждый адвокат коллегии имеет многолетний опыт в ключевых направлениях права.",
  },
  {
    title: "Москва и онлайн",
    description: "Работаем очно в Москве и дистанционно по всей России. Гибкий формат взаимодействия.",
  },
];

const advantages = [
  {
    title: "Сконцентрированная практика",
    description: "Фокус на приоритетных категориях споров: гражданские, семейные, арбитраж, уголовные дела.",
  },
  {
    title: "Индивидуальный подход",
    description: "Каждое дело анализируется отдельно, стратегия формируется под конкретную ситуацию.",
  },
  {
    title: "Прозрачность и контроль",
    description: "Регулярные отчёты о ходе работы, контроль сроков, понятные объяснения каждого шага.",
  },
  {
    title: "Результат",
    description: "Ориентация на достижение целей клиента: защита интересов, восстановление прав, минимизация рисков.",
  },
];

const steps = [
  {
    number: "01",
    title: "Консультация",
    description: "Опишите ситуацию — мы оценим перспективы и предложим формат работы.",
  },
  {
    number: "02",
    title: "Анализ и стратегия",
    description: "Изучаем документы, формируем правовую позицию и план действий.",
  },
  {
    number: "03",
    title: "Реализация",
    description: "Выполняем план: переговоры, подготовка документов, представительство в суде.",
  },
  {
    number: "04",
    title: "Результат",
    description: "Достигаем цели: защита интересов, восстановление прав, решение спора.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — 30px от хедера (спейсер); ≥1024px: высота = 100dvh − --header-h, ровно первый экран */}
      <section
        className="flex flex-col pb-6 sm:pb-8 md:pb-10 lg:h-[calc(100dvh-var(--header-h))]"
        style={{ boxSizing: "border-box" }}
      >
        {/* Отступ 30px от нижней границы хедера; не margin — избегаем схлопывания */}
        <div className="h-[30px] w-full shrink-0" aria-hidden="true" />
        <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[10px] sm:gap-[14px] md:gap-4 lg:gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-1.5 text-[10px] font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 sm:text-xs">
              Москва · онлайн · коллегия адвокатов
            </div>

            <h1 className="min-w-0 text-lg font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-xl md:text-2xl lg:text-[1.75rem] xl:text-[2rem] 2xl:text-[2.25rem]">
              Коллегия «Багратион» — защита и представительство по делам любой сложности
            </h1>

            <p className="min-w-0 max-w-3xl text-sm leading-snug text-[var(--text-secondary)] sm:text-base md:text-base lg:text-lg">
              Практика в ключевых направлениях: гражданские и семейные споры, наследство,
              недвижимость, арбитраж, корпоративные конфликты и уголовные дела.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button href="/contacts" variant="primary" className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm">
                Получить консультацию
              </Button>
              <Button href="/services" variant="secondary" className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm">
                Смотреть услуги
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--text-muted)] sm:gap-x-6 sm:text-sm">
              <span>
                Телефон:{" "}
                <a
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  href="tel:+74954106600"
                >
                  +7 (495) 410-66-00
                </a>
              </span>
              <span>
                Email:{" "}
                <a
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  href="mailto:info@bagrationlegal.ru"
                >
                  info@bagrationlegal.ru
                </a>
              </span>
            </div>

            <div className="hidden md:block">
              <ScrollIndicator />
            </div>
          </div>
        </div>
      </section>

      {/* КОРОТКО О ПОДХОДЕ */}
      <Section className="bg-[var(--bg-secondary)]">
        <Container>
          <div className="max-w-4xl">
            <Card>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-[var(--text-muted)] mb-4">
                    Коротко о подходе
                  </div>
                  <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-muted)] mt-1">•</span>
                      <span>Стратегия и позиция по делу — до подачи документов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-muted)] mt-1">•</span>
                      <span>Прозрачные этапы: анализ → план → действия → результат</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-muted)] mt-1">•</span>
                      <span>Коммуникация: понятные отчёты и контроль сроков</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-muted)] mt-1">•</span>
                      <span>Опыт: 20+ лет практики у каждого адвоката коллегии</span>
                    </li>
                  </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-[var(--border-subtle)]">
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-1">Фокус</div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">Москва и онлайн</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-1">Формат</div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">Переговоры · суд · защита</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* PAIN POINTS */}
      <Section
        title="Часто бывает"
        description="Типичные ситуации, с которыми обращаются клиенты"
        className="bg-[var(--bg-secondary)]"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <Card key={index}>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section
        title="Как мы решаем"
        description="Наш подход к работе с делами клиентов"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Card key={index}>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        title="Ключевые направления"
        description="Сконцентрированная практика в приоритетных для клиентов категориях споров"
        className="bg-[var(--bg-secondary)]"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} href={service.href}>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{service.desc}</p>
                <div className="pt-2 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">
                  Подробнее →
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/services" variant="secondary">
            Все услуги
          </Button>
        </div>
      </Section>

      {/* ADVANTAGES */}
      <Section
        title="Почему нам доверяют"
        description="Преимущества работы с коллегией «Багратион»"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <Card key={index}>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{advantage.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* STEPS */}
      <Section
        title="Как начать работать"
        description="Четыре простых шага к решению вашей правовой задачи"
        className="bg-[var(--bg-secondary)]"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index}>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-[var(--text-muted)]/30">{step.number}</div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ATTORNEYS */}
      <Section
        title="Команда"
        description="Опытные адвокаты с многолетней практикой"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="space-y-4">
              <div className="text-sm font-medium text-[var(--text-muted)]">
                Председатель коллегии
              </div>
              <h3 className="text-2xl font-semibold">Михаил Николаец</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Рег. № 77/13 745 · стаж 20 лет · арбитраж, корпоративные споры, семейные дела,
                гражданские споры, недвижимость и земля, наследство, авторское право.
              </p>
              <div>
                <Link
                  href="/attorneys"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1"
                >
                  Подробнее об адвокатах →
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <div className="text-sm font-medium text-[var(--text-muted)]">
                Заместитель председателя
              </div>
              <h3 className="text-2xl font-semibold">Ольга Немцева</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Рег. № 77/10945 · стаж 28 лет · арбитраж, семейные дела, гражданские споры,
                наследство, уголовные дела.
              </p>
              <div>
                <Link
                  href="/attorneys"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1"
                >
                  Команда и специализации →
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        <Container>
          <Card className="border-[var(--accent-primary)]/20 bg-[var(--bg-tertiary)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Нужна правовая позиция и план действий?
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Опишите ситуацию — мы предложим формат работы и ближайшие шаги.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Button href="/contacts" variant="primary">
                  Записаться на консультацию
                </Button>
                <Button href="tel:+74954106600" variant="secondary">
                  Позвонить
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
