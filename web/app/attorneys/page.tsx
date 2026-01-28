import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";

const lawyers = [
  {
    slug: "mikhail-nikolaets",
    name: "Михаил Николаец",
    role: "Председатель коллегии",
    reg: "Рег. № 77/13 745",
    experience: "Стаж 20 лет",
    specializations:
      "Арбитраж, корпоративные споры, семейные дела, гражданские споры, недвижимость и земля, наследство, авторское право",
  },
  {
    slug: "olga-nemtseva",
    name: "Ольга Немцева",
    role: "Заместитель председателя",
    reg: "Рег. № 77/10945",
    experience: "Стаж 28 лет",
    specializations:
      "Арбитраж, семейные дела, гражданские споры, наследство, уголовные дела",
  },
];

export default function Page() {
  const personsJsonLd = {
    "@context": "https://schema.org",
    "@graph": lawyers.map((l) => ({
      "@type": "Person",
      name: l.name,
      jobTitle: l.role,
      worksFor: {
        "@type": "Organization",
        name: "Коллегия адвокатов города Москвы «Багратион»",
      },
      url: `https://bagrationlegal.ru/attorneys/${l.slug}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "улица Арбат, дом 35, этаж 6, офис 652",
        addressLocality: "Москва",
        postalCode: "119002",
        addressCountry: "RU",
      },
      telephone: "+7 (495) 410-66-00",
      email: "info@bagrationlegal.ru",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personsJsonLd) }}
      />
      <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Адвокаты коллегии «Багратион»</h1>
              <p className="text-[var(--text-secondary)]">
                Два адвоката коллегии — практики с большим опытом, ведущие дела частных лиц и бизнеса в Москве и онлайн.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
        {lawyers.map((l) => (
          <Link
            key={l.slug}
            href={`/attorneys/${l.slug}`}
            className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] p-7 hover:border-white/20 hover:bg-[var(--bg-hover)] transition"
          >
            <div className="text-xs text-[var(--text-muted)]">{l.role}</div>
            <div className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{l.name}</div>

            <div className="mt-3 text-sm text-[var(--text-secondary)] space-y-1">
              <div>{l.reg}</div>
              <div>{l.experience}</div>
            </div>

            <div className="mt-4 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--text-muted)]">Специализация:</span> {l.specializations}
            </div>

            <div className="mt-5 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition">
              Открыть профиль →
            </div>
          </Link>
        ))}
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] p-7">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Контакты коллегии</h2>
              <div className="mt-3 grid gap-2 text-sm text-[var(--text-secondary)] md:grid-cols-2">
                <div>
                  Телефон:{" "}
                  <a className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors" href="tel:+74954106600">
                    +7 (495) 410-66-00
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors" href="mailto:info@bagrationlegal.ru">
                    info@bagrationlegal.ru
                  </a>
                </div>
                <div className="md:col-span-2">
                  Адрес: 119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
