import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyPageMarker from "./components/BodyPageMarker";
import HeroMeasureTrigger from "./components/HeroMeasureTrigger";

const isStaging = process.env.SITE_STAGE !== "production";

export const metadata: Metadata = {
  title: "Багратион — коллегия адвокатов Москвы",
  description:
    "Коллегия адвокатов города Москвы «Багратион». Гражданские и семейные споры, наследство, недвижимость, арбитраж, корпоративные и уголовные дела.",
  robots: isStaging
    ? {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
      }
    : {
        index: true,
        follow: true,
      },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Коллегия адвокатов города Москвы «Багратион»",
  url: "https://bagrationlegal.ru",
  telephone: "+7 (495) 410-66-00",
  email: "info@bagrationlegal.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "улица Арбат, дом 35, этаж 6, офис 652",
    addressLocality: "Москва",
    postalCode: "119002",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  sameAs: ["https://bagrationlegal.ru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased relative">
        <BodyPageMarker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="app-shell bg-transparent">
          <div className="app-shell-content">
            <div className="floating-gradients" aria-hidden="true">
              <div className="floating-gradient floating-gradient-1" />
              <div className="floating-gradient floating-gradient-2" />
              <div className="floating-gradient floating-gradient-3" />
            </div>
            <div className="app-shell-content-inner">
              <Header />
              <HeroMeasureTrigger />
              <main className="bg-transparent">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
