import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import type { BaseProps } from "@/types";

export function SiteShell({ children }: BaseProps) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </>
  );
}
