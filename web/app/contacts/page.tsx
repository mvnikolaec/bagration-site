"use client";

import { useState } from "react";
import Link from "next/link";

const REQUISITES_FULL = `БАНКОВСКИЕ РЕКВИЗИТЫ
Коллегия адвокатов города Москвы «Багратион»
ИНН 9705175976, ОГРН 1227700505757
Счёт: 40703810000422000007
Валюта: RUR
Банк: ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)
БИК 044525411, КПП 770501001
Кор. счёт: 30101810145250000411`;

const YANDEX_MAP_URL = "https://yandex.ru/maps/org/kollegiya_advokatov_bagration/126900832699/?ll=37.590800%2C55.752100&z=19";

const TOPIC_OPTIONS = [
  { value: "", label: "Выберите тему" },
  { value: "civil", label: "Гражданские споры" },
  { value: "family", label: "Семейные споры" },
  { value: "inheritance", label: "Наследственные дела" },
  { value: "arbitration", label: "Арбитраж" },
  { value: "corporate", label: "Корпоративные споры" },
  { value: "criminal", label: "Уголовные дела" },
  { value: "real-estate", label: "Недвижимость" },
  { value: "other", label: "Иное" },
];

export default function ContactsPage() {
  const [isRequisitesOpen, setIsRequisitesOpen] = useState(false);
  const [copyToast, setCopyToast] = useState(false);
  const [qrError, setQrError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: "",
    description: "",
    consent: false,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyRequisites = async () => {
    try {
      await navigator.clipboard.writeText(REQUISITES_FULL);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2000);
    } catch {
      setCopyToast(false);
    }
  };

  const validateForm = () => {
    const err: Record<string, string> = {};
    if (!form.phone.trim()) err.phone = "Укажите контактный телефон";
    else if (!/^[\d\s+()-]{10,}$/.test(form.phone.replace(/\s/g, ""))) err.phone = "Некорректный номер";
    if (!form.consent) err.consent = "Необходимо согласие на обработку данных";
    setFormErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = encodeURIComponent("Запрос на консультацию");
    const topicLabel = TOPIC_OPTIONS.find((o) => o.value === form.topic)?.label || form.topic || "—";
    const body = encodeURIComponent(
      `Имя: ${form.name || "—"}\nТелефон: ${form.phone}\nТема: ${topicLabel}\nОписание: ${form.description || "—"}`
    );
    window.location.href = `mailto:info@bagrationlegal.ru?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setForm({ name: "", phone: "", topic: "", description: "", consent: false });
    setFormErrors({});
  };

  const inputBase =
    "w-full rounded-[var(--btn-radius)] px-3 py-2.5 text-sm bg-[var(--surface-glass-hover)] border border-[var(--card-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--card-hover-border)] focus:ring-1 focus:ring-[var(--accent-primary)]/30 transition-colors";

  return (
    <>
      {/* Hero: только градиент (глобальный), без отдельного фона */}
      <section className="relative w-full bg-transparent pt-[90px] pb-[70px] sm:pt-[96px] sm:pb-[76px] lg:pt-[100px] lg:pb-[80px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
            Контакты
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Свяжитесь с коллегией «Багратион» для получения профессиональной правовой поддержки — очные консультации в Москве и дистанционное сопровождение по всей территории Российской Федерации.
          </p>
        </div>
      </section>

      {/* Контактные карточки (3 колонки) + форма */}
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12 bg-transparent">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Левая колонка: 3 карточки */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-3">
            <div className="card-proxity p-4 sm:p-5 flex flex-col">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">Телефон для записи и консультаций</h2>
              <p className="mt-2 text-base font-medium text-[var(--text-primary)]">+7 (495) 410-66-00</p>
              <p className="mt-1.5 text-xs leading-snug text-[var(--text-muted)]">
                Рабочее время: понедельник–пятница, 10:00–19:00. По срочным вопросам возможна индивидуальная договорённость.
              </p>
              <a
                href="tel:+74954106600"
                className="btn-proxity-base btn-proxity-primary mt-4 inline-flex w-fit items-center justify-center px-4 py-2.5 text-sm"
              >
                Позвонить
              </a>
            </div>

            <div className="card-proxity p-4 sm:p-5 flex flex-col">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">Электронная почта</h2>
              <p className="mt-2 text-base font-medium text-[var(--text-primary)] break-all">info@bagrationlegal.ru</p>
              <p className="mt-1.5 text-xs leading-snug text-[var(--text-muted)]">
                Напишите описание ситуации и контактные данные — ответим в кратчайший срок.
              </p>
              <a
                href="mailto:info@bagrationlegal.ru"
                className="btn-proxity-base btn-proxity-secondary mt-4 inline-flex w-fit items-center justify-center px-4 py-2.5 text-sm"
              >
                Написать письмо
              </a>
            </div>

            <div className="card-proxity p-4 sm:p-5 flex flex-col sm:col-span-2 lg:col-span-1">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">Адрес коллегии</h2>
              <p className="mt-2 text-base font-medium text-[var(--text-primary)]">г. Москва, ул. Арбат, д. 35</p>
              <p className="mt-1.5 text-xs leading-snug text-[var(--text-muted)]">
                Приём осуществляется по предварительной записи.
              </p>
              <a
                href={YANDEX_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-proxity-base btn-proxity-secondary mt-4 inline-flex w-fit items-center justify-center px-4 py-2.5 text-sm"
              >
                Адрес на Яндекс.Картах
              </a>
            </div>
          </div>

          {/* Правая колонка: форма */}
          <div className="card-proxity p-4 sm:p-5 lg:p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Запрос консультации</h2>
            <p className="mt-1.5 text-sm leading-snug text-[var(--text-secondary)]">
              Оставьте краткое описание ситуации — мы свяжемся с вами для уточнения деталей и согласования формата консультации.
            </p>

            {formSubmitted ? (
              <p className="mt-6 text-sm text-[var(--text-secondary)]">
                Спасибо. Запрос отправлен — мы ответим в рабочее время.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-medium text-[var(--text-muted)] mb-1">Имя</label>
                  <input
                    id="c-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputBase}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-xs font-medium text-[var(--text-muted)] mb-1">Контактный телефон <span className="text-[var(--accent-primary)]">*</span></label>
                  <input
                    id="c-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className={`${inputBase} ${formErrors.phone ? "border-[var(--accent-primary)]" : ""}`}
                    placeholder="+7 (999) 000-00-00"
                  />
                  {formErrors.phone && <p className="mt-1 text-xs text-[var(--accent-primary)]">{formErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="c-topic" className="block text-xs font-medium text-[var(--text-muted)] mb-1">Тема обращения</label>
                  <select
                    id="c-topic"
                    value={form.topic}
                    onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                    className={`${inputBase} appearance-none bg-no-repeat bg-[length:12px] bg-[right_12px_center] pr-9`}
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")" }}
                  >
                    {TOPIC_OPTIONS.map((o) => (
                      <option key={o.value || "x"} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-desc" className="block text-xs font-medium text-[var(--text-muted)] mb-1">Краткое описание ситуации</label>
                  <textarea
                    id="c-desc"
                    value={form.description}
                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    rows={3}
                    className={`${inputBase} resize-none min-h-[80px]`}
                    placeholder="Опишите ситуацию в нескольких словах"
                  />
                </div>
                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                      className="mt-0.5 rounded border-[var(--card-border)] bg-transparent text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]/40"
                    />
                    <span className="text-xs text-[var(--text-secondary)] leading-snug">
                      Согласен на{" "}
                      <Link href="/consent" className="text-[var(--accent-primary)] hover:underline">обработку персональных данных</Link>
                      {" "}и с{" "}
                      <Link href="/privacy" className="text-[var(--accent-primary)] hover:underline">политикой конфиденциальности</Link>.
                    </span>
                  </label>
                  {formErrors.consent && <p className="mt-1 text-xs text-[var(--accent-primary)]">{formErrors.consent}</p>}
                </div>
                <button type="submit" className="btn-proxity-base btn-proxity-primary w-full py-2.5 text-sm font-medium mt-1">
                  Отправить запрос
                </button>
                <p className="text-[11px] leading-snug text-[var(--text-muted)]">
                  Ответ предоставляется в рабочее время. Информация, направленная через форму, защищена и конфиденциальна.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Кнопка «Банковские реквизиты» */}
        <div className="mt-6 flex justify-center sm:justify-start bg-transparent">
          <button
            type="button"
            onClick={() => setIsRequisitesOpen(true)}
            className="btn-proxity-base btn-proxity-secondary px-5 py-2.5 text-sm"
          >
            Банковские реквизиты
          </button>
        </div>
      </div>

      {/* Блок с картой */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14 bg-transparent">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">Как нас найти</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          Коллегия расположена в историческом центре Москвы. Приём осуществляется по предварительной записи. Возможны дистанционные консультации.
        </p>
        <div className="mt-4 card-proxity overflow-hidden p-0">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.5908%2C55.7521&z=19&pt=37.5908%2C55.7521%2Cpm2orgm&l=map"
            className="w-full h-[280px] sm:h-[320px] md:h-[360px] border-0 rounded-[var(--card-radius)]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Коллегия адвокатов «Багратион», Москва, ул. Арбат, 35"
          />
        </div>
      </section>

      {/* Поп-ап реквизитов: без тяжёлых теней и затемнения */}
      {isRequisitesOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40"
          onClick={() => setIsRequisitesOpen(false)}
          aria-modal="true"
          role="dialog"
          aria-label="Банковские реквизиты"
        >
          <div
            className="card-proxity relative w-full max-w-md p-5 z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsRequisitesOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-[var(--card-hover-bg)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Закрыть"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-base font-semibold text-[var(--text-primary)] pr-8">Банковские реквизиты</h3>
            <div className="mt-3 flex gap-3 flex-nowrap">
              <div className="flex-shrink-0">
                <div className="bg-white p-2 rounded">
                  {qrError ? (
                    <span className="block w-14 h-14 flex items-center justify-center text-[9px] text-[var(--text-muted)] text-center leading-tight">QR недоступен</span>
                  ) : (
                    <img
                      src="https://static.tildacdn.com/tild3432-3638-4161-b764-663439383466/__-__.svg"
                      alt="QR-код для оплаты"
                      className="w-14 h-14 object-contain"
                      onError={() => setQrError(true)}
                    />
                  )}
                </div>
              </div>
              <pre className="text-[10px] leading-tight text-[var(--text-secondary)] whitespace-pre-wrap font-sans flex-1 min-w-0">
                {REQUISITES_FULL}
              </pre>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--card-border)]">
              <button
                onClick={handleCopyRequisites}
                className="btn-proxity-base btn-proxity-secondary w-full py-2 text-xs"
              >
                Скопировать реквизиты
              </button>
              {copyToast && <p className="text-center text-[10px] text-[var(--accent-primary)] mt-1">Скопировано</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
