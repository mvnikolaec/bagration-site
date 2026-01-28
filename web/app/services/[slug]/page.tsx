import Link from "next/link";

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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm text-[var(--accent-primary)] hover:underline"
      >
        ← Услуги
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
        {title}
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Страница услуги: {title}.
      </p>
    </div>
  );
}
