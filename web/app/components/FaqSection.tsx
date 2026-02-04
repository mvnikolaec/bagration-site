"use client";

import { useId, useState } from "react";

const FAQ = [
  {
    q: "Как проходит первичная консультация?",
    a: "Консультация начинается с уточнения задачи и анализа исходных документов. По итогам мы предлагаем возможные варианты действий и согласуем дальнейший формат работы.",
  },
  {
    q: "Можно ли обратиться дистанционно?",
    a: "Да. Дистанционно проводим консультации, правовой анализ и подготовку документов. При необходимости очного участия работаем в Москве и других регионах России.",
  },
  {
    q: "С какими делами вы работаете?",
    a: "Коллегия сопровождает дела частных лиц и бизнеса по основным направлениям практики, указанным на сайте. Если задача выходит за рамки этих направлений, мы скажем об этом на первичном этапе.",
  },
  {
    q: "Гарантируете ли вы результат?",
    a: "Нет. В юридической работе результат зависит от обстоятельств дела, доказательств и позиции другой стороны. Мы гарантируем профессиональный подход, конфиденциальность и добросовестное сопровождение.",
  },
  {
    q: "Как формируется стоимость услуг?",
    a: "Стоимость зависит от сложности задачи, объёма работ и стадии процесса. После первичного анализа мы предлагаем понятный формат взаимодействия и согласуем условия.",
  },
  {
    q: "Как обеспечивается конфиденциальность?",
    a: "Мы соблюдаем адвокатскую тайну и профессиональную этику. Информация и документы доверителя используются только для работы по делу.",
  },
] as const;

export default function FaqSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-py bg-transparent" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="section-header max-w-3xl">
          <h2
            id="faq-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Частые вопросы
          </h2>
        </header>

        <div className="mx-auto max-w-3xl">
          <ul className="flex flex-col gap-2 sm:gap-3">
            {FAQ.map(({ q, a }, idx) => {
              const isOpen = openIndex === idx;
              const contentId = `${baseId}-faq-panel-${idx}`;
              const buttonId = `${baseId}-faq-button-${idx}`;

              return (
                <li key={idx}>
                  <div
                    className={`card-proxity overflow-hidden transition-all duration-200 ${
                      isOpen ? "ring-1 ring-[var(--card-hover-border)]" : ""
                    }`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      className="btn-proxity-base group flex w-full items-center justify-between gap-3 rounded-[var(--btn-radius)] px-4 py-3 text-left focus-visible:outline-none sm:px-5 sm:py-3.5"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <span className="min-w-0 text-sm font-medium leading-snug text-[var(--text-primary)] sm:text-base">
                        {q}
                      </span>
                      <span
                        className="card-proxity-inner flex h-8 w-8 shrink-0 items-center justify-center text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-primary)] sm:h-9 sm:w-9"
                        aria-hidden
                      >
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[var(--card-border)] px-4 pb-3 pt-2 sm:px-5 sm:pb-4 sm:pt-2.5">
                          <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                            {a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

