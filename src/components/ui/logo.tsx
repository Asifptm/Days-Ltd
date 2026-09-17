import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Reserved for light surfaces; homepage uses Afterdays_B on dark header/footer. */
  variant?: "onLight" | "onDark";
};

const LOGO_SRC = "/Afterdays_W.png";

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-80",
        className,
      )}
      aria-label={siteConfig.name}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={160}
        height={48}
        className="h-8 w-auto object-contain object-left sm:h-9"
        style={{ width: "auto" }}
        priority
      />
    </Link>
  );
}
