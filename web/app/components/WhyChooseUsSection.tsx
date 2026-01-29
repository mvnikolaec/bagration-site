const REASONS = [
  {
    title: "Судебная практика и процессуальный опыт",
    description:
      "Коллегия специализируется на сопровождении дел в судах и выстраивает правовую позицию с учётом процессуальных рисков и судебной практики.",
  },
  {
    title: "Стратегический подход к защите интересов",
    description:
      "Каждое дело рассматривается как проект: с анализом ситуации, возможных сценариев и последствий принимаемых решений.",
  },
  {
    title: "Конфиденциальность и профессиональная этика",
    description:
      "Работа коллегии строится с соблюдением адвокатской тайны, конфиденциальности информации и норм профессиональной этики.",
  },
  {
    title: "Работа с частными лицами и бизнесом",
    description:
      "Коллегия сопровождает дела как частных доверителей, так и компаний, учитывая специфику задач и уровень ответственности.",
  },
  {
    title: "География работы — Москва и вся Россия",
    description:
      "Очно работаем в Москве и других регионах России, дистанционно сопровождаем консультации, правовой анализ и подготовительные этапы.",
  },
  {
    title: "Взвешенные решения и прозрачная коммуникация",
    description:
      "Мы заранее обсуждаем возможные риски, перспективы и формат работы, чтобы доверитель принимал решения осознанно.",
  },
] as const;

export default function WhyChooseUsSection() {
  return (
    <section
      className="section-py"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="section-header max-w-3xl">
          <h2
            id="why-choose-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Почему доверяют коллегии адвокатов «Багратион»
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {REASONS.map(({ title, description }, i) => (
            <li key={i}>
              <article className="flex h-full gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-5 py-5 sm:px-6 sm:py-6">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/80 text-xs font-medium tabular-nums text-[var(--text-muted)] sm:h-9 sm:w-9 sm:text-sm"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
                  <p className="text-base font-medium leading-tight text-[var(--text-primary)] sm:text-lg">
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
