import { DaysFooter } from "@/components/layout/days-footer";
import { DaysHeader } from "@/components/layout/days-header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import type { BaseProps } from "@/types";

export function DaysShell({ children }: BaseProps) {
  return (
    <>
      <ScrollToTop />
      <DaysHeader />
      <div className="flex flex-1 flex-col">{children}</div>
      <DaysFooter />
    </>
  );
}
