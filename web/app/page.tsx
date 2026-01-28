import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      {/* Hero — 30px от хедера; ≥1024px: высота = 100dvh − хедер; фон: фото + overlay + фирменный 30% */}
      <section
        className="relative flex flex-col overflow-hidden pb-6 sm:pb-8 md:pb-10 lg:h-[calc(100dvh-var(--header-h))]"
        style={{ boxSizing: "border-box" }}
      >
        {/* Фоновые слои (z-0): placeholder → фото → overlay → фирменный 30%. Контент поверх z-10. */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          {/* Placeholder: градиент до загрузки фото (без мигания на медленном интернете) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]" />
          {/* Фото: center center, cover */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-bg.png"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px"
              className="object-cover object-center"
              quality={85}
            />
          </div>
          {/* Затемняющий overlay для читаемости текста (деликатный) */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Фирменный фон (градиент/пятна), opacity 30% — только слой, не текст */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-primary) 0%, transparent 50%), radial-gradient(ellipse 80% 50% at 20% 40%, rgba(66, 200, 245, 0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(10, 42, 60, 0.4) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Отступ 30px от нижней границы хедера (без margin‑collapse) */}
        <div className="relative z-10 h-[30px] w-full shrink-0" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[30px] md:gap-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 md:text-sm">
              Москва • регионы России • дистанционный формат
            </div>

            <h1 className="min-w-0 text-xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.25rem] 2xl:text-[2.5rem]">
              Юридическая защита интересов частных лиц и бизнеса в Москве и по
              всей России
            </h1>

            <p className="min-w-0 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base md:text-lg">
              Коллегия адвокатов города Москвы «Багратион» оказывает правовую
              помощь частным лицам и бизнесу: очно — в Москве и других регионах
              России, дистанционно — в формате консультаций, правового анализа и
              подготовки документов, а также с представительством интересов в
              судах.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/contacts" variant="primary">
                Получить консультацию
              </Button>
              <Button href="/services" variant="secondary">
                Выбрать услугу
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
