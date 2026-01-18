import Link from "next/link";

export default function ContactsPage() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 16 }}>
        <Link href="/">Главная</Link> <span>›</span> <span>Контакты</span>
      </nav>

      <h1 style={{ margin: "0 0 12px" }}>Контакты</h1>

      <p style={{ margin: 0, maxWidth: 900, lineHeight: 1.6 }}>
        Адрес, телефоны, график работы и форма обращения.
      </p>
    </main>
  );
}
