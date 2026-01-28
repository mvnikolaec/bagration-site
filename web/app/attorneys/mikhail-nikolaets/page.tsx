import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";
import Section from "../../components/Section";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Михаил Николаец",
    jobTitle: "Председатель коллегии",
    worksFor: {
      "@type": "Organization",
      name: "Коллегия адвокатов города Москвы «Багратион»",
    },
    url: "https://bagrationlegal.ru/attorneys/mikhail-nikolaets/",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <div className="space-y-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Адвокаты", href: "/attorneys" }, { label: "Михаил Николаец" }]} />

            <h1 className="text-3xl font-semibold">Михаил Николаец</h1>

            <div className="rounded-xl border border-white/10 bg-white/5 p-7 space-y-2 text-white/70">
        <div className="text-white/50 text-sm">Председатель коллегии</div>
        <div>Регистрационный номер в реестре адвокатов города Москвы: 77/13 745</div>
        <div>Стаж: 20 лет</div>
        <div className="pt-2">
          <span className="text-white/50">Основные специализации:</span>{" "}
          Арбитраж, корпоративные споры, семейные дела, гражданские споры, недвижимость и земля,
          наследство, авторское право.
            </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Записаться на консультацию
              </Link>
              <a
                href="tel:+74954106600"
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
              >
                Позвонить
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
