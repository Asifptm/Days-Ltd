import { DaysShell } from "@/components/layout/days-shell";

export default function DaysLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DaysShell>{children}</DaysShell>;
}
