"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    author: "Dronya 96",
    level: "Знаток города 3 уровня",
    avatar: "/images/reviews/dronya-96.png",
    text: "Спасибо большое команде Багратион! Обратился со сложным вопросом, как оказалось — для них он не сложный был. Быстро разобрались в сути дела и помогли с решением, рекомендую данную компанию, даже маме и тёще посоветовал. Что понравилось: захотел попить — и предложили воды или чай!",
  },
  {
    author: "Дмитрий Сергеевич",
    level: "Знаток города 6 уровня",
    avatar: "/images/reviews/dmitry-sergeevich.png",
    text: "Вопрос решился мгновенно, ребята — профессионалы своего дела, рекомендую однозначно! Спасибо огромное. Из минусов — не предлагают стейки, но я и не за ними сюда шёл). P.S. Про стейки — шутка, но я уверен: если бы предлагали, было бы на 2 звезды Мишлен.",
  },
  {
    author: "JIeXa CAXAPOK",
    level: "Знаток города 6 уровня",
    avatar: "/images/reviews/saharok.png",
    text: "Огромное спасибо за консультацию, помогли разобраться в интересующем меня вопросе. Быстрая и оперативная работа, всё на высшем уровне!",
  },
  {
    author: "Siemens",
    level: "Знаток города 5 уровня",
    avatar: "/images/reviews/siemens.png",
    text: "Работа Багратион на высшем уровне — всё прошло идеально, остались только положительные впечатления! Всё грамотно и оперативно.",
  },
  {
    author: "Руслана Морозова",
    level: "Знаток города 3 уровня",
    avatar: "/images/reviews/morozova.png",
    text: "Помогли взыскать долг с недобросовестного контрагента быстро и эффективно. Цены абсолютно адекватные за такое качество.",
  },
  {
    author: "Магасумов Дамир",
    level: "Знаток города 2 уровня",
    avatar: "/images/reviews/damir.png",
    text: "Качественная юридическая помощь и уверенность в положительном исходе. Спасибо за решение моего корпоративного спора. Теперь только к вам.",
  },
] as const;

const YANDEX_REVIEWS_URL = "https://yandex.ru/maps/-/CLx-YA0R";

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

const YANDEX_LOGO_SRC = "/icons/yandex-reviews.svg";
/** Breakpoint: ≥1024px = 2 cards (desktop, tablet horizontal), <1024px = 1 card (tablet vertical, mobile) */
const LG_BREAKPOINT = 1024;

const IS_DEV = typeof process !== "undefined" && process.env.NODE_ENV === "development";

const STYLES_TO_CHECK = [
  "backgroundColor",
  "backgroundImage",
  "boxShadow",
  "filter",
  "backdropFilter",
] as const;

function isTransparentBg(v: string): boolean {
  if (!v || v === "none") return true;
  if (v === "rgba(0, 0, 0, 0)" || v === "transparent") return true;
  return false;
}

function hasPseudoWithBackground(el: Element, pseudo: "::before" | "::after"): boolean {
  try {
    const style = getComputedStyle(el, pseudo);
    const content = style.content;
    const bg = style.background || style.backgroundColor;
    if (content && content !== "none" && content !== '""') return true;
    if (bg && !isTransparentBg(bg)) return true;
  } catch {
    /* ignore */
  }
  return false;
}

