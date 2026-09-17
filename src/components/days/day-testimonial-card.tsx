import { DaysLogoIcon } from "@/components/days/days-logo-icon";
import { cn } from "@/lib/utils";

type DayTestimonialCardProps = {
  quote: string;
  name: string;
  designation: string;
  className?: string;
};

export function DayTestimonialCard({
  quote,
  name,
  designation,
  className,
}: DayTestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-[320px] flex-col rounded-2xl bg-[linear-gradient(180deg,#e3f2fd_0%,#eef2f4_55%,#f4f4f4_100%)] p-6 sm:min-h-[340px] sm:p-7",
        className,
      )}
    >
      <DaysLogoIcon />
      <p className="mt-5 flex-1 font-sans text-sm leading-6 text-[#5c7c99] sm:text-[0.9375rem] sm:leading-7">
        {quote}
      </p>
      <div className="mt-6">
        <p className="font-serif text-xl text-[#4a6fa5] sm:text-[1.35rem]">
          {name}
        </p>
        <p className="mt-1 font-sans text-sm text-[#8a8a8a]">{designation}</p>
      </div>
    </article>
  );
}
