import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
