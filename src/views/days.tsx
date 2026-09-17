import Image from "next/image";
import { DaysAgentCarouselSection } from "@/components/days/days-agent-carousel-section";
import { DaysProblemSection } from "@/components/days/days-problem-section";
import { DaysProblemsTabsSection } from "@/components/days/days-problems-tabs-section";
import { DaysSolutionSection } from "@/components/days/days-solution-section";
import { PredictiveLayersSection } from "@/components/days/predictive-layers-section";
import { SocialCellularSection } from "@/components/days/social-cellular-section";
import { DemoRequestButton } from "@/components/ui/demo-request-button";
import { Container } from "@/components/ui/container";

export default function DaysPage() {
  return (
    <main className="flex-1 bg-white text-neutral-900">
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="max-w-xl space-y-6">
              <h1 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                Platform where{" "}
                <span className="text-[#2f5233]">people centric decisions</span>{" "}
                are made
              </h1>
              <p className="max-w-md font-sans text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                Simulate your customers, market, and business environment to
                explore decisions before they happen.
              </p>

              <div className="pt-2">
                <DemoRequestButton />
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-lg justify-self-center overflow-hidden bg-neutral-100 lg:max-w-none">
              <Image
                src="/people2.png"
                alt="People in focus across an urban street scene"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <DaysProblemSection />

      <DaysSolutionSection />

      <DaysAgentCarouselSection />

      <DaysProblemsTabsSection />

      <PredictiveLayersSection />

      <SocialCellularSection />
    </main>
  );
}
