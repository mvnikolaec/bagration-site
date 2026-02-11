import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

const LABELS: Record<string, string> = {
  "civil-disputes": "Гражданские споры",
  "family-disputes": "Семейные споры",
  inheritance: "Наследственные дела",
  "real-estate": "Недвижимость",
  "housing-disputes": "Жилищные споры",
  arbitration: "Арбитраж",
  "land-disputes": "Земельные споры",
  copyright: "Авторское право",
  "corporate-disputes": "Корпоративные споры",
  "criminal-cases": "Уголовные дела",
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const title = LABELS[slug] ?? slug;

  return (
    <>
      {/* Hero: 70vh, как на странице Пресс-службы */}
      <section className="relative flex min-h-[70vh] w-full flex-col justify-center">
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
        <div className="relative z-10 flex flex-col gap-[30px] sm:gap-10 px-4 pt-[70px] pb-10 sm:px-6 sm:pt-[78px] sm:pb-12 lg:px-8 lg:pt-[86px] lg:pb-14">
          <header className="max-w-3xl flex flex-col gap-[30px] sm:gap-10">
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Страница услуги: {title}.
            </p>
          </header>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-0 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14 bg-transparent">
        <Link
          href="/services"
          className="text-sm text-[var(--accent-primary)] hover:underline"
        >
          ← Услуги
        </Link>
        {/* Дополнительный контент услуги */}
      </div>
    </>
  );
}
