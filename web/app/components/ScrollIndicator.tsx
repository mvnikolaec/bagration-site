"use client";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleScroll}
        className="flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
        aria-label="Прокрутить вниз"
      >
        <svg
          className="h-8 w-6 sm:h-9 sm:w-6 md:h-10 md:w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Корпус мыши */}
          <path
            d="M12 2C7.58 2 4 5.58 4 10v8c0 4.42 3.58 8 8 8s8-3.58 8-8V10c0-4.42-3.58-8-8-8z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Колесико мыши - анимированное */}
          <rect
            x="10"
            y="11"
            width="4"
            height="5.6"
            rx="2"
            fill="currentColor"
            opacity="0.7"
            className="animate-scroll-wheel"
          />
        </svg>
      </button>
    </div>
  );
}
