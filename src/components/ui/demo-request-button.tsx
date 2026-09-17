import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type DemoRequestButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DemoRequestButton({
  className,
  type = "button",
  children = "Request a demo",
  ...props
}: DemoRequestButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-w-[200px] items-center justify-center bg-accent px-7 py-3.5 font-mono text-sm font-bold tracking-wide text-accent-foreground transition-colors hover:bg-accent/55",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
