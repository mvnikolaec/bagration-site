import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";

const items = [
  {
    href: "/services/civil-disputes",
    title: "Гражданские споры",
    desc: "Взыскание, защита прав, споры по договорам, убытки, суд.",
  },
  {
    href: "/services/family-disputes",
    title: "Семейные споры",
    desc: "Развод, раздел имущества, алименты, дети, соглашения.",
  },
  {
    href: "/services/inheritance",
    title: "Наследство",
    desc: "Принятие, оспаривание, восстановление сроков, споры наследников.",
  },
  {
    href: "/services/real-estate",
    title: "Недвижимость",
    desc: "Сделки, признание права, обременения, взыскания, споры по объектам.",
  },
  {
    href: "/services/housing-disputes",
    title: "Жилищные споры",
    desc: "Выселение, вселение, пользование, ЖКХ, защита прав собственников.",
  },
  {
    href: "/services/arbitration",
    title: "Арбитраж",
    desc: "Споры бизнеса: договоры, поставки, подряд, взыскания, защита.",
  },
  {
    href: "/services/land-disputes",
    title: "Земельные споры",
    desc: "Границы, кадастр, сервитут, категории, право собственности.",
  },
  {
    href: "/services/copyright",
    title: "Авторское право",
    desc: "Защита прав, договоры, претензии, компенсации, удаление контента.",
  },
  {
    href: "/services/corporate-disputes",
    title: "Корпоративные споры",
    desc: "Доли, органы управления, сделки, конфликты участников, убытки.",
  },
  {
    href: "/services/criminal-cases",
    title: "Уголовные дела",
    desc: "Защита на всех стадиях: проверка, следствие, суд, обжалование.",
  },
];

export default function Page() {
  return (
    <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
      <Container>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Юридические услуги</h1>
            <p className="text-[var(--text-secondary)]">
              Практики коллегии «Багратион». Москва и онлайн. Ниже — основные направления,
              каждое с отдельной страницей и детализацией.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] p-6 hover:border-white/20 hover:bg-[var(--bg-hover)] transition"
              >
                <div className="text-base font-medium text-[var(--text-primary)]">{i.title}</div>
                <div className="mt-2 text-sm text-[var(--text-secondary)]">{i.desc}</div>
                <div className="mt-4 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition">
                  Перейти →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
