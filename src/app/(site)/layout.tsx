import { SiteShell } from "@/components/layout/site-shell";
import type { BaseProps } from "@/types";

export default function SiteLayout({ children }: BaseProps) {
  return <SiteShell>{children}</SiteShell>;
}
