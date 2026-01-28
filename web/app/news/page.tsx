import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";

export const metadata: Metadata = {
  title: "Новости — Багратион",
  description:
    "Публикации, события коллегии и обновления по направлениям практики. Новости коллегии адвокатов «Багратион».",
};

const news = [
  {
    slug: "commentary-inheritance-rights",
    title: "Комментарий по делу о защите прав наследников",
    date: "15 января 2025",
    tag: "Наследство",
    excerpt:
      "Адвокаты коллегии прокомментировали актуальные вопросы наследования и защиты прав наследников в современных условиях. Разбор типичных ситуаций и рекомендации.",
  },
  {
    slug: "arbitration-conference",
    title: "Участие в конференции по арбитражному праву",
    date: "10 января 2025",
    tag: "Арбитраж",
    excerpt:
      "Представители коллегии выступили на конференции, посвящённой актуальным вопросам арбитражного процесса и корпоративных споров. Ключевые тезисы выступления.",
  },
  {
    slug: "family-disputes-expert",
    title: "Экспертное мнение по семейным спорам",
    date: "5 января 2025",
    tag: "Семейное право",
    excerpt:
      "Разбор типичных ситуаций в семейных спорах и рекомендации по защите интересов при разводе и разделе имущества. Практические советы адвокатов.",
  },
  {
    slug: "criminal-defense-rights",
    title: "Защита прав в уголовных делах",
    date: "28 декабря 2024",
    tag: "Уголовное право",
    excerpt:
      "Комментарий о важности своевременного обращения к адвокату на стадии доследственной проверки и следствия. Практические рекомендации.",
  },
  {
    slug: "real-estate-legislation",
    title: "Новое в законодательстве о недвижимости",
    date: "20 декабря 2024",
    tag: "Недвижимость",
    excerpt:
      "Обзор изменений в законодательстве, влияющих на сделки с недвижимостью и защиту прав собственников. Что важно знать в 2025 году.",
  },
  {
    slug: "corporate-disputes-trends",
    title: "Корпоративные споры: практика и тенденции",
    date: "15 декабря 2024",
    tag: "Корпоративное право",
    excerpt:
      "Анализ практики разрешения корпоративных конфликтов и споров между участниками хозяйственных обществ. Статистика и прогнозы.",
  },
  {
    slug: "civil-disputes-practice",
    title: "Практика по гражданским спорам в 2024 году",
    date: "10 декабря 2024",
    tag: "Гражданское право",
    excerpt:
      "Итоги года в разрешении гражданских споров. Основные тенденции судебной практики и изменения в подходах к защите прав граждан.",
  },
  {
    slug: "housing-disputes-guide",
    title: "Руководство по жилищным спорам",
    date: "5 декабря 2024",
    tag: "Жилищное право",
    excerpt:
      "Подробный разбор типичных жилищных споров: выселение, признание права собственности, споры с управляющими компаниями. Практические рекомендации.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Новости" }]} />

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Новости
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Публикации, события коллегии и обновления по направлениям практики.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <Card key={item.slug} href={`/news/${item.slug}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                    <time dateTime={item.date}>{item.date}</time>
                    <span className="px-2 py-1 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                      {item.tag}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold leading-tight text-[var(--text-primary)]">{item.title}</h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="pt-2 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">
                    Читать далее →
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
