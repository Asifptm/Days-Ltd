import { DaysShell } from "@/components/layout/days-shell";
import type { BaseProps } from "@/types";

export default function DaysLayout({ children }: BaseProps) {
  return <DaysShell>{children}</DaysShell>;
}
