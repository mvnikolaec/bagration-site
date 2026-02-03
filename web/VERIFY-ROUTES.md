# Проверка маршрутов после чистки (PROMPT 5)

## Запуск
- `npm run build` — успешно (Next.js 16.1.6)
- `npm run dev` — сервер запускается (localhost)

## Проверенные маршруты (по коду)

| Маршрут | Файл | Проверка |
|---------|------|----------|
| `/` | `app/page.tsx` | Hero + секции, hero-flow-bg прозрачный, секции bg-transparent |
| `/about` | `app/about/page.tsx` | Контент в div max-w-4xl, без фона |
| `/services` | `app/services/page.tsx` | Контент в div max-w-4xl, без фона |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | То же, ссылка «← Услуги» |
| `/press` | `app/press/page.tsx` | Контент в div max-w-4xl, без фона |
| `/news` | `app/news/page.tsx` | Контент в div max-w-4xl, без фона |
| `/contacts` | `app/contacts/page.tsx` | Контент в div max-w-4xl, без фона |

## Проверки по коду

1. **Фон / плашки**
   - body: единственный фон через `var(--background-base)` в globals.css.
   - main, section: `background-color: transparent` в globals.
   - Секции главной: класс `bg-transparent` на всех section.
   - Блок отзывов: `[data-reviews-*]` и обёртки без фона; фон только у `.card-proxity`.
   - Внутренние страницы: контент в div без background — фон body просвечивает.

2. **Хедер / футер**
   - Header: `sticky top-0 z-50`, класс `header-at-top` при scroll ≤ 20px, overlay с opacity — без скачков по высоте.
   - Footer: overlay с opacity от позиции в viewport, `bg-transparent`, контент в Container с z-10.
   - Нет условной смены высоты или структуры при скролле.

3. **Адаптив**
   - layout: `main` с `overflow-x-hidden`.
   - Секции: `section-py`, `max-w-7xl`, `px-4 sm:px-6 lg:px-8`.
   - Внутренние страницы: `max-w-4xl`, `py-11 sm:py-14 lg:py-16`, `px-4 sm:px-6 lg:px-8`.
   - Header: бургер на md, навигация скрыта на мобиле; MobileMenu с overflow-y-auto.
   - Footer: grid `grid-cols-1 md:grid-cols-4`, адаптивные отступы.

## Итог
- Явных «дыр» в фоне и прямоугольных плашек по коду не найдено.
- Хедер и футер не меняют высоту/структуру так, чтобы вызывать прыжки.
- Адаптивные классы и overflow сохранены.
- Исправлений не потребовалось.
