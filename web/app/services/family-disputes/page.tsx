import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="text-sm text-white/60">
        <Link className="hover:text-white" href="/services">
          Услуги
        </Link>{" "}
        <span className="text-white/40">/</span> Семейные споры
      </div>

      <h1 className="text-3xl font-semibold">Семейные споры</h1>

      <p className="text-white/70">
        Страница услуги коллегии «Багратион». Далее добавим боли аудитории, кейсы, этапы работы и SEO.
      </p>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
        <div className="text-sm font-medium text-white">Что делаем</div>
        <ul className="mt-3 space-y-2 text-sm">
          <li>• Развод и раздел имущества</li>
          <li>• Споры о детях: место жительства, порядок общения</li>
          <li>• Алименты: взыскание, изменение, задолженность</li>
          <li>• Соглашения и защита интересов в суде</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/contacts"
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
        >
          Консультация
        </Link>
        <a
          href="tel:+74954106600"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
        >
          Позвонить
        </a>
      </div>
    </section>
  );
}
