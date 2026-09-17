import type { Metadata } from "next";

export const siteConfig = {
  name: "Afterdays",
  description:
    "Private prediction markets for close friends. Stay competitively curious together.",
  url: "https://example.com",
} as const;

/** Tab / PWA icons — used on every route via root layout and page metadata. */
export const siteIcons: NonNullable<Metadata["icons"]> = {
  icon: [{ url: "/Icon_B.png", type: "image/png" }],
  shortcut: "/Icon_B.png",
  apple: [{ url: "/Icon_B.png", type: "image/png" }],
};
