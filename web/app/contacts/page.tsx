"use client";

import { useState } from "react";
import Button from "../components/Button";

export default function ContactsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyToast, setCopyToast] = useState(false);

  const requisitesText = `БАНКОВСКИЕ РЕКВИЗИТЫ
Номер счёта: 40703810000422000007
Валюта: RUR
Организация: КОЛЛЕГИЯ АДВОКАТОВ ГОРОДА МОСКВЫ "БАГРАТИОН"
ИНН: 9705175976
КПП: 770501001
Банк: ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)
БИК: 044525411
Кор. счёт: 30101810145250000411`;

  const handleCopyRequisites = async () => {
    try {
      await navigator.clipboard.writeText(requisitesText);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 bg-transparent">
      {/* Блок A — Hero контактов */}
      <header className="section-header max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
          Контакты
        </h1>
        <p className="section-title-sub text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          Свяжитесь с коллегией адвокатов «Багратион». Консультации в Москве и сопровождение по всей России, включая дистанционный формат.
        </p>
      </header>

      {/* Блок B — Основные контакты */}
      <section className="mt-6 bg-transparent">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch lg:gap-6">
          {/* Карточка 1: Контакты и адрес */}
          <div className="card-proxity p-4 sm:p-5 flex flex-col">
            <div className="space-y-2.5 text-sm sm:text-base">
              <div>
                <span className="text-[var(--text-muted)]">Полное наименование: </span>
                <span className="text-[var(--text-primary)] font-medium">
                  "БАГРАТИОН" Коллегия адвокатов города Москвы
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-[var(--text-muted)]">ИНН: </span>
                <span className="text-[var(--text-primary)]">9705175976</span>
                <span className="text-[var(--text-muted)]">ОГРН: </span>
                <span className="text-[var(--text-primary)]">1227700505757</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-[var(--text-muted)]">Телефон: </span>
                <a
                  href="tel:+74954106600"
                  className="link-proxity hover:text-[var(--accent-primary)] text-[var(--text-primary)]"
                >
                  +7 (495) 410-66-00
                </a>
                <span className="text-[var(--text-muted)]">Email: </span>
                <a
                  href="mailto:info@bagrationlegal.ru"
                  className="link-proxity hover:text-[var(--accent-primary)] text-[var(--text-primary)]"
                >
                  info@bagrationlegal.ru
                </a>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">Адрес: </span>
                <span className="text-[var(--text-primary)]">
                  119002, Москва, улица Арбат, дом 35, этаж 6, офис 652
                </span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-proxity-base btn-proxity-secondary w-full text-center"
              >
                Банковские реквизиты
              </button>
            </div>
          </div>

          {/* Карточка 2: Яндекс.Карта */}
          <div className="card-proxity overflow-hidden p-0 flex flex-col">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.5908%2C55.7521&z=19&pt=37.5908%2C55.7521%2Cpm2orgm&l=map&text=%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%B3%D0%B8%D1%8F%20%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%BE%D0%B2%20%C2%AB%D0%91%D0%B0%D0%B3%D1%80%D0%B0%D1%82%D0%B8%D0%BE%D0%BD%C2%BB%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%90%D1%80%D0%B1%D0%B0%D1%82%2C%20%D0%B4%D0%BE%D0%BC%2035%2C%202%20%D0%B2%D1%85%D0%BE%D0%B4"
              className="w-full h-[400px] sm:h-[450px] md:h-full flex-1 border-0 rounded-[var(--card-radius)]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Коллегия адвокатов «Багратион» — 2-й вход: Москва, улица Арбат, дом 35"
            />
          </div>
        </div>
      </section>

      {/* Блок C — Финальный CTA */}
      <section className="mt-8 bg-transparent">
        <div className="card-proxity mx-auto max-w-3xl px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="text-base font-medium text-[var(--text-primary)] sm:text-lg">
            Чтобы обсудить задачу, направьте запрос удобным способом — мы ответим и предложим формат работы.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="mailto:info@bagrationlegal.ru?subject=Запрос на консультацию"
              className="btn-proxity-base btn-proxity-primary inline-flex items-center justify-center min-h-12 px-8 py-3 text-base"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      </section>

      {/* Модальное окно с банковскими реквизитами */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
          aria-modal="true"
          role="dialog"
          aria-label="Банковские реквизиты"
        >
          <div
            className="card-proxity relative max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-[10000] bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--card-hover-bg)] transition-colors"
              aria-label="Закрыть"
            >
              <svg
                className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* QR-код */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <img
                  src="https://static.tildacdn.com/tild3432-3638-4161-b764-663439383466/__-__.svg"
                  alt="QR-код для оплаты"
                  className="w-full h-auto max-w-[200px] mx-auto"
                />
              </div>
            </div>

            {/* Реквизиты */}
            <div className="space-y-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base whitespace-pre-line mb-6">
              {requisitesText}
            </div>

            {/* Кнопка копирования */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleCopyRequisites}
                className="btn-proxity-base btn-proxity-secondary w-full"
              >
                Скопировать реквизиты
              </button>
              {copyToast && (
                <div className="text-center text-xs text-[var(--accent-primary)] transition-opacity duration-200">
                  Скопировано
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
