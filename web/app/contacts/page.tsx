import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    title: "Адрес",
    content: "119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Телефон",
    content: "+7 (495) 410-66-00",
    href: "tel:+74954106600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    content: "info@bagrationlegal.ru",
    href: "mailto:info@bagrationlegal.ru",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Часы работы",
    content: "Пн–Пт: 9:00–19:00\nСб–Вс: по договорённости",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export const metadata: Metadata = {
  title: "Контакты — Багратион",
  description:
    "Свяжитесь с коллегией адвокатов «Багратион» для консультации. Адрес, телефон, email. Москва, ул. Арбат, д. 35.",
};

export default function ContactsPage() {

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Коллегия адвокатов «Багратион»",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Арбат, д. 35, этаж 6, офис 652",
      addressLocality: "Москва",
      postalCode: "119002",
      addressCountry: "RU",
    },
    telephone: "+74954106600",
    email: "info@bagrationlegal.ru",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Контакты
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Свяжитесь с нами для консультации по вашему вопросу. Мы работаем в Москве и онлайн
              по всей России.
            </p>
          </div>
        </Container>
      </Section>

      {/* CONTACT CARDS */}
      <Section className="bg-white/5">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <div className="space-y-4">
                  <div className="text-[var(--text-muted)]">{info.icon}</div>
                  <div>
                    <h3 className="text-sm font-medium text-[var(--text-muted)] mb-2">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold whitespace-pre-line">
                        {info.content}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CONTACT FORM */}
      <Section
        title="Оставить заявку"
        description="Заполните форму, и мы свяжемся с вами в ближайшее время"
      >
        <Container>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </Section>

      {/* MAP PLACEHOLDER */}
      <Section
        title="Как нас найти"
        description="Мы находимся в центре Москвы, недалеко от метро"
        className="bg-[var(--bg-tertiary)]"
      >
        <Container>
          <Card>
            <div className="aspect-video rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center">
              <div className="text-center space-y-2">
                <svg
                  className="w-16 h-16 mx-auto text-[var(--text-muted)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-[var(--text-muted)]">Карта будет здесь</p>
                <p className="text-sm text-[var(--text-muted)]">
                  119002, Москва, ул. Арбат, д. 35, этаж 6, офис 652
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
