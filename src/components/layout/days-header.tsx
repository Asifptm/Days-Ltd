import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type DaysHeaderProps = {
  className?: string;
};

export function DaysHeader({ className }: DaysHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-neutral-200/80 bg-white",
        className,
      )}
    >
      <Container className="flex h-16 items-center sm:h-[4.5rem]">
        <Link
          href={routes.days}
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label={siteConfig.name}
        >
          <Image
            src="/days-logo.png"
            alt=""
            width={56}
            height={56}
            className="h-10 w-auto object-contain sm:h-11"
            style={{ width: "auto" }}
            priority
          />
        </Link>
      </Container>
    </header>
  );
}
