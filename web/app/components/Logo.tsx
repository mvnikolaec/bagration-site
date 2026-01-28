import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-bagration.svg"
      alt="Багратион"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
}
