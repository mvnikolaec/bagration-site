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
      className="section-py"
      aria-labelledby="geography-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="section-header max-w-3xl">
          <h2
            id="geography-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            География и формат работы
          </h2>
          <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {INTRO}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-5">
          {POINTS.map(({ title, description }, i) => (
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
        </ul>

        <p className="mt-5 max-w-2xl text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
          {FOOTNOTE}
        </p>
      </div>
    </section>
  );
}

