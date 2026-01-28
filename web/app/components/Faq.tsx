"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  className?: string;
}

export default function Faq({ items, className = "" }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--bg-hover)] transition-colors"
          >
            <span className="font-medium text-[var(--text-primary)] pr-8">{item.question}</span>
            <span
              className={`text-[var(--text-secondary)] text-xl transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? "rotate-180 text-[var(--accent-primary)]" : ""
              }`}
            >
              ↓
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-[var(--text-secondary)] leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
