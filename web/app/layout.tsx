import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import HeaderHeightInit from "./components/HeaderHeightInit";
import Footer from "./components/Footer";
import ProxityBackground from "./components/ProxityBackground";

export const metadata: Metadata = {
  title: "Багратион — коллегия адвокатов Москвы",
  description:
    "Коллегия адвокатов города Москвы «Багратион». Гражданские и семейные споры, наследство, недвижимость, арбитраж, корпоративные и уголовные дела. Москва и онлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased relative">
        <ProxityBackground />
        <div className="relative z-10">
          <Header />
          <HeaderHeightInit />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
