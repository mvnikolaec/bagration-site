import Image from "next/image";
import Button from "./components/Button";
import PracticesSection from "./components/PracticesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ReviewsSection from "./components/ReviewsSection";
import ApproachSection from "./components/ApproachSection";
import GeographySection from "./components/GeographySection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";

export default function Home() {
  return (
    <>
    {/* Hero: общий фон (градиенты) + фото-подложка */}
    <div className="hero-flow-bg -mt-[var(--header-h)]">
      <section
        data-hero="section"
        className="relative flex flex-col pb-6 sm:pb-7 md:pb-8 min-h-[100dvh] lg:min-h-[100dvh]"
        style={{ boxSizing: "border-box" }}
      >
        {/* Фоновое фото Hero: home-hero 3.webp из public/images/hero */}
        <div className="absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 opacity-[0.15] hero-main-bg">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/hero/home-hero%203.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1] bg-black/10 pointer-events-none"
            aria-hidden="true"
          />
        </div>
        {/* Верхний отступ бейджа как на «Гражданские споры»: секция с -mt-[var(--header-h)], поэтому pt = header-h + отступ (64+64, 72+64, 80+64) */}
        <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col justify-center container-main pt-[calc(var(--header-h)+var(--header-h))] pb-10 sm:pt-[calc(72px+var(--header-h))] sm:pb-12 lg:pt-[calc(5rem+var(--header-h))] lg:pb-14">
          <div className="stack-md max-w-[var(--content-max)]">
            <div data-hero="badge" className="hero-badge inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/60 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 md:text-sm backdrop-blur-sm">
              Москва • регионы России • дистанционный формат
            </div>
            <h1 className="type-h1 min-w-0 break-words text-[var(--text-primary)]">
              Юридическая защита интересов частных лиц и бизнеса в Москве и по всей
              России
            </h1>
            <p className="type-body min-w-0 break-words text-[var(--text-secondary)]">
              Коллегия адвокатов города Москвы «Багратион» оказывает правовую
              помощь частным лицам и бизнесу: очно — в Москве и других регионах
              России, дистанционно — в формате консультаций, правового анализа и
              подготовки документов, а также с представительством интересов в
              судах.
            </p>
            <div className="cluster flex-col md:flex-row">
              <Button href="/contacts" variant="primary" className="min-h-[44px] md:min-h-[48px] w-full md:w-auto">
                Получить консультацию
              </Button>
              <Button href="/services" variant="secondary" className="min-h-[44px] md:min-h-[48px] w-full md:w-auto">
                Выбрать услугу
              </Button>
            </div>
          </div>
        </div>
        <div
          className="relative z-10 hidden shrink-0 lg:flex justify-center pb-5"
          aria-hidden="true"
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[var(--text-muted)]"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="38"
              rx="11"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="9"
              y="8"
              width="6"
              height="10"
              rx="3"
              fill="currentColor"
              className="scroll-wheel-animate"
            />
          </svg>
        </div>
      </section>
      <PracticesSection />
      <WhyChooseUsSection />
    </div>
      <ReviewsSection />
      <ApproachSection />
      <GeographySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
