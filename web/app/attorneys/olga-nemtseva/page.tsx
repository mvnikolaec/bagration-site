import Link from "next/link";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ольга Немцева",
    jobTitle: "Заместитель председателя",
    worksFor: {
      "@type": "Organization",
      name: "Коллегия адвокатов города Москвы «Багратион»",
    },
    url: "https://bagrationlegal.ru/attorneys/olga-nemtseva/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Арбат, дом 35, этаж 6, офис 652",
      addressLocality: "Москва",
      postalCode: "119002",
      addressCountry: "RU",
    },
    telephone: "+7 (495) 410-66-00",
    email: "info@bagrationlegal.ru",
  };

  return (
    <section className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-sm text-white/60">
        <Link className="hover:text-white" href="/attorneys">
          Адвокаты
        </Link>{" "}
        <span className="text-white/40">/</span> Ольга Немцева
      </div>

      <h1 className="text-3xl font-semibold">Ольга Немцева</h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 space-y-2 text-white/70">
        <div className="text-white/50 text-sm">Заместитель председателя</div>
        <div>Регистрационный номер в реестре адвокатов города Москвы: 77/10945</div>
        <div>Стаж: 28 лет</div>
        <div className="pt-2">
          <span className="text-white/50">Основные специализации:</span>{" "}
          Арбитраж, семейные дела, гражданские споры, наследство, уголовные дела.
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/contacts"
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
        >
          Записаться на консультацию
        </Link>
        <a
          href="tel:+74954106600"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
        >
          Позвонить
        </a>
      </div>
    </section>
  );
}
