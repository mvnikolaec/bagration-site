import Link from "next/link";

export default function NewsPage() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 16 }}>
        <Link href="/">Главная</Link> <span>›</span> <span>Новости</span>
      </nav>

      <h1 style={{ margin: "0 0 12px" }}>Новости</h1>

      <p style={{ margin: 0, maxWidth: 900, lineHeight: 1.6 }}>
        Публикации, события коллегии и обновления по направлениям практики.
      </p>
    </main>
  );
}
