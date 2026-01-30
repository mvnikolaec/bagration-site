import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "btn-proxity-base inline-flex items-center justify-center rounded-[var(--btn-radius)] px-5 py-2.5 text-sm font-medium focus-visible:outline-none";
  const variants =
    variant === "primary"
      ? "btn-proxity-primary"
      : "btn-proxity-secondary";

  if (disabled) {
    return (
      <span
        role="button"
        aria-disabled="true"
        className={`${base} ${variants} cursor-not-allowed opacity-50 ${className}`.trim()}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
