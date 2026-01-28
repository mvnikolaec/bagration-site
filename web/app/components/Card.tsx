import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  href,
  className = "",
  onClick,
}: CardProps) {
  const baseStyles =
    "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] p-6 sm:p-8 transition-all duration-200 hover:bg-[var(--bg-hover)] hover:border-white/20 hover:shadow-lg hover:shadow-[0_0_20px_rgba(47,102,255,0.1)] group";

  const styles = `${baseStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={`${styles} text-left w-full`}>
        {children}
      </button>
    );
  }

  return <div className={styles}>{children}</div>;
}
