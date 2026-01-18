import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 16 }}>
        <Link href="/">Главная</Link> <span>›</span> <span>О коллегии</span>
      </nav>

      <h1 style={{ margin: "0 0 12px" }}>О коллегии</h1>

      <p style={{ margin: 0, maxWidth: 900, lineHeight: 1.6 }}>
        Московская коллегия адвокатов «Bagration» — юридическая команда,
        оказывающая помощь гражданам и бизнесу в Москве и по всей России.
      </p>
    </main>
  );
}
