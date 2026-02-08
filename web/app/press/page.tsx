"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import Button from "../components/Button";

const SITE_URL = "https://bagrationlegal.ru";

type PressSource = "1tv" | "vesti" | "m24" | "smotrim" | "rentv" | "tvzvezda" | "youtube";

type PressItem = {
  id: number; // 1..30
  title: string;
  description: string; // краткое описание сюжета, примерно одинаковая длина по карточкам
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
    description: "Комментарий адвоката о распределении ответственности за травмы и ущерб от непогоды и действий служб.",
    url: "https://www.1tv.ru/shows/dobroe-utro/reportazh/sosulka-proletela-i-aga-dobroe-utro-fragment-vypuska-ot-23-12-2020",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/1.jpg",
  },
  {
    id: 2,
    title:
      "Почему глава семейства и по совместительству бывший прокурор Сочи пытается отсудить у бывшей любовницы все. «Про любовь»: шекспировские страсти краснодарского розлива.",
    description: "Судебный спор о разделе имущества и законности требований бывшего прокурора.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/pro-lyubov-shekspirovskie-strasti-krasnodarskogo-rozliva-chelovek-i-zakon-fragment-vypuska-ot-26-11-2021",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/2.jpg",
  },
  {
    id: 3,
    title:
      "Почему суд обязал невиновного в ДТП выплатить компенсацию? Законность решения разъяснил адвокат Михаил Николаец.",
    description: "Разбор судебной практики и правовых оснований взыскания компенсации с участника ДТП.",
    url: "https://www.vesti.ru/article/2443077",
    source: "vesti",
    sourceLabel: SOURCE_LABEL.vesti,
    image: "/press/3.jpg",
  },
  {
    id: 4,
    title: "Кому рассказывать о случаях нарушения тишины и как добиться спокойствия?",
    description: "Адвокат объясняет, куда обращаться при нарушении тишины и как добиться исполнения норм закона.",
    url: "https://www.m24.ru/videos/video/03102017/156189?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/4.jpg",
  },
  {
    id: 5,
    title:
      "Ущерб на полтора миллиарда рублей и почти тысяча покупателей апартаментов в Москве годами не могут добиться правды.",
    description: "Сюжет о массовых нарушениях прав дольщиков и возможностях защиты через суд.",
    url: "https://player.smotrim.ru/iframe/video/id/2277581/start_zoom/true/showZoomBtn/false/sid/vesti/mute/true/?acc_video_id=2389150",
    source: "vesti",
    sourceLabel: SOURCE_LABEL.vesti,
    image: "/press/5.jpg",
  },
  {
    id: 6,
    title: "\"Московский патруль\": подмена генетического материала при ЭКО.",
    description: "Юридический разбор ситуации с подменой биоматериала в клинике ЭКО и правами пострадавших семей.",
    url: "https://www.m24.ru/shows1/14/159616?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/6.jpg",
  },
  {
    id: 7,
    title:
      "Технологии мошенничества: банковские карты и переводы, СМС-сообщения. Полезные лайфхаки, как избежать уловок мошенников.",
    description: "Советы адвоката, как защититься от мошенничества с картами и переводами.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/tehnologiya-moshennichestva-v-epohu-koronavirusa-i-ne-tolko-chelovek-i-zakon-fragment-vypuska-ot-11-06-2020",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/7.jpg",
  },
  {
    id: 8,
    title: "Квартирный вопрос испортил отношения не в одной семье москвичей.",
    description: "Споры о разделе и наследовании квартир: как законно разрешать конфликты между родственниками.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/metry-razdora-chelovek-i-zakon-fragment-vypuska-ot-03-02-2023",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/8.jpg",
  },
  {
    id: 9,
    title:
      "Левые услуги и липовые квитанции: как не заплатить лишнего за коммунальные услуги. Проверено на собственном опыте.",
    description: "Что делать, если в квитанциях ЖКХ навязаны услуги или завышены суммы.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/obratnaya-storona-zhkh-chelovek-i-zakon-fragment-vypuska-ot-16-10-2020",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/9.jpg",
  },
  {
    id: 10,
    title:
      "В Краснодарском крае целый ряд фирм получил иски от Генпрокуратуры о признании договоров аренды земли ничтожными.",
    description: "Комментарий о правовых последствиях исков и защите интересов арендаторов.",
    url: "https://www.youtube.com/watch?v=r0MF9HK4WEQ",
    source: "youtube",
    sourceLabel: SOURCE_LABEL.youtube,
    image: "/press/10.jpg",
  },
  {
    id: 11,
    title:
      "Можно ли жильцам многоэтажки обустроить стоянку самостоятельно? В интервью на телеканале «Москва 24» рассказал Михаил Николаец.",
    description: "Правовые условия организации парковки на придомовой территории и согласования с жильцами.",
    url: "https://www.m24.ru/shows1/109/267420",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/11.jpg",
  },
  {
    id: 12,
    title: "Кто заказчик убийства Солоника и где он скрывался 25 лет.",
    description: "Уголовное дело и судебное расследование: комментарий адвоката о процессе и правовых аспектах.",
    url: "https://smotrim.ru/video/2374341",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/12.jpg",
  },
  {
    id: 13,
    title:
      "Ливни затопили десятки московских квартир. Кто должен платить по закону? Рассказал Михаил Николаец на телеканале «Москва 24».",
    description: "Ответственность УК и застройщика за залив квартир и порядок возмещения ущерба.",
    url: "https://www.m24.ru/shows1/109/250581",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/13.jpg",
  },
  {
    id: 14,
    title:
      "Клиенты одной из столичных фирм не могут забрать технику, сданную в ремонт.",
    description: "Защита прав потребителей: как вернуть технику из ремонта или потребовать компенсацию.",
    url: "https://smotrim.ru/video/1816355",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/14.jpg",
  },
  {
    id: 15,
    title:
      "Поджигателям Никулинского суда Москвы вынесен приговор, они пытались уничтожить материалы уголовного дела.",
    description: "Разбор приговора и правовых последствий попытки уничтожения доказательств.",
    url: "https://player.smotrim.ru/iframe/video/id/2222232/start_zoom/true/showZoomBtn/false/sid/russiatv/mute/true/?acc_video_id=episode_id/2442215/video_id/2331457/brand_id/5204",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/15.jpg",
  },
  {
    id: 16,
    title:
      "Оголенные провода и вздувшийся пол: в новостройке сделали опасный для жильцов ремонт.",
    description: "Требования к застройщику и УК по качеству ремонта и устранению опасных недостатков.",
    url: "https://ren.tv/news/v-rossii/371744-ogolennye-provoda-i-vzduvshiisia-pol-v-novostroike-sdelali-opasnyi-dlia-zhiltsov-remont",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/16.jpg",
  },
  {
    id: 17,
    title:
      "Конец авторазборов: как новые таможенные правила изменят жизнь водителей и бизнеса. Под запрет попадет и установка допоборудования.",
    description: "Комментарий о правовых ограничениях и рисках для автобизнеса и владельцев авто.",
    url: "https://tvzvezda.ru/news/20207162053-HMP65.html",
    source: "tvzvezda",
    sourceLabel: SOURCE_LABEL.tvzvezda,
    image: "/press/17.jpg",
  },
  {
    id: 18,
    title: "\"Московский патруль\": как выбрать мастерскую для гаджета.",
    description: "На что смотреть в договоре и как защитить права при ремонте техники в сервисном центре.",
    url: "https://www.m24.ru/shows1/14/153651?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/18.jpg",
  },
  {
    id: 19,
    title:
      "Ипотека — как не потерять кровные квадрантные метры. Непридуманные истории.",
    description: "Типичные риски при ипотеке и способы защитить жильё при спорах с банком или застройщиком.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/ipoteka-kak-ne-poteryat-krovnye-kvadrantnye-metry-chelovek-i-zakon-fragment-vypuska-ot-05-08-2022",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/19.jpg",
  },
  {
    id: 20,
    title:
      "Суд над адвокатом в Новороссийске: на чем попался разоблачитель коррупционеров.",
    description: "Ход процесса и правовая оценка обвинений в отношении адвоката-разоблачителя.",
    url: "https://smotrim.ru/video/2305948",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/20.jpg",
  },
  {
    id: 21,
    title: "Бизнесвумен тайно сделали директором компании с миллиардным оборотом.",
    description: "Корпоративный конфликт и незаконное назначение: как защитить права в споре за контроль в компании.",
    url: "https://ren.tv/video/embed/810267#autoplay=1",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/21.jpg",
  },
  {
    id: 22,
    title:
      "В Истринском районе Подмосковья полицейские выясняют обстоятельства ЧП на детской площадке.",
    description: "Разбор инцидента и вопросы ответственности за безопасность на придомовой территории.",
    url: "https://www.m24.ru/shows1/14/150560?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/22.jpg",
  },
  {
    id: 23,
    title:
      "В мессенджерах и социальных сетях – поток объявлений с предложением обмена валюты у частных лиц. Но это незаконно и рискованно!",
    description: "Почему обмен валюты у физлиц вне банков незаконен и чем это грозит участникам.",
    url: "https://www.1tv.ru/shows/dobroe-utro/pro-dengi/ostorozhno-valyutnye-moshenniki-dobroe-utro-fragment-vypuska-ot-29-03-2022",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/23.jpg",
  },
  {
    id: 24,
    title:
      "В Подмосковье жители многоэтажки пытаются закрыть хостел, который работает в одной из квартир.",
    description: "Законность использования жилого помещения под хостел и инструменты давления жильцов.",
    url: "https://ren.tv/video/embed/652211#autoplay=1",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/24.jpg",
  },
  {
    id: 25,
    title:
      "Кибермошенники «толкают» в циничной паутине свои дорогущие капли и мази со ссылкой на медийных личностей.",
    description: "Как распознать мошенничество с псевдо-рекомендациями и куда обращаться пострадавшим.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/parazity-na-nashem-imeni-chelovek-i-zakon-fragment-vypuska-ot-22-10-2021",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/25.jpg",
  },
  {
    id: 26,
    title:
      "Четыре года колонии получили владельцы нелегального частного детского сада «Полина» в Астрахани.",
    description: "Уголовное дело за ведение деятельности без лицензии и нарушение прав детей и родителей.",
    url: "https://www.1tv.ru/shows/chelovek-i-zakon/syuzhety/sovremennye-freken-bok-chelovek-i-zakon-fragment-vypuska-ot-29-01-2021",
    source: "1tv",
    sourceLabel: SOURCE_LABEL["1tv"],
    image: "/press/26.jpg",
  },
  {
    id: 27,
    title:
      "У жителей целого микрорайона новостроек в Москве больше двух недель из кранов течет ржавая вода.",
    description: "Требования к застройщику и УК по качеству воды и возмещению ущерба жильцам.",
    url: "https://www.m24.ru/shows1/109/258856?utm_source=CopyBuf",
    source: "m24",
    sourceLabel: SOURCE_LABEL.m24,
    image: "/press/27.jpg",
  },
  {
    id: 28,
    title:
      "Кемеровская предподавательница-блогер стала жертвой интернет-похитителей.",
    description: "Мошенничество в сети: как похищают средства и личные данные и как защитить себя.",
    url: "https://smotrim.ru/video/1924978",
    source: "smotrim",
    sourceLabel: SOURCE_LABEL.smotrim,
    image: "/press/28.jpg",
  },
  {
    id: 29,
    title:
      "Почти каждый московский подъезд стал открытым — в Интернет выложили базу данных с кодами домофонов.",
    description: "Правовые последствия утечки данных и ответственность за незаконное распространение кодов.",
    url: "https://ren.tv/news/v-rossii/468005-bazu-dannykh-s-kodami-domofonov-slili-v-set",
    source: "rentv",
    sourceLabel: SOURCE_LABEL.rentv,
    image: "/press/29.jpg",
  },
  {
    id: 30,
    title:
      "Миллиарды потерянных рублей: клиенты \"Финансового брокера\" много лет пытаются вернуть вклады.",
    description: "Защита прав вкладчиков при банкротстве финансовой компании и взыскание средств.",
    url: "https://player.smotrim.ru/iframe/video/id/2148048/start_zoom/true/showZoomBtn/false/sid/vesti/?acc_video_id=839851",
    source: "vesti",
    sourceLabel: SOURCE_LABEL.vesti,
    image: "/press/30.jpg",
  },
];

