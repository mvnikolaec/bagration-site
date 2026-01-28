import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";
import Section from "../../components/Section";

export default function Page() {
  return (
    <Section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
      <Container>
        <div className="space-y-4">
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/services" }, { label: "Земельные споры" }]} />

          <h1 className="text-3xl font-semibold">Земельные споры</h1>

          <p className="text-white/70">
            Страница услуги коллегии «Багратион». Далее добавим боли аудитории, кейсы, этапы работы и SEO.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/70">
            <div className="text-sm font-medium text-white">Что делаем</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Границы участков, кадастровые ошибки</li>
              <li>• Сервитут, доступ, проезды, ограничения</li>
              <li>• Право собственности и категории земель</li>
              <li>• Судебная защита и взаимодействие с органами</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Консультация
            </Link>
            <a
              href="tel:+74954106600"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
            >
              Позвонить
            </a>
          </div>
      </Container>
    </Section>
  );
}
