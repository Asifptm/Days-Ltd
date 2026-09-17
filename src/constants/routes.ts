// App Router routes: src/app/**/page.tsx. Screen UI: src/views (not src/pages).
export const routes = {
  home: "/",
  days: "/",
  contact: "/contact",
  homeStart: "/#start",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

export function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}
