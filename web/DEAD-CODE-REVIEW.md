# Ревизия мёртвого кода — web/ (Next.js App Router)

**Дата:** 2025-02-15  
**Правило:** ничего не удалено, только отчёт.

---

## 1. Файлы, которые нигде не импортируются

**Результат:** полноценно «мёртвых» файлов (TS/TSX/JS/CSS) не найдено.

| Файл | Статус | Где проверял |
|------|--------|--------------|
| Все `app/**/*.tsx`, `app/**/*.ts` | Используются | Каждый компонент/модуль проверен по `grep` на импорты; страницы и layout — точки входа App Router |
| `app/globals.css` | Используется | `app/layout.tsx` строка 2: `import "./globals.css"` |
| `next.config.ts`, `next-env.d.ts` | Конфиг/типы | Не импортируются в коде; используются Next.js и TypeScript |
| `scripts/optimize-hero.mjs`, `scripts/deps-audit.mjs` | Используются | `package.json`: скрипты `optimize:hero`, `deps:audit` |

Вывод: отдельно лежащих неиспользуемых файлов в `web/` нет.

---

## 2. Неиспользуемые экспорты и функции

### 2.1. `web/app/lib/heroMeasure.ts`

| Кандидат | Почему мёртвый | Где проверял |
|----------|----------------|--------------|
| **`measureHeroBadgeDebounced`** | Экспортируется, но ни один файл его не импортирует. В `HeroMeasureTrigger.tsx` свой debounce (setTimeout 200ms). | `grep "measureHeroBadgeDebounced"` по всему репозиторию — только определение в `heroMeasure.ts`. |

### 2.2. `web/app/lib/nav.ts`

| Кандидат | Почему мёртвый | Где проверял |
|----------|----------------|--------------|
| **`PRACTICE_ITEMS`** | Нигде не импортируется. В `Header.tsx` и `MobileMenu.tsx` пункты навигации заданы вручную (NavLink, ServicesDropdown, AboutDropdown и т.д.). | `grep "PRACTICE_ITEMS"` — только объявление в `nav.ts`. |
| **`NAV_ITEMS`** | Аналогично: ни одного импорта. Навигация собирается «вручную» в Header/MobileMenu. | `grep "NAV_ITEMS"` — только объявление в `nav.ts`. |

Используемые экспорты из `nav.ts`: `SERVICES_ITEMS`, `ABOUT_ITEMS`, `CTA_LABEL`, `CTA_HREF` (Footer, ServicesDropdown, AboutDropdown, Header, MobileMenu).

---

## 3. Дублирующиеся компоненты / утилиты

Обнаружено дублирование **шаблона Hero-секции** (70vh, фон `hero-press-bg`, бейдж, заголовок, контейнер):

| Места дублирования | Описание |
|--------------------|----------|
| `app/about/page.tsx` | Hero с бейджем «О коллегии», заголовок «О нас» |
| `app/news/page.tsx` | Hero «Новости» |
| `app/practice/page.tsx` | Hero «Судебная практика» |
| `app/cases/page.tsx` | Hero «Кейсы» |
| `app/attorneys/page.tsx` | Hero «Адвокаты» |
| `app/services/page.tsx` | Hero «Услуги» |
| `app/services/[slug]/page.tsx` | Hero с динамическим заголовком по slug |
| `app/services/civil-disputes/page.tsx` | Свой Hero в общем стиле |
| `app/press/page.tsx` | Hero в том же стиле |

Один и тот же блок разметки (section + фон + `container-main` + `hero-content-top-ref` + бейдж + заголовок + описание) повторяется с небольшими отличиями в текстах. Это не «мёртвый» код, а кандидат на вынос в общий компонент (например, `PageHero`) для упрощения поддержки.

---

## 4. Подозрительные «мёртвые» маршруты / страницы

**Результат:** явно мёртвых маршрутов нет.

| Маршрут | Файл | Статус |
|---------|------|--------|
| `/` | `app/page.tsx` | Используется (главная) |
| `/about` | `app/about/page.tsx` | Есть в навигации (Header, Footer) |
| `/attorneys` | `app/attorneys/page.tsx` | Есть в ABOUT_ITEMS и Header (AboutDropdown) |
| `/cases` | `app/cases/page.tsx` | Есть в PRACTICE_ITEMS (в nav.ts), ссылки могут вести с других страниц |
| `/practice` | `app/practice/page.tsx` | Аналогично |
| `/contacts` | `app/contacts/page.tsx` | CTA и навигация |
| `/news` | `app/news/page.tsx` | Пункт меню |
| `/press` | `app/press/page.tsx` + `layout.tsx` | Пункт меню |
| `/services` | `app/services/page.tsx` | Пункт меню |
| `/services/civil-disputes` | `app/services/civil-disputes/page.tsx` | Ссылки из PracticesSection, Footer, press и т.д. |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Динамический маршрут для остальных услуг (family-disputes, inheritance и т.д.); ссылки из SERVICES_ITEMS, PracticesSection, press |

