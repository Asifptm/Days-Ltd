import { daysSectionBodyClass } from "@/components/days/days-problem-section";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const solutionHeadingClass =
  "font-serif text-[2.975rem] leading-[1.15] tracking-tight text-neutral-900 sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.1]";

const solutionMetrics = [
  {
    value: "100,000+",
    label: "Human Behaviour Data",
    valueClass: "text-[#2f5233]",
    labelClass: "text-[#2f5233]/75",
  
  },
  {
    value: "70%+",
    label: "Real World Similarity",
    valueClass: "text-[#3d8b7a]",
    labelClass: "text-[#3d8b7a]/80",

  },
  {
    value: "10x less",
    label: "Compute Cost (NCA)",
    valueClass: "text-[#50508a]",
    labelClass: "text-[#50508a]/75",
  },
] as const;

export function DaysSolutionSection() {
  return (
    <section className="border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-[920px]">
          <h2 className={solutionHeadingClass}>
            Our <span className="text-[#2f5233] italic">solution</span>
          </h2>
          <div className="mt-9 space-y-6 sm:mt-11 sm:space-y-7">
            <p className={`${daysSectionBodyClass} max-w-none`}>
              Days uses behavioural data, social dynamics, and real-world
              environmental factors to build simulations.
            </p>
            <p className={`${daysSectionBodyClass} max-w-none`}>
              Teams can explore ideas, evaluate decisions, and test scenarios
              within a digital representation of the market they operate in
              before taking them to the real world. This helps organisations
              keep decisions aligned with customers while adapting to a changing
              market.
            </p>
          </div>
        </div>

        <div
          className="mt-14 border-t border-neutral-200/70 pt-12 sm:mt-16 sm:pt-14"
          aria-label="Solution highlights"
        >
          <ul className="grid list-none gap-6 p-0 sm:gap-8 md:grid-cols-3 md:gap-5">
            {solutionMetrics.map((metric, index) => (
              <li
                key={metric.label}
                className={cn(
                  "md:px-2 lg:px-4",
                  index > 0 && "md:border-l md:border-neutral-200/80",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col items-center rounded-2xl px-5 py-8 text-center sm:px-6 sm:py-9",
                    metric,
                  )}
                >
                  <p
                    className={cn(
                      "font-sans text-[1.625rem] font-semibold tabular-nums leading-none tracking-tight sm:text-[1.75rem]",
                      metric.valueClass,
                    )}
                  >
                    {metric.value}
                  </p>
                  <p
                    className={cn(
                      "mt-3 max-w-[12rem] font-sans text-[0.8125rem] font-medium leading-snug sm:text-sm",
                      metric.labelClass,
                    )}
                  >
                    {metric.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
