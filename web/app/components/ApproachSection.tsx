const STEPS = [
  {
    title: "Анализ ситуации и документов",
    description:
      "Изучаем материалы, уточняем обстоятельства и определяем правовые риски и возможные сценарии.",
  },
  {
    title: "Правовая позиция и стратегия",
    description:
      "Формируем позицию и план действий: переговоры, претензионный порядок, суд — исходя из цели доверителя и доказательственной базы.",
  },
  {
    title: "Подготовка и процессуальные действия",
    description:
      "Готовим документы и обеспечиваем процессуальное сопровождение: заявления, ходатайства, доказательства, правовые заключения.",
  },
  {
    title: "Представительство и сопровождение",
    description:
      "Представляем интересы в суде и взаимодействуем со сторонами и органами по делу — до завершения ключевых этапов.",
  },
] as const;

const INTRO =
  "Мы выстраиваем работу как последовательный процесс: от анализа ситуации и документов до реализации выбранной правовой стратегии. Формат взаимодействия определяем сразу — очно или дистанционно.";

const FOOTNOTE =
  "Дистанционно возможны консультации, правовой анализ и подготовка документов; очно — участие в судебных заседаниях и работа в регионах России.";

export default function ApproachSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12 lg:mb-14 max-w-3xl">
          <h2
            id="approach-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Подход к работе
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base lg:mt-5">
            {INTRO}
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {STEPS.map(({ title, description }, i) => (
            <li key={i}>
              <article className="flex h-full gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-5 py-6 sm:gap-5 sm:px-6 sm:py-7">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/80 text-sm font-medium tabular-nums text-[var(--text-muted)] sm:h-11 sm:w-11 sm:text-base"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
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
        </ol>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[var(--text-muted)] sm:mt-10 sm:text-sm">
          {FOOTNOTE}
        </p>
      </div>
    </section>
  );
}
