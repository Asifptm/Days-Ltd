import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("absolute inset-x-0 top-0 z-50 pt-6", className)}>
      <Container>
        <Logo variant="onDark" />
      </Container>
    </header>
  );
}