/** Dev-only: собирает "подозреваемые" элементы с фоном/тенью/псевдо внутри блока отзывов */
function runBackgroundDetector(root: HTMLElement) {
  const suspects: Record<string, string | number>[] = [];
  const walk = (el: Element, depth: number) => {
    if (depth > 10) return;
    if (!(el instanceof HTMLElement)) return;
    const computed = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    let suspect = false;
    const bgColor = computed.backgroundColor;
    const bgImage = computed.backgroundImage;
    const boxShadow = computed.boxShadow;
    const filter = computed.filter;
    const backdrop = computed.backdropFilter;
    if (!isTransparentBg(bgColor)) suspect = true;
    if (bgImage && bgImage !== "none") suspect = true;
    if (boxShadow && boxShadow !== "none") suspect = true;
    if (filter && filter !== "none") suspect = true;
    if (backdrop && backdrop !== "none") suspect = true;
    const beforeBg = hasPseudoWithBackground(el, "::before");
    const afterBg = hasPseudoWithBackground(el, "::after");
    if (beforeBg || afterBg) suspect = true;
    if (suspect) {
      const isCard = el.classList.contains("card-proxity") || el.closest(".card-proxity") === el;
      if (!isCard) {
        suspects.push({
          tag: el.tagName,
          class: (el.className && String(el.className).slice(0, 60)) || "(none)",
          data: el.getAttribute("data-reviews-section-root") ?? el.getAttribute("data-reviews-inner") ?? el.getAttribute("data-reviews-slider") ?? el.getAttribute("data-reviews-viewport") ?? el.getAttribute("data-reviews-track") ?? "",
          depth,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          backgroundColor: bgColor.slice(0, 30),
          backgroundImage: bgImage !== "none" ? "yes" : "no",
          boxShadow: boxShadow !== "none" ? "yes" : "no",
          backdropFilter: backdrop !== "none" ? "yes" : "no",
          "::before": beforeBg ? "has-bg" : "no",
          "::after": afterBg ? "has-bg" : "no",
        });
      }
    }
    for (const child of el.children) walk(child, depth + 1);
  };
  walk(root, 0);
  console.group("[Reviews] Background detector — подозреваемые (не карточки)");
  if (suspects.length) console.table(suspects);
  else console.log("Подозреваемых не найдено (фон только у карточек).");
  console.groupEnd();
  return suspects;
}

let highlightedEl: { el: HTMLElement; prevOutline: string; prevBg: string } | null = null;

function clearHighlight() {
  if (highlightedEl) {
    highlightedEl.el.style.outline = highlightedEl.prevOutline;
    highlightedEl.el.style.background = highlightedEl.prevBg;
    highlightedEl = null;
  }
}

function inspectBackgroundSource(e: React.MouseEvent) {
  if (!IS_DEV) return;
  if (!e.altKey && !e.shiftKey) return;
  e.preventDefault();
  e.stopPropagation();
  const target = e.target as HTMLElement;
  clearHighlight();
  const prevOutline = target.style.outline || "";
  const prevBg = target.style.background || "";
  target.style.outline = "3px solid red";
  target.style.background = "rgba(255,0,0,0.08)";
  highlightedEl = { el: target, prevOutline, prevBg };
  setTimeout(clearHighlight, 4000);
  const sectionRoot = target.closest("[data-reviews-section-root]");
  const chain: HTMLElement[] = [];
  let el: HTMLElement | null = target;
  while (el && el !== document.body) {
    chain.push(el);
    el = el.parentElement;
  }
  console.group("[Reviews Inspector] Alt+click — подсвечен элемент (red outline), цепочка до body");
  console.log("Target:", target, "getBoundingClientRect:", target.getBoundingClientRect());
  chain.forEach((node, i) => {
    const computed = node instanceof Element ? getComputedStyle(node) : null;
    const info: Record<string, unknown> = {
      index: i,
      tagName: node.tagName,
      className: (node.className && String(node.className).slice(0, 80)) || "(none)",
      isSectionRoot: node === sectionRoot,
    };
    if (computed) {
      const bg = computed.backgroundColor;
      const bgImg = computed.backgroundImage;
      if (!isTransparentBg(bg)) info.backgroundColor = bg;
      if (bgImg && bgImg !== "none") info.backgroundImage = bgImg.slice(0, 50);
      if (computed.boxShadow !== "none") info.boxShadow = "set";
      if (computed.backdropFilter !== "none") info.backdropFilter = "set";
    }
    console.log(`[${i}]`, node, info);
  });
  console.groupEnd();
}

