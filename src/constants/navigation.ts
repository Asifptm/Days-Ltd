import { routes } from "@/constants/routes";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = NavItem & {
  icon: "x" | "instagram" | "discord";
};

export const footerLinks: NavItem[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: routes.contact },
];

export const socialLinks: SocialLink[] = [
  { label: "X", href: "#", icon: "x" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Discord", href: "#", icon: "discord" },
];
