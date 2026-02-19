#!/usr/bin/env node
/**
 * Оптимизация Hero background: сжатие + адаптивные версии (640/1024/1440/1920)
 * + WebP и AVIF. Запуск: node scripts/optimize-hero.mjs
 * Требует: npm install -D sharp
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public", "images", "hero");
// Базовый исходник: новый фон главной страницы (PNG)
const srcPath = join(publicDir, "home-hero-bg-v2.png");

const WIDTHS = [640, 1024, 1440, 1920];

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("sharp не установлен. Запустите: npm install -D sharp");
    process.exit(0);
  }
  if (!existsSync(srcPath)) {
    console.warn("Файл home-hero-bg-v2.png не найден в public/images/hero/");
    process.exit(0);
  }
  const buf = readFileSync(srcPath);
  const image = sharp(buf);
  const meta = await image.metadata();
  console.log("Источник:", meta.width, "x", meta.height);

  for (const w of WIDTHS) {
    const base = join(publicDir, `home-hero-bg-v2-${w}`);
    await image
      .clone()
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(base + ".webp");
    await image
      .clone()
      .resize(w, null, { withoutEnlargement: true })
      .avif({ quality: 70 })
      .toFile(base + ".avif");
    console.log("  ", w, "px: .webp .avif");
  }

  const outJpg = join(publicDir, "home-hero-bg-v2-optimized.jpg");
  await image
    .clone()
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outJpg);
  console.log("home-hero-bg-v2-optimized.jpg (основной fallback) создан.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
