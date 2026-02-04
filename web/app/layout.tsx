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
        <div className="floating-gradients" aria-hidden="true">
          <div className="floating-gradient floating-gradient-1" />
          <div className="floating-gradient floating-gradient-2" />
          <div className="floating-gradient floating-gradient-3" />
        </div>
        <div className="relative z-10">
          <Header />
          <main className="overflow-x-hidden bg-transparent">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
