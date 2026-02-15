/**
 * DEV-only: измерение метрики Hero — расстояние от верхнего края Hero-секции
 * до верхнего края бейджа (pill). Для выравнивания бейджа на всех страницах.
 * В production не вызывается (проверка в компоненте).
 */
export function measureHeroBadge(pathname: string): void {
  if (typeof document === "undefined") return;

  const hero = document.querySelector<HTMLElement>('[data-hero="section"]');
  const badge = document.querySelector<HTMLElement>('[data-hero="badge"]');

  if (!hero || !badge) return;

  const heroTop = hero.getBoundingClientRect().top;
  const badgeTop = badge.getBoundingClientRect().top;
  const metric = Math.round(badgeTop - heroTop);

  const width = typeof window !== "undefined" ? window.innerWidth : 0;
  console.log(
    `[HeroBadgeMetric] ${pathname} | width=${width} | metric=${metric}`
  );
}
