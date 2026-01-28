export const SERVICES_ITEMS = [
  { href: "/services/civil-disputes", label: "Гражданские споры" },
  { href: "/services/family-disputes", label: "Семейные споры" },
  { href: "/services/inheritance", label: "Наследственные дела" },
  { href: "/services/real-estate", label: "Недвижимость" },
  { href: "/services/housing-disputes", label: "Жилищные споры" },
  { href: "/services/arbitration", label: "Арбитраж" },
  { href: "/services/land-disputes", label: "Земельные споры" },
  { href: "/services/copyright", label: "Авторское право" },
  { href: "/services/corporate-disputes", label: "Корпоративные споры" },
  { href: "/services/criminal-cases", label: "Уголовные дела" },
] as const;

export const ABOUT_ITEMS = [
  { href: "/about", label: "О нас" },
  { href: "/attorneys", label: "Адвокаты" },
  { href: "/about#approach", label: "Подход к работе" },
] as const;

export const PRACTICE_ITEMS = [
  { href: "/cases", label: "Кейсы" },
  { href: "/practice", label: "Судебная практика" },
] as const;

export const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги", dropdown: "services" as const },
  { href: "#", label: "О коллегии", dropdown: "about" as const },
  { href: "#", label: "Практика и опыт", dropdown: "practice" as const, hidden: true },
  { href: "/press", label: "Пресс-служба" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const CTA_LABEL = "Получить консультацию";
export const CTA_HREF = "/contacts";
