import Link from "next/link";
import {
  IconDiscord,
  IconInstagram,
  IconX,
} from "@/components/icons/social-icons";
import { footerLinks, socialLinks } from "@/constants/navigation";
import type { NavItem } from "@/constants/navigation";
import { isInternalHref } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

const socialIconMap = {
  x: IconX,
  instagram: IconInstagram,
  discord: IconDiscord,
} as const;

function SocialIcon({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: keyof typeof socialIconMap;
}) {
  const Icon = socialIconMap[icon];

  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
    >
      <Icon />
    </a>
  );
}

function FooterLink({ href, label }: NavItem) {
  const className =
    "text-muted transition-colors hover:text-foreground";

  if (isInternalHref(href)) {
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

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-surface pt-16 pb-8 text-sm", className)}>
      <Container>
        <div className="border-b border-foreground/10 pb-8">
          <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-sm space-y-5">
              <Logo />
              <p className="leading-relaxed text-muted">
                {siteConfig.description}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <SocialIcon
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>

            <nav className="flex flex-col gap-3 sm:pb-0.5">
              {footerLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted/70">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
