import Image from "next/image";

export default function AttorneysPage() {
  return (
    <>
      {/* Hero: 70vh, как на странице Пресс-службы */}
      <section data-hero="section" className="relative flex min-h-[70vh] w-full flex-col justify-center">
        <div className="absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 opacity-[0.15] hero-press-bg">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/hero/press-hero-bg-v2.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_22%]"
              priority
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" aria-hidden="true" />
        </div>
        <div className="relative z-10 flex flex-col container-main hero-content-top-ref pb-10 sm:pb-12 lg:pb-14">
          <div className="stack-md max-w-3xl">
            <div data-hero="badge" className="hero-badge inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]/60 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] sm:px-4 sm:py-2 md:text-sm backdrop-blur-sm">
              Команда
            </div>
            <header className="flex flex-col stack-md">
              <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
                Адвокаты
              </h1>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Адвокаты коллегии «Багратион».
              </p>
            </header>
          </div>
        </div>
      </section>

      <div className="container-main pt-0 pb-10 sm:pb-12 lg:pb-14 bg-transparent">
        {/* Контент страницы */}
      </div>
    </>
  );
}
