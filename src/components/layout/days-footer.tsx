import Image from "next/image";
import Link from "next/link";
import {
  IconDiscord,
  IconInstagram,
  IconX,
} from "@/components/icons/social-icons";
import { Container } from "@/components/ui/container";
import { daysFooterColumns } from "@/constants/days-navigation";
import { socialLinks } from "@/constants/navigation";
import type { SocialLink } from "@/constants/navigation";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

type DaysFooterProps = {
  className?: string;
};

const socialIconMap = {
  x: IconX,
  instagram: IconInstagram,
  discord: IconDiscord,
} as const;

function DaysSocialIcon({ label, href, icon }: SocialLink) {
  const Icon = socialIconMap[icon];

  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2a2e] text-neutral-300 transition-colors hover:text-white"
    >
      <Icon />
    </a>
  );
}

function DaysFooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const className =
    "font-sans text-sm text-neutral-300 transition-colors hover:text-white";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export function DaysFooter({ className }: DaysFooterProps) {
  return (
    <footer className={cn("mt-auto", className)}>
      <section className="bg-white px-5 py-16 text-center sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Simulate tomorrow for decisions today
          </h2>
          <div className="mt-8 sm:mt-10">
            <Link
              href={routes.contact}
              className="inline-flex min-w-[200px] items-center justify-center bg-accent px-7 py-3.5 font-mono text-sm font-bold tracking-wide text-accent-foreground transition-colors hover:bg-accent/55"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      <div className="bg-[#121214] text-white">
        <Container>
          <div className="grid gap-10 pb-10 pt-12 md:grid-cols-4 md:gap-8 md:pb-12 md:pt-14 lg:pt-16">
            <div className="space-y-6 md:col-span-1">
              <Link
                href={routes.days}
                className="inline-block transition-opacity hover:opacity-80"
                aria-label="Days AI"
              >
                <Image
                  src="/Days_W.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-11 w-auto object-contain"
                  style={{ width: "auto" }}
                />
              </Link>
              <p className="max-w-xs font-sans text-sm leading-6 text-neutral-400 sm:text-[0.9375rem] sm:leading-7">
                Built to power the invisible intelligence behind enterprise
                systems.
              </p>
              <div className="flex items-center gap-3 pt-1">
                {socialLinks.map((item) => (
                  <DaysSocialIcon key={item.label} {...item} />
                ))}
              </div>
            </div>

            {daysFooterColumns.map((column) => (
              <div key={column.title} className="flex flex-col">
                <p className="font-sans text-xs font-bold tracking-[0.12em] text-neutral-400">
                  {column.title}
                </p>
                <nav className="mt-4 flex flex-col gap-3 md:mt-5">
                  {column.links.map((link, index) => (
                    <DaysFooterLink
                      key={`${column.title}-${link.label}-${index}`}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="border-t border-[#2d2d30] py-5 md:py-6">
            <p className="font-sans text-xs text-neutral-500 sm:text-[0.8125rem]">
              &copy; 2026 Raftel Technologies Pvt. Ltd. All Rights Reserved
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
