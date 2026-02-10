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
        className="relative flex flex-col pb-6 sm:pb-7 md:pb-8 min-h-[100dvh] lg:min-h-[100dvh]"
        style={{ boxSizing: "border-box" }}
      >
        {/* Фоновое фото Hero: home-hero-bg-v2.png из public/images/hero */}
        <div className="absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 opacity-[0.15] hero-main-bg">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/hero/home-hero-bg-v2.png"
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
        {/* Отступ контента: высота хедера + 30px от нижней границы хедера */}
        <div
          className="relative z-10 w-full shrink-0"
          style={{ height: "calc(var(--header-h) + 30px)", minHeight: "calc(var(--header-h) + 30px)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[30px] sm:gap-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/60 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 md:text-sm backdrop-blur-sm mt-[30px]">
              Москва • регионы России • дистанционный формат
            </div>
            <h1 className="min-w-0 text-xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.25rem] 2xl:text-[2.5rem]">
              Юридическая защита интересов частных лиц и бизнеса в Москве и по всей
              России
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
