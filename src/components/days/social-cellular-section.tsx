import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const accentTeal = "text-[#3d8b7a]";

const gridColors = [
  "bg-[#c9b8e8]",
  "bg-[#5b3d9a]",
  "bg-[#5b3d9a]",
  "bg-[#c9b8e8]",
  "bg-[#5b3d9a]",
  "bg-[#c9b8e8]",
  "bg-[#dfe8f5]",
  "bg-[#5b3d9a]",
  "bg-[#c9b8e8]",
  "bg-[#5b3d9a]",
  "bg-[#5b3d9a]",
  "bg-[#c9b8e8]",
  "bg-[#dfe8f5]",
  "bg-[#c9b8e8]",
  "bg-[#5b3d9a]",
  "bg-[#c9b8e8]",
] as const;

function SbseDocumentGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] pt-4" aria-hidden>
      <div className="absolute left-4 top-0 h-[88%] w-[92%] rounded-md border border-neutral-200 bg-white shadow-sm" />
      <div className="relative rounded-md border border-neutral-200 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6">
        <p className="font-sans text-3xl font-bold tracking-tight text-[#3b5bcc] sm:text-[2rem]">
          SBSE
        </p>
        <p className="mt-1 font-sans text-[0.7rem] font-medium leading-snug text-[#3b5bcc] sm:text-xs">
          Sociocellular Behavioral Simulation Engine
        </p>
        <div className="mt-5 space-y-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 rounded-full bg-neutral-200/90",
                index % 3 === 0 ? "w-[92%]" : index % 2 === 0 ? "w-[78%]" : "w-[85%]",
              )}
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-8 rounded border border-neutral-200 bg-neutral-50" />
          <div className="h-8 rounded border border-neutral-200 bg-neutral-50" />
          <div className="h-8 rounded border border-neutral-200 bg-neutral-50" />
        </div>
      </div>
    </div>
  );
}

function CellularGridGraphic() {
  return (
    <div
      className="mx-auto w-full max-w-[280px] rounded-2xl bg-[#ececef] p-4 sm:p-5"
      aria-hidden
    >
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {gridColors.map((color, index) => (
          <div
            key={index}
            className={cn("aspect-square rounded-lg sm:rounded-xl", color)}
          />
        ))}
      </div>
    </div>
  );
}

export function SocialCellularSection() {
  return (
    <section className="border-y border-neutral-200 bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-10 lg:gap-14">
          <p className="shrink-0 font-sans text-xl text-neutral-400 sm:text-2xl">
            2026
          </p>
          <h2 className="font-serif text-3xl leading-snug text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
            Introduced social cellular model
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10 lg:mt-14 lg:gap-16">
          <div className="flex flex-col">
            <p className={`font-sans text-sm font-medium sm:text-[0.9375rem] ${accentTeal}`}>
              Research (Ongoing)
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-6 text-neutral-900 sm:text-[0.9375rem] sm:leading-7">
              A low-compute architecture inspired by cell biology for hosting
              multiple individual actors, with each actor responding to a
              limited set of events.
            </p>
            <div className="mt-10 flex flex-1 items-end">
              <SbseDocumentGraphic />
            </div>
          </div>

          <div className="flex flex-col">
            <p className={`font-sans text-sm font-medium sm:text-[0.9375rem] ${accentTeal}`}>
              Application in Days
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-6 text-neutral-900 sm:text-[0.9375rem] sm:leading-7">
              Observe social dynamics, including the propagation and spread of
              information, across populations of up to 5,000 people in seconds
              using low compute.
            </p>
            <div className="mt-10 flex flex-1 items-end">
              <CellularGridGraphic />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
