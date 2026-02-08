import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пресс-служба — Коллегия адвокатов «Багратион»",
  description:
    "Публичные комментарии, экспертные разборы и сюжеты с участием адвокатов коллегии «Багратион» в федеральных и региональных СМИ.",
  alternates: {
    canonical: "https://bagrationlegal.ru/press",
  },
};

export default function PressLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
