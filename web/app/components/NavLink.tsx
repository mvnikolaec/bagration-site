"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

export default function NavLink({
  href,
  label,
  isActive,
  className = "",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`link-proxity relative px-4 py-2 text-sm rounded-[var(--btn-radius)] focus-visible:outline-none ${
        isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
      } ${className}`.trim()}
      aria-current={isActive ? "page" : undefined}
    >
      <span
        className={
          isActive
            ? "relative inline-block after:absolute after:-bottom-[6px] after:left-0 after:h-[1px] after:w-full after:bg-[var(--text-primary)] after:content-[''] after:transition-colors hover:after:bg-[var(--accent-primary)]"
            : ""
        }
      >
        {label}
      </span>
    </Link>
  );
}
