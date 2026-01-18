import Link from "next/link";

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
    <section className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personsJsonLd) }}
      />

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Адвокаты коллегии «Багратион»</h1>
        <p className="text-white/70">
          Два адвоката коллегии — практики с большим опытом, ведущие дела частных лиц и бизнеса в Москве и онлайн.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lawyers.map((l) => (
          <Link
            key={l.slug}
            href={`/attorneys/${l.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/5 p-7 hover:border-white/20 hover:bg-white/10 transition"
          >
            <div className="text-xs text-white/50">{l.role}</div>
            <div className="mt-2 text-xl font-semibold">{l.name}</div>

            <div className="mt-3 text-sm text-white/70 space-y-1">
              <div>{l.reg}</div>
              <div>{l.experience}</div>
            </div>

            <div className="mt-4 text-sm text-white/70">
              <span className="text-white/50">Специализация:</span> {l.specializations}
            </div>

            <div className="mt-5 text-sm text-white/60 group-hover:text-white/80 transition">
              Открыть профиль →
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
        <h2 className="text-xl font-semibold">Контакты коллегии</h2>
        <div className="mt-3 grid gap-2 text-sm text-white/70 md:grid-cols-2">
          <div>
            Телефон:{" "}
            <a className="text-white/80 hover:text-white" href="tel:+74954106600">
              +7 (495) 410-66-00
            </a>
          </div>
          <div>
            Email:{" "}
            <a className="text-white/80 hover:text-white" href="mailto:info@bagrationlegal.ru">
              info@bagrationlegal.ru
            </a>
          </div>
          <div className="md:col-span-2">
            Адрес: 119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652
          </div>
        </div>
      </div>
    </section>
  );
}
