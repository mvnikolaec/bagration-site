"use client";

import { useId, useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Что относится к гражданским спорам?",
    a: "К гражданским спорам относятся конфликты, возникающие из имущественных и иных правоотношений между участниками гражданского оборота.",
  },
  {
    q: "Сколько длится рассмотрение гражданского дела?",
    a: "Срок рассмотрения зависит от сложности дела, объема доказательств и процессуальной позиции сторон.",
  },
  {
    q: "Можно ли урегулировать спор без суда?",
    a: "В ряде случаев возможен досудебный порядок урегулирования, если стороны готовы к переговорам.",
  },
  {
    q: "Можно ли взыскать судебные расходы?",
    a: "Возможность взыскания судебных расходов определяется результатом рассмотрения дела и процессуальными нормами.",
  },
  {
    q: "Можно ли обжаловать решение суда?",
    a: "Решения суда могут быть обжалованы в апелляционном и кассационном порядке при наличии соответствующих оснований.",
  },
] as const;

export default function CivilDisputesFaq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl lg:max-w-none">
      <ul className="flex flex-col gap-2 sm:gap-3">
        {FAQ_ITEMS.map(({ q, a }, idx) => {
          const isOpen = openIndex === idx;
          const contentId = `${baseId}-faq-panel-${idx}`;
          const buttonId = `${baseId}-faq-button-${idx}`;

          return (
            <li key={idx} id={idx === FAQ_ITEMS.length - 1 ? "faq-accordion-last-item" : undefined}>
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
  );
}
