"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Button from "../components/Button";

type PressSource = "1tv" | "vesti" | "m24" | "smotrim" | "rentv" | "tvzvezda" | "youtube";

type PressItem = {
  id: number; // 1..30
  title: string;
  url: string;
  source: PressSource;
  sourceLabel: string;
  image: string; // /press/1.jpg ...
};

const SOURCE_LABEL: Record<PressSource, string> = {
  "1tv": "Первый канал",
  vesti: "Вести",
  m24: "Москва 24",
  smotrim: "Смотрим",
  rentv: "РЕН ТВ",
  tvzvezda: "ТВ Звезда",
  youtube: "YouTube",
};

const pressItems: PressItem[] = [
  {
    id: 1,
    title:
      "Кто ответит за наши травмы и долгое лечение: непогода, управляющая компания, ТСЖ, дорожные службы или коммерческие организации?",
    url: "https://www.1tv.ru/shows/dobroe-utro/reportazh/sosulka-proletela-i-aga-dobroe-utro-fragment-vypuska-ot-23-12-2020",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/1.jpg",
  },
  {
    id: 2,
    title:
      "Почему глава семейства и по совместительству бывший прокурор Сочи пытается отсудить у бывшей любовницы все. «Про любовь»: шекспировские страсти краснодарского розлива.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/pro-lyubov-shekspirovskie-strasti-krasnodarskogo-rozliva-chelovek-i-zakon-fragment-vypuska-ot-26-11-2021",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/2.jpg",
  },
  {
    id: 3,
    title:
      "Почему суд обязал невиновного в ДТП выплатить компенсацию? Законность решения разъяснил адвокат Михаил Николаец.",
    url: "https://www.vesti.ru/article/2443077",
    source: "vesti",
    sourceLabel: SOURCE_LABEL.vesti,
    image: "/press/3.jpg",
  },
  {
    id: 4,
    title: "Кому рассказывать о случаях нарушения тишины и как добиться спокойствия?",
    url: "https://www.m24.ru/videos/video/03102017/156189?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/4.jpg",
  },
  {
    id: 5,
    title:
      "Ущерб на полтора миллиарда рублей и почти тысяча покупателей апартаментов в Москве годами не могут добиться правды.",
    url: "https://player.smotrim.ru/iframe/video/id/2277581/start_zoom/true/showZoomBtn/false/sid/vesti/mute/true/?acc_video_id=2389150",
    source: "vesti",
    sourceLabel: SOURCE_LABEL.vesti,
    image: "/press/5.jpg",
  },
  {
    id: 6,
    title: "\"Московский патруль\": подмена генетического материала при ЭКО.",
    url: "https://www.m24.ru/shows1/14/159616?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/6.jpg",
  },
  {
    id: 7,
    title:
      "Технологии мошенничества: банковские карты и переводы, СМС-сообщения. Полезные лайфхаки, как избежать уловок мошенников.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/tehnologiya-moshennichestva-v-epohu-koronavirusa-i-ne-tolko-chelovek-i-zakon-fragment-vypuska-ot-11-06-2020",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/7.jpg",
  },
  {
    id: 8,
    title: "Квартирный вопрос испортил отношения не в одной семье москвичей.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/metry-razdora-chelovek-i-zakon-fragment-vypuska-ot-03-02-2023",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/8.jpg",
  },
  {
    id: 9,
    title:
      "Левые услуги и липовые квитанции: как не заплатить лишнего за коммунальные услуги. Проверено на собственном опыте.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/obratnaya-storona-zhkh-chelovek-i-zakon-fragment-vypuska-ot-16-10-2020",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/9.jpg",
  },
  {
    id: 10,
    title:
      "В Краснодарском крае целый ряд фирм получил иски от Генпрокуратуры о признании договоров аренды земли ничтожными.",
    url: "https://www.youtube.com/watch?v=r0MF9HK4WEQ",
    source: "youtube",
    sourceLabel: SOURCE_LABEL.youtube,
    image: "/press/10.jpg",
  },
  {
    id: 11,
    title:
      "Можно ли жильцам многоэтажки обустроить стоянку самостоятельно? В интервью на телеканале «Москва 24» рассказал Михаил Николаец.",
    url: "https://www.m24.ru/shows1/109/267420",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/11.jpg",
  },
  {
    id: 12,
    title: "Кто заказчик убийства Солоника и где он скрывался 25 лет.",
    url: "https://smotrim.ru/video/2374341",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/12.jpg",
  },
  {
    id: 13,
    title:
      "Ливни затопили десятки московских квартир. Кто должен платить по закону? Рассказал Михаил Николаец на телеканале «Москва 24».",
    url: "https://www.m24.ru/shows1/109/250581",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/13.jpg",
  },
  {
    id: 14,
    title:
      "Клиенты одной из столичных фирм не могут забрать технику, сданную в ремонт.",
    url: "https://smotrim.ru/video/1816355",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/14.jpg",
  },
  {
    id: 15,
    title:
      "Поджигателям Никулинского суда Москвы вынесен приговор, они пытались уничтожить материалы уголовного дела.",
    url: "https://player.smotrim.ru/iframe/video/id/2222232/start_zoom/true/showZoomBtn/false/sid/russiatv/mute/true/?acc_video_id=episode_id/2442215/video_id/2331457/brand_id/5204",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/15.jpg",
  },
  {
    id: 16,
    title:
      "Оголенные провода и вздувшийся пол: в новостройке сделали опасный для жильцов ремонт.",
    url: "https://ren.tv/news/v-rossii/371744-ogolennye-provoda-i-vzduvshiisia-pol-v-novostroike-sdelali-opasnyi-dlia-zhiltsov-remont",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/16.jpg",
  },
  {
    id: 17,
    title:
      "Конец авторазборов: как новые таможенные правила изменят жизнь водителей и бизнеса. Под запрет попадет и установка допоборудования.",
    url: "https://tvzvezda.ru/news/20207162053-HMP65.html",
    source: "tvzvezda",
    sourceLabel: SOURCE_LABEL.tvzvezda,
    image: "/press/17.jpg",
  },
  {
    id: 18,
    title: "\"Московский патруль\": как выбрать мастерскую для гаджета.",
    url: "https://www.m24.ru/shows1/14/153651?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/18.jpg",
  },
  {
    id: 19,
    title:
      "Ипотека — как не потерять кровные квадрантные метры. Непридуманные истории.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/ipoteka-kak-ne-poteryat-krovnye-kvadrantnye-metry-chelovek-i-zakon-fragment-vypuska-ot-05-08-2022",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/19.jpg",
  },
  {
    id: 20,
    title:
      "Суд над адвокатом в Новороссийске: на чем попался разоблачитель коррупционеров.",
    url: "https://smotrim.ru/video/2305948",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/20.jpg",
  },
  {
    id: 21,
    title: "Бизнесвумен тайно сделали директором компании с миллиардным оборотом.",
    url: "https://ren.tv/video/embed/810267#autoplay=1",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/21.jpg",
  },
  {
    id: 22,
    title:
      "В Истринском районе Подмосковья полицейские выясняют обстоятельства ЧП на детской площадке.",
    url: "https://www.m24.ru/shows1/14/150560?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/22.jpg",
  },
  {
    id: 23,
    title:
      "В мессенджерах и социальных сетях – поток объявлений с предложением обмена валюты у частных лиц. Но это незаконно и рискованно!",
    url: "https://www.1tv.ru/shows/dobroe-utro/pro-dengi/ostorozhno-valyutnye-moshenniki-dobroe-utro-fragment-vypuska-ot-29-03-2022",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/23.jpg",
  },
  {
    id: 24,
    title:
      "В Подмосковье жители многоэтажки пытаются закрыть хостел, который работает в одной из квартир.",
    url: "https://ren.tv/video/embed/652211#autoplay=1",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/24.jpg",
  },
  {
    id: 25,
    title:
      "Кибермошенники «толкают» в циничной паутине свои дорогущие капли и мази со ссылкой на медийных личностей.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/parazity-na-nashem-imeni-chelovek-i-zakon-fragment-vypuska-ot-22-10-2021",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/25.jpg",
  },
  {
    id: 26,
    title:
      "Четыре года колонии получили владельцы нелегального частного детского сада «Полина» в Астрахани.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/sovremennye-freken-bok-chelovek-i-zakon-fragment-vypuska-ot-29-01-2021",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/26.jpg",
  },
  {
    id: 27,
    title:
      "У жителей целого микрорайона новостроек в Москве больше двух недель из кранов течет ржавая вода.",
    url: "https://www.m24.ru/shows1/109/258856?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/27.jpg",
  },
  {
    id: 28,
    title:
      "Кемеровская предподавательница-блогер стала жертвой интернет-похитителей.",
    url: "https://smotrim.ru/video/1924978",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/28.jpg",
  },
  {
    id: 29,
    title:
      "Почти каждый московский подъезд стал открытым — в Интернет выложили базу данных с кодами домофонов.",
    url: "https://ren.tv/news/v-rossii/468005-bazu-dannykh-s-kodami-domofonov-slili-v-set",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/29.jpg",
  },
  {
    id: 30,
    title:
      "Миллиарды потерянных рублей: клиенты \"Финансового брокера\" много лет пытаются вернуть вклады.",
    url: "https://player.smotrim.ru/iframe/video/id/2148048/start_zoom/true/showZoomBtn/false/sid/vesti/?acc_video_id=839851",
    source: "vesti",
    sourceLabel: SOURCE_LABEL.vesti,
    image: "/press/30.jpg",
  },
];