type SourceFilter = "all" | "1tv" | "russia" | "m24" | "rentv" | "tvzvezda" | "youtube";
type SortMode = "default" | "source";

function PressItemCard({ item }: { item: PressItem }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/press/${item.id}.jpg`;
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
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="card-proxity-inner rounded-[12px] px-4 py-2 text-xs font-medium text-[var(--text-muted)]">
              Сюжет
            </div>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center opacity-95 transition-opacity duration-200 group-hover:opacity-90"
            onError={() => setImgError(true)}
          />
        )}
        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2">
          <span className="card-proxity-inner rounded-full px-2.5 py-1 text-[11px] leading-none text-[var(--text-primary)]">
            {item.sourceLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)] sm:text-base">
          {item.title}
        </h3>
        <p className="text-xs leading-snug text-[var(--text-secondary)] sm:text-sm">
          {item.description}
        </p>
        <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)]">
          Смотреть сюжет
          <svg
            className="relative top-[2px] -ml-[5px] h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
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

function buildPressPageJsonLd() {
  const organization = {
    "@type": "LegalService",
    name: "Коллегия адвокатов города Москвы «Багратион»",
    url: SITE_URL,
    telephone: "+7 (495) 410-66-00",
    email: "info@bagrationlegal.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Арбат, дом 35, этаж 6, офис 652",
      addressLocality: "Москва",
      postalCode: "119002",
      addressCountry: "RU",
    },
  };

  const personNikolaets = {
    "@type": "Person",
    name: "Михаил Николаец",
    jobTitle: "Председатель коллегии адвокатов",
    worksFor: organization,
  };

  const personNemtseva = {
    "@type": "Person",
    name: "Ольга Немцева",
    jobTitle: "Заместитель председателя коллегии адвокатов",
    worksFor: organization,
  };

  const itemListElements = pressItems.map((item) => {
    const author = item.id % 2 === 1 ? personNikolaets : personNemtseva;
    const imagePath = item.image ?? `/press/${item.id}.jpg`;
    const normalizedImagePath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    const imageUrl = `${SITE_URL}${normalizedImagePath}`;
    return {
      "@type": "ListItem",
      position: item.id,
      item: {
        "@type": "Article",
        headline: item.title,
        url: item.url,
        image: imageUrl,
        author,
        publisher: organization,
        mainEntityOfPage: item.url,
      },
    };
  });

  const mainEntity = {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: pressItems.length,
    itemListElement: itemListElements,
  };

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Пресс-служба",
    description:
      "Публичные комментарии, экспертные разборы и сюжеты с участием адвокатов коллегии «Багратион» в СМИ.",
    url: `${SITE_URL}/press`,
    publisher: organization,
    mainEntity,
  };
}

function validatePressJsonLd(jsonLd: ReturnType<typeof buildPressPageJsonLd>) {
  const errors: Array<{
    id: number;
    position: number;
    title: string;
    problem: string;
    value: unknown;
  }> = [];

  // Проверка корневого объекта
  if (jsonLd["@type"] !== "CollectionPage") {
    errors.push({
      id: 0,
      position: 0,
      title: "Root object",
      problem: "@type должен быть CollectionPage",
      value: jsonLd["@type"],
    });
  }

  if (jsonLd.url !== "https://bagrationlegal.ru/press") {
    errors.push({
      id: 0,
      position: 0,
      title: "Root object",
      problem: "url должен быть https://bagrationlegal.ru/press",
      value: jsonLd.url,
    });
  }

  // Проверка mainEntity
  const mainEntity = jsonLd.mainEntity;
  if (mainEntity.numberOfItems !== pressItems.length) {
    errors.push({
      id: 0,
      position: 0,
      title: "mainEntity",
      problem: `numberOfItems должен быть ${pressItems.length}`,
      value: mainEntity.numberOfItems,
    });
  }

  if (mainEntity.itemListElement.length !== pressItems.length) {
    errors.push({
      id: 0,
      position: 0,
      title: "mainEntity",
      problem: `itemListElement.length должен быть ${pressItems.length}`,
      value: mainEntity.itemListElement.length,
    });
  }

  // Проверка каждого элемента
  mainEntity.itemListElement.forEach((li, index) => {
    const originalItem = pressItems[index];
    const itemId = originalItem.id;

    // Проверка position
    if (typeof li.position !== "number") {
      errors.push({
        id: itemId,
        position: li.position as number,
        title: originalItem.title.substring(0, 50) + "...",
        problem: "position должен быть числом",
        value: li.position,
      });
    }

    // Проверка item
    const article = li.item;
    if (!article["@type"]) {
      errors.push({
        id: itemId,
        position: li.position as number,
        title: originalItem.title.substring(0, 50) + "...",
        problem: "item[@type] отсутствует",
        value: article["@type"],
      });
    }

    // Проверка headline
    if (!article.headline || typeof article.headline !== "string" || article.headline.trim() === "") {
      errors.push({
        id: itemId,
        position: li.position as number,
        title: originalItem.title.substring(0, 50) + "...",
        problem: "headline должен быть непустой строкой",
        value: article.headline,
      });
    }

    // Проверка url
    if (!article.url || typeof article.url !== "string" || !article.url.startsWith("http")) {
      errors.push({
        id: itemId,
        position: li.position as number,
        title: originalItem.title.substring(0, 50) + "...",
        problem: "url должен начинаться с http",
        value: article.url,
      });
    }

    // Проверка image
    if (
      !article.image ||
      typeof article.image !== "string" ||
      !article.image.startsWith("https://bagrationlegal.ru/") ||
      article.image.includes("undefined")
    ) {
      errors.push({
        id: itemId,
        position: li.position as number,
        title: originalItem.title.substring(0, 50) + "...",
        problem: "image должен начинаться с https://bagrationlegal.ru/ и не содержать undefined",
        value: article.image,
      });
    }

    // Проверка author
    if (!article.author || !article.author.name) {
      errors.push({
        id: itemId,
        position: li.position as number,
        title: originalItem.title.substring(0, 50) + "...",
        problem: "author.name должен быть задан",
        value: article.author?.name,
      });
    } else {
      // Проверка правила авторов
      const expectedAuthorName = itemId % 2 === 1 ? "Михаил Николаец" : "Ольга Немцева";
      if (article.author.name !== expectedAuthorName) {
        errors.push({
          id: itemId,
          position: li.position as number,
          title: originalItem.title.substring(0, 50) + "...",
          problem: `author.name должен быть "${expectedAuthorName}" (id ${itemId} ${itemId % 2 === 1 ? "нечётный" : "чётный"})`,
          value: article.author.name,
        });
      }
    }
  });

  return errors;
}

export default function PressPage() {
  const [query, setQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const jsonLd = useMemo(() => buildPressPageJsonLd(), []);

  const breadcrumbJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: "https://bagrationlegal.ru/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Пресс-служба",
          item: "https://bagrationlegal.ru/press",
        },
      ],
    }),
    []
  );

  // Dev-only валидация JSON-LD
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const errors = validatePressJsonLd(jsonLd);
      if (errors.length > 0) {
        console.group("Press JSON-LD validation");
        console.table(
          errors.map((e) => ({
            id: e.id,
            position: e.position,
            title: e.title,
            problem: e.problem,
            value: String(e.value).substring(0, 80),
          }))
        );
        console.warn(`Найдено проблем: ${errors.length}`);
        console.groupEnd();
      } else {
        console.info("Press JSON-LD validation: OK", { count: pressItems.length });
      }
    }
  }, [jsonLd]);

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
    <div data-page="press" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Блок A — Hero: full-bleed фон (100vw); без overflow-hidden, чтобы фон не обрезался «баннером» */}
      <section className="relative w-full pb-10 sm:pb-12 lg:pb-14">
        {/* Full-bleed обёртка фона: на всю ширину viewport (w-screen left-1/2 -translate-x-1/2) */}
        <div className="absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2">
          {/* z-0: фото */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/press/press-hero-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          {/* z-1: затемнение */}
          <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" aria-hidden="true" />
          {/* z-1: мягкий fade в фон страницы (--background-base из globals.css) */}
          <div
            className="absolute inset-x-0 bottom-0 z-[1] h-24 sm:h-32 pointer-events-none bg-gradient-to-t from-[var(--background-base)] to-transparent"
            aria-hidden="true"
          />
        </div>
        {/* Контент Hero: в стандартном контейнере, без full-bleed */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <header className="section-header max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              Пресс-служба
            </h1>
            <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Публичные комментарии и видеосюжеты с участием адвокатов коллегии «Багратион» в федеральных и региональных СМИ.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
              Подборка сюжетов и публикаций — переходите по ссылке для просмотра.
            </p>
          </header>
        </div>
      </section>

      {/* Блок B — Компактная панель фильтров (filter bar, стекло как карточки) */}
      <div className="mt-6">
        <div className="card-proxity flex min-h-12 flex-wrap items-center gap-3 rounded-[var(--card-radius)] px-3 py-2.5 sm:px-4 md:flex-nowrap">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по сюжетам…"
            className="min-w-0 flex-1 rounded-[var(--btn-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-3 py-2 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus-visible:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
            aria-label="Поиск по сюжетам"
          />
          <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:w-auto sm:flex-nowrap">
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value as SourceFilter)}
              aria-label="Источник"
              className="rounded-[var(--btn-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus-visible:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
            >
              <option value="all">Все источники</option>
              <option value="1tv">Первый канал</option>
              <option value="russia">Россия (Вести/Смотрим)</option>
              <option value="m24">Москва 24</option>
              <option value="rentv">РЕН ТВ</option>
              <option value="tvzvezda">ТВ Звезда</option>
              <option value="youtube">YouTube</option>
            </select>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              aria-label="Сортировка"
              className="rounded-[var(--btn-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus-visible:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
            >
              <option value="default">По умолчанию (1→30)</option>
              <option value="source">По источнику</option>
            </select>
          </div>
        </div>
        <p className="mt-1.5 text-xs text-[var(--text-muted)]">
          Показано: {filtered.length}
        </p>
      </div>

      {/* Блок C — Сетка карточек: вертикальные телефоны 1, горизонтальные/верт. планшет 2, гориз. планшет 3, ПК 4 */}
      <section className="mt-6 bg-transparent" aria-label="Сюжеты пресс-службы">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {filtered.map((item) => (
            <PressItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Блок перелинковки на практики */}
      <section className="mt-8 bg-transparent" aria-labelledby="practices-heading">
        <h2
          id="practices-heading"
          className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl"
        >
          Практики, по которым адвокаты коллегии дают экспертные комментарии
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          <li>
            <Link
              href="/services/civil-disputes"
              className="card-proxity group flex h-full items-center justify-between p-4 transition-colors"
            >
              <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-base">
                Гражданские споры
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/services/family-disputes"
              className="card-proxity group flex h-full items-center justify-between p-4 transition-colors"
            >
              <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-base">
                Семейные споры
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/services/criminal-cases"
              className="card-proxity group flex h-full items-center justify-between p-4 transition-colors"
            >
              <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-base">
                Уголовные дела
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/services/real-estate"
              className="card-proxity group flex h-full items-center justify-between p-4 transition-colors"
            >
              <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-base">
                Недвижимость
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/services/corporate-disputes"
              className="card-proxity group flex h-full items-center justify-between p-4 transition-colors"
            >
              <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)] sm:text-base">
                Корпоративные споры
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
        </ul>
      </section>

      {/* Блок "Для СМИ" */}
      <section className="mt-8 bg-transparent" aria-labelledby="media-heading">
        <h2
          id="media-heading"
          className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl"
        >
          Для СМИ
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          Адвокаты коллегии «Багратион» открыты к профессиональным комментариям, интервью и правовому анализу резонансных правовых ситуаций.
        </p>
        <div className="mt-5">
          <Button href="/contacts" variant="primary" className="min-h-12 px-8 py-3 text-base">
            Связаться с пресс-службой
          </Button>
        </div>
      </section>
    </div>
  );
}
