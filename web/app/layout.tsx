import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Багратион — коллегия адвокатов Москвы",
  description:
    "Коллегия адвокатов города Москвы «Багратион». Гражданские и семейные споры, наследство, недвижимость, арбитраж, корпоративные и уголовные дела.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased relative">
        {/* Плавающие световые пятна (под контентом, z-0) */}
        <div className="floating-spots" aria-hidden="true">
          <div className="floating-spot floating-spot-1" />
          <div className="floating-spot floating-spot-2" />
          <div className="floating-spot floating-spot-3" />
          <div className="floating-spot floating-spot-4" />
        </div>
        {/* Контент поверх пятен */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
