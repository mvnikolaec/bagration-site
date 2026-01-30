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
    {/* Hero под хедером: отрицательный margin поднимает блок, фон Hero виден за хедером */}
    <div className="hero-flow-bg -mt-[var(--header-h)]">
      <section
        className="relative flex flex-col overflow-hidden pb-6 sm:pb-7 md:pb-8 min-h-[100dvh] lg:min-h-[100dvh]"
        style={{ boxSizing: "border-box" }}
      >
        {/* Фон Hero: от верхней границы секции (inset-0), т.е. от верха viewport под хедером */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]" />
          <div className="absolute inset-0 opacity-[0.15]">
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
          <div className="absolute inset-0 bg-black/18" />
          <div
            className="absolute inset-0 opacity-[0.9]"
            style={{
              background:
                "linear-gradient(165deg, var(--bg-primary) 0%, transparent 42%), linear-gradient(180deg, transparent 48%, var(--bg-secondary) 72%, var(--bg-secondary) 100%), radial-gradient(ellipse 80% 50% at 22% 38%, rgba(0, 200, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 78% 58%, rgba(8, 20, 32, 0.4) 0%, transparent 50%)",
            }}
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
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 md:text-sm">
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
