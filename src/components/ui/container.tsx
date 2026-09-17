import { cn } from "@/lib/utils";
import type { BaseProps } from "@/types";

type ContainerProps = BaseProps & {
  as?: "div" | "section" | "main";
};

export function Container({
  as: Component = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1080px] px-5 sm:px-8 md:px-12 lg:px-16",
        className,
      )}
    >
      {children}
    </Component>
  );
}
