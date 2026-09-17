import { Container } from "@/components/ui/container";

export const daysSectionHeadingClass =
  "font-sans text-xl font-medium tracking-tight text-neutral-900 sm:text-[1.375rem]";

export const daysSectionBodyClass =
  "max-w-[920px] font-sans text-base leading-[1.65] text-neutral-700 sm:text-[1.0625rem] sm:leading-[1.7]";

/** Full-bleed section shell — content anchored to the top with room below (matches design frames). */
const sectionShellClass =
  "border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-24";

const sectionMinHeightClass =
  "min-h-[min(560px,85vh)] sm:min-h-[600px] lg:min-h-[640px]";

export function DaysProblemSection() {
  return (
    <section className={`${sectionShellClass} ${sectionMinHeightClass}`}>
      <Container className="flex h-full flex-col justify-start">
        <h2 className={daysSectionHeadingClass}>Problem</h2>
        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          <p className={daysSectionBodyClass}>
            Customers change. Competitors change. Technology, culture, and
            economic conditions change.
          </p>
          <p className={daysSectionBodyClass}>
            But organizations still rely on research, historical data, and
            real-world experiments to understand what might happen next. These
            approaches can be slow, expensive, and difficult to scale, making it
            harder for every decision to stay aligned with customers.
          </p>
        </div>
      </Container>
    </section>
  );
}
