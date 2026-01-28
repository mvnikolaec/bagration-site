import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  title,
  description,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {(title || description) && (
          <div className="mb-12 max-w-3xl">
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-[var(--text-secondary)] sm:text-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
