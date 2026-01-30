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
      className="section-py"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="section-header max-w-3xl">
          <h2
            id="approach-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Подход к работе
          </h2>
          <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {INTRO}
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-4 xl:gap-5">
          {STEPS.map(({ title, description }, i) => (
            <li key={i}>
              <article className="card-proxity flex h-full gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
                <span
                  className="card-proxity-inner flex h-9 w-9 shrink-0 items-center justify-center text-sm font-medium tabular-nums text-[var(--text-muted)] sm:h-10 sm:w-10 sm:text-base"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
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

        <p className="mt-5 max-w-2xl text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
          {FOOTNOTE}
        </p>
      </div>
    </section>
  );
}
