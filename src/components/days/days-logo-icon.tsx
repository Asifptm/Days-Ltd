import { cn } from "@/lib/utils";

type DaysLogoIconProps = {
  className?: string;
};

export function DaysLogoIcon({ className }: DaysLogoIconProps) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#a3b18a]",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
        <path
          d="M8 6l4 12M16 6l-4 12"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
