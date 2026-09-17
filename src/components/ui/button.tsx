import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "btn-hover-primary bg-accent text-accent-foreground border border-transparent",
  secondary:
    "btn-hover-secondary bg-transparent text-foreground border border-foreground/20",
  ghost: "btn-hover-ghost bg-transparent text-foreground border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

const baseStyles =
  "btn-hover inline-flex items-center justify-center rounded-none font-sans font-bold tracking-tight disabled:pointer-events-none disabled:opacity-50";

function ButtonContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="btn-hover-fill" aria-hidden />
      <span className="relative z-10">{children}</span>
    </>
  );
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} className={styles}>
          <ButtonContent>{children}</ButtonContent>
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        <ButtonContent>{children}</ButtonContent>
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button type={type} className={styles} {...buttonProps}>
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}
