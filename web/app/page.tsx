import Link from "next/link";

const services = [
  { href: "/services", title: "Гражданские споры", desc: "Защита интересов в судах общей юрисдикции." },
  { href: "/services", title: "Семейные споры", desc: "Развод, раздел имущества, дети, алименты." },
  { href: "/services", title: "Наследство", desc: "Оспаривание, принятие, споры между наследниками." },
  { href: "/services", title: "Недвижимость", desc: "Сделки, споры, взыскания, признание прав." },
  { href: "/services", title: "Арбитраж", desc: "Споры бизнеса: договоры, взыскания, банкротные риски." },
  { href: "/services", title: "Уголовные дела", desc: "Защита на всех стадиях: проверка, следствие, суд." },
];

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Москва · онлайн · коллегия адвокатов
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Коллегия «Багратион» — защита и представительство по делам любой сложности
          </h1>

          <p className="text-base text-white/70 md:text-lg">
            Практика в ключевых направлениях: гражданские и семейные споры, наследство,
            недвижимость, арбитраж, корпоративные конфликты и уголовные дела.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Получить консультацию
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
            >
              Смотреть услуги
            </Link>
          </div>

          <div className="text-sm text-white/50">
            Телефон:{" "}
            <a className="text-white/80 hover:text-white" href="tel:+74954106600">
              +7 (495) 410-66-00
            </a>{" "}
            · Email:{" "}
            <a className="text-white/80 hover:text-white" href="mailto:info@bagrationlegal.ru">
              info@bagrationlegal.ru
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-4">
            <div className="text-sm text-white/60">Коротко о подходе</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>• Стратегия и позиция по делу — до подачи документов</li>
              <li>• Прозрачные этапы: анализ → план → действия → результат</li>
              <li>• Коммуникация: понятные отчёты и контроль сроков</li>
              <li>• Опыт: 20+ лет практики у каждого адвоката коллегии</li>
            </ul>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="text-xs text-white/50">Фокус</div>
                <div className="mt-1 text-sm">Москва и онлайн</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="text-xs text-white/50">Формат</div>
                <div className="mt-1 text-sm">Переговоры · суд · защита</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Ключевые направления</h2>
            <p className="mt-2 text-white/70">
              Сконцентрированная практика в приоритетных для клиентов категориях споров.
            </p>
          </div>
          <Link className="hidden text-sm text-white/70 hover:text-white md:block" href="/services">
            Все услуги →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition"
            >
              <div className="text-base font-medium">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>
              <div className="mt-4 text-sm text-white/60 group-hover:text-white/80 transition">
                Подробнее →
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Link className="text-sm text-white/70 hover:text-white" href="/services">
            Все услуги →
          </Link>
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="text-xs text-white/50">Председатель коллегии</div>
          <h3 className="mt-2 text-xl font-semibold">Михаил Николаец</h3>
          <div className="mt-2 text-sm text-white/70">
            Рег. № 77/13 745 · стаж 20 лет · арбитраж, корпоративные споры, семейные дела,
            гражданские споры, недвижимость и земля, наследство, авторское право.
          </div>
          <div className="mt-5">
            <Link
              href="/attorneys"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Подробнее об адвокатах →
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="text-xs text-white/50">Заместитель председателя</div>
          <h3 className="mt-2 text-xl font-semibold">Ольга Немцева</h3>
          <div className="mt-2 text-sm text-white/70">
            Рег. № 77/10945 · стаж 28 лет · арбитраж, семейные дела, гражданские споры,
            наследство, уголовные дела.
          </div>
          <div className="mt-5">
            <Link
              href="/attorneys"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Команда и специализации →
            </Link>
          </div>
        </div>
      </section>

      {/* PRESS + NEWS */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h3 className="text-xl font-semibold">Пресс-служба</h3>
          <p className="mt-2 text-sm text-white/70">
            Комментарии для СМИ, участие в эфирах, экспертные разборы. Блок для логотипов телеканалов и изданий.
          </p>
          <div className="mt-5">
            <Link href="/press" className="text-sm text-white/70 hover:text-white transition">
              Перейти в пресс-службу →
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h3 className="text-xl font-semibold">Новости</h3>
          <p className="mt-2 text-sm text-white/70">
            Публикации коллегии: практика, разборы, новости и обновления сайта.
          </p>
          <div className="mt-5">
            <Link href="/news" className="text-sm text-white/70 hover:text-white transition">
              Смотреть новости →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Нужна правовая позиция и план действий?</h2>
            <p className="mt-2 text-white/70">
              Опишите ситуацию — мы предложим формат работы и ближайшие шаги.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/contacts"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Записаться на консультацию
            </Link>
            <a
              href="tel:+74954106600"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