Динамических импортов (`next/dynamic`), MDX или строковых путей к страницам в коде не найдено.

---

## 5. Разделение на списки

### A) SAFE DELETE (высокая уверенность)

Удаление не ломает текущее поведение; статический анализ и поиск по репозиторию показывают отсутствие использований.

| # | Путь | Что удалить | Почему безопасно |
|---|------|-------------|-------------------|
| 1 | `web/app/lib/heroMeasure.ts` | Функция **`measureHeroBadgeDebounced`** (и её экспорт) | Нигде не импортируется; в HeroMeasureTrigger реализован свой debounce. |
| 2 | `web/app/lib/nav.ts` | Константы **`PRACTICE_ITEMS`** и **`NAV_ITEMS`** (и их экспорты) | Нет импортов; навигация в Header/MobileMenu захардкожена. |

Файлы целиком не удалять — только указанные экспорты/функции.

---

### B) NEEDS CHECK (желательна ручная проверка)

Кандидатов с явным риском динамического использования (next/dynamic, MDX, строковые пути) не найдено.

При желании можно отнести к «NEEDS CHECK» перед правками:

- **`PRACTICE_ITEMS` / `NAV_ITEMS`** — если планируется рефакторинг навигации «по данным» из `nav.ts`, их удаление потом придётся откатить. Рекомендация: пометить как «SAFE» для текущего кода, при удалении — кратко проверить, что в проекте нет планов использовать эти константы в ближайших задачах.

---

## 6. План удаления в два PR

### PR1: только SAFE DELETE

1. **`web/app/lib/heroMeasure.ts`**  
   - Удалить функцию `measureHeroBadgeDebounced` и её экспорт (строки ~24–39).  
   - Оставить только `measureHeroBadge` и его экспорт.

2. **`web/app/lib/nav.ts`**  
   - Удалить константу `PRACTICE_ITEMS` и её экспорт.  
   - Удалить константу `NAV_ITEMS` и её экспорт.  
   - Оставить `SERVICES_ITEMS`, `ABOUT_ITEMS`, `CTA_LABEL`, `CTA_HREF`.

3. Прогнать сборку и линт:
   - `npm run build`
   - `npm run lint`
4. Убедиться, что главная, навигация (Header/MobileMenu), страницы услуг и пресс-службы открываются и работают как раньше.

---

### PR2: NEEDS CHECK после ручной проверки

В текущей ревизии в список NEEDS CHECK не попали файлы/экспорты с высоким риском. PR2 можно использовать так:

- **Вариант A:** не создавать, если ограничиться только SAFE DELETE из PR1.  
- **Вариант B:** после ручной проверки (поиск по коду/гиту по `NAV_ITEMS`, `PRACTICE_ITEMS`, возможным строкам типа `"nav"` / `"heroMeasure"`) убедиться, что нет скрытых использований, и тогда считать удаление `PRACTICE_ITEMS`/`NAV_ITEMS` уже выполненным в PR1.  
- **Вариант C:** вынести в отдельный PR рефакторинг Hero (общий компонент `PageHero`) на основе раздела 3 отчёта — без удаления кода, только сокращение дублирования.

---

## Краткая сводка

| Категория | Найдено |
|-----------|---------|
| Файлы без импортов | 0 |
| Неиспользуемые экспорты/функции | 3 (`measureHeroBadgeDebounced`, `PRACTICE_ITEMS`, `NAV_ITEMS`) |
| Дублирующийся код | Один повторяющийся паттерн Hero в 8+ страницах (кандидат на общий компонент) |
| Мёртвые маршруты | 0 |
| **SAFE DELETE** | 1 функция + 2 константы (в 2 файлах) |
| **NEEDS CHECK** | 0 (при желании — уточнение по планам использования `NAV_ITEMS`/`PRACTICE_ITEMS`) |

Если нужно, могу подготовить конкретные патчи (diff) для PR1.
