import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Faq from "../components/Faq";
import Section from "../components/Section";

export const metadata: Metadata = {
  title: "Пресс-служба — Багратион",
  description:
    "Официальные заявления, комментарии для СМИ, аккредитация и запросы. Пресс-служба коллегии адвокатов «Багратион».",
};

const pressReleases = [
  {
    title: "Комментарий по делу о защите прав наследников",
    date: "15 января 2025",
    category: "Наследство",
    excerpt:
      "Адвокаты коллегии прокомментировали актуальные вопросы наследования и защиты прав наследников в современных условиях.",
  },
  {
    title: "Участие в конференции по арбитражному праву",
    date: "10 января 2025",
    category: "Арбитраж",
    excerpt:
      "Представители коллегии выступили на конференции, посвящённой актуальным вопросам арбитражного процесса и корпоративных споров.",
  },
  {
    title: "Экспертное мнение по семейным спорам",
    date: "5 января 2025",
    category: "Семейное право",
    excerpt:
      "Разбор типичных ситуаций в семейных спорах и рекомендации по защите интересов при разводе и разделе имущества.",
  },
  {
    title: "Защита прав в уголовных делах",
    date: "28 декабря 2024",
    category: "Уголовное право",
    excerpt:
      "Комментарий о важности своевременного обращения к адвокату на стадии доследственной проверки и следствия.",
  },
  {
    title: "Новое в законодательстве о недвижимости",
    date: "20 декабря 2024",
    category: "Недвижимость",
    excerpt:
      "Обзор изменений в законодательстве, влияющих на сделки с недвижимостью и защиту прав собственников.",
  },
  {
    title: "Корпоративные споры: практика и тенденции",
    date: "15 декабря 2024",
    category: "Корпоративное право",
    excerpt:
      "Анализ практики разрешения корпоративных конфликтов и споров между участниками хозяйственных обществ.",
  },
];

const faqItems = [
  {
    question: "Как сделать запрос для СМИ?",
    answer:
      "Для запроса комментария или экспертного мнения отправьте письмо на адрес info@bagrationlegal.ru с указанием темы, формата (текст, интервью, комментарий) и дедлайна. Мы постараемся ответить в кратчайшие сроки.",
  },
  {
    question: "Какие темы мы освещаем?",
    answer:
      "Мы готовы прокомментировать вопросы, связанные с гражданским, семейным, арбитражным, корпоративным, уголовным правом, недвижимостью, наследством и другими направлениями нашей практики.",
  },
  {
    question: "Можно ли получить комментарий в день обращения?",
    answer:
      "Мы стараемся оперативно реагировать на запросы СМИ. В зависимости от сложности вопроса и загруженности адвокатов, комментарий может быть предоставлен в течение нескольких часов или в течение рабочего дня.",
  },
  {
    question: "Предоставляете ли вы экспертов для интервью?",
    answer:
      "Да, наши адвокаты готовы участвовать в интервью, теле- и радиоэфирах, панельных дискуссиях. Свяжитесь с нами для согласования формата и времени.",
  },
  {
    question: "Есть ли у вас пресс-кит?",
    answer:
      "Да, мы можем предоставить информацию о коллегии, биографии адвокатов, фотографии и другую информацию для публикаций. Запросите материалы по адресу info@bagrationlegal.ru.",
  },
];

export default function PressPage() {
  return (
    <>
      <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Пресс-служба" }]} />

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Пресс-служба
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Официальные заявления, комментарии для СМИ, аккредитация и запросы.
            </p>
          </div>
        </Container>
      </Section>

      {/* MEDIA REQUESTS */}
      <Section
        title="Запросы СМИ"
        description="Свяжитесь с нами для получения комментариев и экспертных мнений"
        className="bg-[var(--bg-tertiary)]"
      >
        <Card className="max-w-3xl mx-auto border-[var(--accent-primary)]/20 bg-[var(--bg-secondary)]">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Контакты пресс-службы</h3>
              <div className="space-y-4 text-[var(--text-secondary)]">
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Email</div>
                    <a
                      href="mailto:info@bagrationlegal.ru"
                      className="text-lg font-medium hover:text-[var(--accent-primary)] transition-colors"
                    >
                      info@bagrationlegal.ru
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Телефон</div>
                    <a
                      href="tel:+74954106600"
                      className="text-lg font-medium hover:text-[var(--accent-primary)] transition-colors"
                    >
                      +7 (495) 410-66-00
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Время работы</div>
                    <div className="text-lg font-medium text-[var(--text-primary)]">Пн–Пт: 9:00–19:00</div>
                  </div>
                </div>
            </div>
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Для запроса комментария укажите тему, формат (текст, интервью, комментарий) и
                дедлайн. Мы постараемся ответить в кратчайшие сроки.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* PRESS RELEASES */}
      <Section
        title="Пресс-релизы"
        description="Публикации, комментарии и экспертные мнения"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressReleases.map((release, index) => (
            <Card key={index}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                  <span>{release.date}</span>
                  <span className="px-2 py-1 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                    {release.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-tight text-[var(--text-primary)]">{release.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {release.excerpt}
                </p>
                <div className="pt-2 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">Читать далее →</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Часто задаваемые вопросы"
        description="Ответы на типичные вопросы от представителей СМИ"
        className="bg-[var(--bg-tertiary)]"
      >
        <div className="max-w-3xl">
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Card className="border-[var(--accent-primary)]/20 bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Нужен комментарий или интервью?
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Свяжитесь с нами, и мы оперативно подготовим ответ на ваш запрос.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Button href="mailto:info@bagrationlegal.ru" variant="primary">
                  Написать в пресс-службу
                </Button>
                <Button href="/contacts" variant="secondary">
                  Контакты
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
