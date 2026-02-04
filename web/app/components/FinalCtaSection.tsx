import Button from "./Button";

const INTRO =
  "Опишите задачу и приложите ключевые документы — мы предложим возможные варианты действий и следующий шаг.";

const FOOTNOTE =
  "Ответим в рабочее время. Конфиденциальность соблюдается.";

export default function FinalCtaSection() {
  return (
    <section
      className="section-py bg-transparent"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card-proxity mx-auto max-w-2xl px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <h2
            id="final-cta-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Обсудить вашу ситуацию
          </h2>
          <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {INTRO}
          </p>
          <div className="mt-5 sm:mt-6">
            <Button
              href="/contacts"
              variant="primary"
              className="w-full min-h-12 px-8 py-3 text-base sm:w-auto sm:min-h-0"
            >
              Записаться на консультацию
            </Button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
            {FOOTNOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
