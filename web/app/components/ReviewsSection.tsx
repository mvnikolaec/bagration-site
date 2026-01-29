"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    author: "Dronya 96",
    level: "Знаток города 3 уровня",
    text: "Спасибо большое команде Багратион, обратился с сложным вопросом, как оказалось для них он не сложный был! Быстро разобрались в сути дела и помогли с решением, рекомендую данную компанию, даже Маме и Теще посоветовал Что понравилось, захотел попить и предложили воды или чай!",
  },
  {
    author: "Дмитрий Сергеевич",
    level: "Знаток города 6 уровня",
    text: "Вопрос решился мгновенно , ребята профессионалы своего дела , рекомендую однозначно ! Спасибо огромное . из минусов не предлагают стейки , но я и не за ними сюда шел ) P.s. про стейки шутка , но я уверен если б предлагали было бы на 2 звезды Мишлен .",
  },
  {
    author: "JIeXa CAXAPOK",
    level: "Знаток города 6 уровня",
    text: "Огромное спасибо за консультацию, помогли разобраться в интересующем меня вопросе, быстрая и оперативная работа, все на высшем уровне!",
  },
  {
    author: "Siemens",
    level: "Знаток города 5 уровня",
    text: "Работа Багратион на высшем уровне — всё прошло идеально, остались только положительные впечатления! Все грамотно и оперативно.",
  },
  {
    author: "Руслана Морозова",
    level: "Знаток города 3 уровня",
    text: "Помогли взыскать долг с недобросовестного контрагента быстро и эффективно. Цены абсолютно адекватные за такое качество.",
  },
  {
    author: "Магасумов Дамир",
    level: "Знаток города 2 уровня",
    text: "Качественная юридическая помощь и уверенность в положительном исходе. Спасибо за решение моего корпоративного спора. Теперь только к вам.",
  },
] as const;

const YANDEX_REVIEWS_URL = "https://yandex.ru/maps/-/CLxXNOKr";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function YandexReviewsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 24"
      fill="none"
      aria-hidden
    >
      <title>Яндекс.Отзывы</title>
      <path
        d="M1 2v20h3V12l6 10h4L8 12l6-10H9L4 12z"
        fill="currentColor"
      />
      <path
        d="M22 6h16l6 6-6 6H22V6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MD_BREAKPOINT = 768;

export default function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(2);
  const [isMd, setIsMd] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateBreakpoint = useCallback(() => {
    if (typeof window === "undefined") return;
    const md = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`).matches;
    setIsMd(md);
    setMaxSlide(md ? 2 : 5);
  }, []);

  useEffect(() => {
    updateBreakpoint();
    const mql = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const handler = () => {
      updateBreakpoint();
      setCurrentSlide((s) => Math.min(s, mql.matches ? 2 : 5));
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [updateBreakpoint]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setCurrentSlide((s) => (s >= maxSlide ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [isPaused, maxSlide]);

  const goPrev = () =>
    setCurrentSlide((s) => (s <= 0 ? maxSlide : s - 1));
  const goNext = () =>
    setCurrentSlide((s) => (s >= maxSlide ? 0 : s + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12 lg:mb-14 max-w-3xl">
          <h2
            id="reviews-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Отзывы о работе коллегии
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
            Реальные отзывы из Яндекс.Карт
          </p>
        </header>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out md:w-[300%] w-[600%]"
              style={{
                transform: `translateX(-${currentSlide * (isMd ? 100 / 3 : 100 / 6)}%)`,
              }}
            >
              {REVIEWS.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_16.666%] px-2 sm:px-3"
                  style={{ minWidth: 0 }}
                >
                  <article className="flex h-full flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-4 py-5 sm:px-5 sm:py-6">
                    <p className="text-sm font-medium text-[var(--text-primary)] sm:text-base">
                      {review.author}
                    </p>
                    <p className="mb-2 text-xs text-[var(--text-muted)] sm:text-sm">
                      {review.level}
                    </p>
                    <div className="mb-3 flex items-center gap-0.5 text-[var(--text-muted)]" aria-label="Рейтинг: 5 из 5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon
                          key={i}
                          className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-primary)]/85"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base flex-1">
                      {review.text}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
                aria-label="Предыдущий отзыв"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
                aria-label="Следующий отзыв"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <a
              href={YANDEX_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 min-w-[10rem] shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-transparent px-6 py-3 text-[var(--accent-primary)] transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-secondary)]/50 hover:shadow-[0_0_20px_rgba(66,200,245,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] active:scale-[0.98] sm:min-w-[12rem]"
              aria-label="Яндекс.Отзывы"
              title="Яндекс.Отзывы"
            >
              <YandexReviewsLogo className="h-6 w-auto max-h-full max-w-full shrink-0 sm:h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
