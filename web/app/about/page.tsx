export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
        О нас
      </h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        О коллегии адвокатов «Багратион».
      </p>
      <section id="approach" className="mt-8">
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
