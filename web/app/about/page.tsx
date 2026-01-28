export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
        О нас
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        О коллегии адвокатов «Багратион».
      </p>
      <section id="approach" className="mt-12">
        <h2 className="text-lg font-medium text-[var(--text-primary)]">
          Подход к работе
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Подход к работе коллегии.
        </p>
      </section>
    </div>
  );
}