type SourceFilter = "all" | "1tv" | "russia" | "m24" | "rentv" | "tvzvezda" | "youtube";
type SortMode = "default" | "source";

function Pad2(n: number) {
  return String(n).padStart(2, "0");
}

function PressItemCard({ item }: { item: PressItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-proxity group flex h-full flex-col overflow-hidden focus-visible:outline-none"
      aria-label={`${item.sourceLabel}: ${item.title} — смотреть сюжет`}
      title={item.title}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-95 transition-opacity duration-200 group-hover:opacity-90"
        />
        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2">
          <span className="card-proxity-inner rounded-full px-2.5 py-1 text-[11px] leading-none text-[var(--text-primary)]">
            {item.sourceLabel}
          </span>
        </div>
        <div className="pointer-events-none absolute right-3 top-3">
          <span className="card-proxity-inner rounded-full px-2.5 py-1 text-[11px] leading-none text-[var(--text-muted)]">
            {Pad2(item.id)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-sm font-medium leading-snug text-[var(--text-primary)] sm:text-base">
          {item.title}
        </p>
        <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)]">
          Смотреть сюжет
          <svg
            className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function PressPage() {
  const [query, setQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = pressItems.slice();

    if (sourceFilter !== "all") {
      items = items.filter((it) => {
        if (sourceFilter === "russia") return it.source === "vesti" || it.source === "smotrim";
        return it.source === sourceFilter;
      });
    }
    if (q) {
      items = items.filter((it) => it.title.toLowerCase().includes(q));
    }
    if (sortMode === "source") {
      items.sort((a, b) => {
        const la = a.sourceLabel.localeCompare(b.sourceLabel, "ru");
        if (la !== 0) return la;
        return a.id - b.id;
      });
    } else {
      items.sort((a, b) => a.id - b.id);
    }
    return items;
  }, [query, sourceFilter, sortMode]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 bg-transparent">
      {/* Блок A — Hero */}
      <header className="section-header max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
          Пресс-служба
        </h1>
        <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          Публичные комментарии, экспертные разборы и сюжеты с участием адвокатов коллегии «Багратион» в федеральных и региональных СМИ.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
          Подборка видеосюжетов и публикаций. Для просмотра перейдите по ссылке.
        </p>
      </header>

      {/* Блок B — Фильтры и поиск */}
      <div className="card-proxity mt-6 px-4 py-4 sm:px-5 sm:py-5">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-[var(--text-muted)]">
              Поиск по заголовкам
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Введите часть заголовка…"
              className="mt-1 w-full rounded-[var(--btn-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus-visible:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)]">
              Источник
            </label>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value as SourceFilter)}
              className="mt-1 w-full rounded-[var(--btn-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus-visible:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
            >
              <option value="all">Все источники</option>
              <option value="1tv">Первый канал</option>
              <option value="russia">Россия (Вести/Смотрим)</option>
              <option value="m24">Москва 24</option>
              <option value="rentv">РЕН ТВ</option>
              <option value="tvzvezda">ТВ Звезда</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)] sm:text-sm">
            Найдено: <span className="text-[var(--text-primary)]">{filtered.length}</span>
          </p>
          <div className="flex items-center gap-2">
            <label className="text-xs text-[var(--text-muted)]">Сортировка</label>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="rounded-[var(--btn-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-2 text-xs text-[var(--text-primary)] outline-none focus-visible:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
            >
              <option value="default">По умолчанию (1→30)</option>
              <option value="source">По источнику</option>
            </select>
          </div>
        </div>
      </div>

      {/* Блок C — Сетка карточек */}
      <section className="mt-6 bg-transparent" aria-label="Сюжеты пресс-службы">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PressItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Блок D — CTA */}
      <section className="mt-8 bg-transparent" aria-label="Контакт для СМИ">
        <div className="card-proxity mx-auto max-w-3xl px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="text-base font-medium text-[var(--text-primary)] sm:text-lg">
            Нужен комментарий адвоката или правовой разбор ситуации для СМИ?
          </p>
          <div className="mt-5 flex justify-center">
            <Button href="/contacts" variant="primary" className="min-h-12 px-8 py-3 text-base">
              Связаться с пресс-службой
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
