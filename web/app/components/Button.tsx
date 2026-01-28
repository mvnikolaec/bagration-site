import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)]"
      : "border border-[var(--border-subtle)] bg-transparent text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-hover)]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`.trim()}>
      {children}
    </Link>
  );
}