export default function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(2);
  const [isLg, setIsLg] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [yandexLogoSvg, setYandexLogoSvg] = useState<string | null>(null);
  const [yandexLogoError, setYandexLogoError] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRootRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const runDetector = useCallback(() => {
    if (sectionRootRef.current && IS_DEV) runBackgroundDetector(sectionRootRef.current);
  }, []);

  useEffect(() => {
    fetch(YANDEX_LOGO_SRC)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error("Failed to load"))))
      .then(setYandexLogoSvg)
      .catch(() => setYandexLogoError(true));
  }, []);

  const updateBreakpoint = useCallback(() => {
    if (typeof window === "undefined") return;
    const lg = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`).matches;
    setIsLg(lg);
    setMaxSlide(lg ? 2 : 5);
  }, []);

  useEffect(() => {
    updateBreakpoint();
    const mql = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    if (e.key === "ArrowLeft") goPrev();
    else goNext();
  };

  return (
    <section
      ref={sectionRootRef}
      data-reviews-section-root
      className="reviews-slider-section section-py w-full bg-transparent"
      aria-labelledby="reviews-heading"
      onClick={inspectBackgroundSource}
    >
      {IS_DEV && (
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={runDetector}
            className="rounded border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-2 py-1 text-xs text-[var(--text-muted)] hover:bg-[var(--bg-hover)]"
          >
            Debug backgrounds
          </button>
        </div>
      )}
      <div
        data-reviews-inner
        className="container-main w-full"
      >
        <div className="w-full">
        <header className="section-header max-w-3xl">
          <h2
            id="reviews-heading"
            className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl"
          >
            Отзывы о работе коллегии
          </h2>
          <p className="section-title-sub text-sm text-[var(--text-secondary)] sm:text-base">
            Реальные отзывы из Яндекс.Карт
          </p>
        </header>

        <div
          data-reviews-slider
          className="relative mt-4 min-[480px]:mt-5 sm:mt-6 md:mt-6 bg-transparent"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Слайдер отзывов"
        >
          <div
            data-reviews-viewport
            className="overflow-hidden bg-transparent"
            style={{ touchAction: "pan-y" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              data-reviews-track
              className="flex items-stretch transition-transform duration-[350ms] ease-out bg-transparent lg:w-[300%] w-[600%]"
              style={{
                transform: `translateX(-${currentSlide * (isLg ? 100 / 3 : 100 / 6)}%)`,
              }}
            >
              {REVIEWS.map((review, idx) => (
                <div
                  key={idx}
                  data-reviews-slide
                  className="flex flex-[0_0_16.666%] flex-col bg-transparent px-2 min-[480px]:px-2.5 sm:px-3 lg:px-3"
                  style={{ minWidth: 0 }}
                >
                  <article className="card-proxity group flex h-full flex-col px-3 py-3 min-[480px]:px-4 min-[480px]:py-4 sm:px-5 sm:py-5 md:px-4 md:py-4 lg:px-5 lg:py-5">
                    <div className="mb-2 flex items-center gap-3">
                      {(review as { avatar?: string }).avatar && (
                        <div className="group/avatar relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-11 sm:w-11">
                          <Image
                            src={(review as { avatar?: string }).avatar!}
                            alt=""
                            fill
                            className="object-cover opacity-95 transition-opacity duration-200 group-hover/avatar:opacity-90"
                            style={{ filter: "blur(2px)" }}
                            sizes="44px"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[var(--text-primary)] sm:text-base">
                          {review.author}
                        </p>
                        <p className="text-xs text-[var(--text-muted)] sm:text-sm">
                          {review.level}
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center gap-0.5 text-[var(--text-muted)]" aria-label="Рейтинг: 5 из 5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon
                          key={i}
                          className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-primary)]/85"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base flex-1 min-h-0 line-clamp-6">
                      {review.text}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reviews-controls
            className="mt-4 flex flex-wrap items-center justify-center gap-3 min-[480px]:mt-5 min-[480px]:gap-4 sm:mt-6 sm:gap-5 md:mt-6"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="btn-proxity-base btn-proxity-ghost card-proxity flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center focus-visible:outline-none"
                aria-label="Предыдущий отзыв"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="btn-proxity-base btn-proxity-ghost card-proxity flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center focus-visible:outline-none"
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
              className="btn-proxity-base yandex-reviews-link card-proxity group inline-flex h-9 min-w-0 shrink-0 items-center justify-center gap-2 py-1.5 px-5 sm:h-10 sm:px-6 focus-visible:outline-none active:scale-[0.98]"
              aria-label="Яндекс.Отзывы"
              title="Яндекс.Отзывы"
            >
              {yandexLogoSvg ? (
                <span
                  className="flex h-full min-h-0 w-full items-center justify-center [&>svg]:h-full [&>svg]:max-h-[2.5rem] [&>svg]:w-auto [&>svg]:object-contain"
                  dangerouslySetInnerHTML={{ __html: yandexLogoSvg }}
                />
              ) : yandexLogoError ? (
                <span className="text-sm font-medium">Яндекс.Отзывы</span>
              ) : null}
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
