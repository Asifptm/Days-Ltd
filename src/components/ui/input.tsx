import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "w-full border-b border-foreground/25 bg-transparent py-2.5 font-sans text-sm text-foreground placeholder:text-muted/80 outline-none transition-colors focus:border-foreground/60",
        className,
      )}
      {...props}
    />
  );
}
