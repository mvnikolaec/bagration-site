import Button from "./Button";

const INTRO =
  "Опишите задачу и приложите ключевые документы — мы предложим возможные варианты действий и следующий шаг.";

const FOOTNOTE =
  "Ответим в рабочее время. Конфиденциальность соблюдается.";

export default function FinalCtaSection() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <h2
            id="final-cta-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Обсудить вашу ситуацию
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base lg:mt-5">
            {INTRO}
          </p>
          <div className="mt-8 sm:mt-10">
            <Button
              href="/contacts"
              variant="primary"
              className="w-full min-h-12 px-8 py-3 text-base sm:w-auto sm:min-h-0"
            >
              Записаться на консультацию
            </Button>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-[var(--text-muted)] sm:mt-7 sm:text-sm">
            {FOOTNOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
