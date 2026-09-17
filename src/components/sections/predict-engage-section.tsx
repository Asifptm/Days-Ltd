import { StepCard } from "@/components/ui/step-card";
import { Container } from "@/components/ui/container";

const steps = [
  {
    title: "Make a prediction",
    description: "Choose what you think will happen.",
  },
  {
    title: "Engage with others",
    description: "Discuss about the event & prediction.",
  },
  {
    title: "Get collective view",
    description: "Find out who all got it right post event.",
  },
] as const;

export function PredictEngageSection() {
  return (
    <section className="pb-14 pt-4 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-8">
      <Container>
        <h2 className="text-center font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
          Predict. Engage. Create.
        </h2>

        <div className="mx-auto mt-10 grid max-w-[780px] justify-items-center gap-6 sm:mt-12 md:grid-cols-3 md:gap-5 lg:mt-14 lg:max-w-[840px] lg:gap-8">
          {steps.map((step) => (
            <StepCard
              key={step.title}
              title={step.title}
              description={step.description}
              className="w-full max-w-[220px] sm:max-w-[240px]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
