import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";

export const metadata: Metadata = {
  title: "О коллегии — Багратион",
  description:
    "Московская коллегия адвокатов «Bagration» — юридическая команда, оказывающая помощь гражданам и бизнесу в Москве и по всей России.",
};

const principles = [
  {
    title: "Профессионализм",
    description:
      "Каждый адвокат коллегии имеет многолетний опыт и специализацию в ключевых направлениях права.",
  },
  {
    title: "Прозрачность",
    description:
      "Чёткие этапы работы, понятные отчёты, контроль сроков. Клиент всегда в курсе происходящего.",
  },
  {
    title: "Результат",
    description:
      "Ориентация на достижение целей клиента: защита интересов, восстановление прав, решение спора.",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Каждое дело анализируется отдельно, стратегия формируется под конкретную ситуацию клиента.",
  },
];

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Коллегия адвокатов «Багратион»",
    alternateName: "КА «Багратион»",
    description:
      "Московская коллегия адвокатов, оказывающая помощь гражданам и бизнесу в Москве и по всей России.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Арбат, д. 35, этаж 6, офис 652",
      addressLocality: "Москва",
      postalCode: "119002",
      addressCountry: "RU",
    },
    telephone: "+74954106600",
    email: "info@bagrationlegal.ru",
    url: "https://bagrationlegal.ru",
    areaServed: {
      "@type": "Country",
      name: "Россия",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О коллегии" }]} />

          <div className="max-w-4xl space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                О коллегии
              </h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Московская коллегия адвокатов «Bagration» — юридическая команда, оказывающая помощь
                гражданам и бизнесу в Москве и по всей России.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSION */}
      <Section
        title="Миссия и принципы"
        description="Ценности, которыми мы руководствуемся в работе"
        className="bg-[var(--bg-tertiary)]"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Card key={index}>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{principle.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{principle.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section
        title="Команда"
        description="Опытные адвокаты с многолетней практикой в ключевых направлениях права"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="space-y-4">
              <div className="text-sm font-medium text-[var(--text-muted)]">Председатель коллегии</div>
              <h3 className="text-2xl font-semibold">Михаил Николаец</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Рег. № 77/13 745 · стаж 20 лет · арбитраж, корпоративные споры, семейные дела,
                гражданские споры, недвижимость и земля, наследство, авторское право.
              </p>
              <div>
                <Link
                  href="/attorneys/mikhail-nikolaets"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1"
                >
                  Подробнее →
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
                  href="/attorneys/olga-nemtseva"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1"
                >
                  Подробнее →
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button href="/attorneys" variant="secondary">
            Вся команда
          </Button>
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section
        title="Документы и реквизиты"
        description="Официальная информация о коллегии"
        className="bg-[var(--bg-tertiary)]"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-[var(--text-muted)]">Полное наименование</div>
              <div className="text-lg font-semibold">
                Коллегия адвокатов города Москвы «Багратион»
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-[var(--text-muted)]">ИНН</div>
              <div className="text-lg font-semibold">9705175976</div>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-[var(--text-muted)]">ОГРН</div>
              <div className="text-lg font-semibold">1227700505757</div>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-[var(--text-muted)]">Адрес</div>
              <div className="text-[var(--text-primary)]">
                119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-[var(--text-muted)]">Телефон</div>
              <div>
                <a
                  href="tel:+74954106600"
                  className="text-lg font-semibold hover:text-[var(--accent-primary)] transition-colors"
                >
                  +7 (495) 410-66-00
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-[var(--text-muted)]">Email</div>
              <div>
                <a
                  href="mailto:info@bagrationlegal.ru"
                  className="text-lg font-semibold hover:text-[var(--accent-primary)] transition-colors"
                >
                  info@bagrationlegal.ru
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Card className="border-[var(--accent-primary)]/20 bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Готовы начать работу?
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Свяжитесь с нами для консультации по вашему вопросу.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Button href="/contacts" variant="primary">
                  Получить консультацию
                </Button>
                <Button href="/services" variant="secondary">
                  Наши услуги
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
