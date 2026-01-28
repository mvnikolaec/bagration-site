import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(66,200,245,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]";
  
  const variants = {
    primary:
      "bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] shadow-[var(--shadow-primary)]",
    secondary:
      "bg-white/5 border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-white/8 hover:border-[var(--accent-primary)]/30 hover:text-[var(--accent-primary)]",
    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-white/5",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
