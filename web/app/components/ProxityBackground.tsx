"use client";

export default function ProxityBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Базовый градиент фона */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      
      {/* Пятно 1 - Teal (слева сверху) */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: `radial-gradient(circle, var(--teal-spot) 0%, transparent 70%)`,
          animation: "drift-1 18s ease-in-out infinite",
        }}
      />
      
      {/* Пятно 2 - Blue (справа сверху) */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: `radial-gradient(circle, var(--blue-spot) 0%, transparent 70%)`,
          animation: "drift-2 20s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />
      
      {/* Пятно 3 - Cyan (в центре/ниже) */}
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-[110px]"
        style={{
          background: `radial-gradient(circle, var(--cyan-spot) 0%, transparent 70%)`,
          animation: "drift-3 15s ease-in-out infinite",
          animationDelay: "5s",
        }}
      />
      
      {/* Дополнительное мягкое пятно для глубины */}
      <div
        className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full opacity-15 blur-[90px]"
        style={{
          background: `radial-gradient(circle, var(--teal-spot) 0%, transparent 70%)`,
          animation: "drift-1 22s ease-in-out infinite reverse",
          animationDelay: "7s",
        }}
      />
    </div>
  );
}
