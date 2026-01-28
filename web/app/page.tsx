import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
        Коллегия адвокатов города Москвы «Багратион»
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Защита и представительство по делам любой сложности.
      </p>
      <p className="mt-4">
        <Link
          href="/contacts"
          className="text-[var(--accent-primary)] hover:underline"
        >
          Контакты
        </Link>
        {" · "}
        <Link
          href="/services"
          className="text-[var(--accent-primary)] hover:underline"
        >
          Услуги
        </Link>
      </p>
    </div>
  );
}
