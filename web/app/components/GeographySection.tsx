const POINTS = [
  {
    title: "Москва",
    description:
      "Очные встречи, подготовка стратегии и сопровождение дел в судах Москвы.",
  },
  {
    title: "Регионы России",
    description:
      "Очно сопровождаем дела и участвуем в процессуальных действиях в других регионах России.",
  },
  {
    title: "Дистанционный формат",
    description:
      "Проводим консультации, правовой анализ и готовим документы без очного присутствия — когда это оптимально для задачи.",
  },
] as const;

const INTRO =
  "Работаем с доверителями в Москве и по всей России. Формат взаимодействия подбираем под задачу: очно — при необходимости участия и сопровождения на месте, дистанционно — для консультаций, правового анализа и подготовки документов.";

const FOOTNOTE =
  "Возможность и формат выезда в регион уточняются после первичного анализа ситуации.";

export default function GeographySection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="geography-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12 lg:mb-14 max-w-3xl">
          <h2
            id="geography-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            География и формат работы
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base lg:mt-5">
            {INTRO}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POINTS.map(({ title, description }, i) => (
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
        </ul>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[var(--text-muted)] sm:mt-10 sm:text-sm">
          {FOOTNOTE}
        </p>
      </div>
    </section>
  );
}

