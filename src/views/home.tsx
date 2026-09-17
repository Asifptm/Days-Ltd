import Image from "next/image";
import Link from "next/link";
import { PredictEngageSection } from "@/components/sections/predict-engage-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

function FeatureRow({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: FeatureRowProps) {
  const imageOnRight = imagePosition === "right";

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden bg-feature-media",
          imageOnRight && "lg:order-2",
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div
        className={cn(
          "flex flex-col justify-center lg:py-4",
          imageOnRight && "lg:order-1",
        )}
      >
        <h2 className="font-serif text-[1.65rem] leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <Container>
          <div className="max-w-2xl lg:max-w-[640px]">
            <h1 className="animate-fade-up font-serif text-[1.75rem] leading-[1.14] tracking-[0.03em] text-foreground sm:text-[2.25rem] sm:tracking-[0.035em] lg:text-[2.65rem]">
              Everyone has a prediction.{" "}
              <span className="text-highlight">What&apos;s Yours?</span>
            </h1>

            <p className="animate-fade-up delay-100 mt-5 max-w-md text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7">
              Make your call on what happens next. See what others think, watch
              the future unfold, and find out who saw it coming.
            </p>

            <div className="animate-fade-up delay-200 mt-7 sm:mt-8">
              <Button href={routes.homeStart} size="lg">
                Start predicting
              </Button>
            </div>
          </div>

          <div className="animate-rise-soft delay-300 mt-10 sm:mt-12 lg:mt-14">
            <div className="relative h-[150px] w-full overflow-hidden sm:h-[190px] md:h-[220px] lg:h-[240px]">
              <Image
                src="/hero-hands.png"
                alt="Hands painted in bright colors reaching upward"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 960px"
              />
            </div>
          </div>
        </Container>
      </section>

      <PredictEngageSection />

      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="bg-feature-section py-14 sm:py-16 lg:py-20">
          <Container>
            <FeatureRow
              title="Private markets for close friends"
              description="Trade and discuss matters important amongst people within your circle"
              imageSrc="https://picsum.photos/seed/afterhours-friends/960/960"
              imageAlt="Placeholder illustration"
            />
          </Container>
        </div>
        <div className="h-2 bg-black sm:h-2.5" aria-hidden />
        <div className="bg-feature-section py-14 sm:py-16 lg:py-20">
          <Container>
            <FeatureRow
              title="Not a real money trading platform"
              description="Make predictions with play money—keep the stakes social, not financial."
              imageSrc="https://picsum.photos/seed/afterhours-play/960/960"
              imageAlt="Placeholder illustration"
              imagePosition="right"
            />
          </Container>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="bg-feature-section py-14 sm:py-16 lg:py-20">
          <Container>
            <FeatureRow
              title="Create markets. Build your community."
              description="Creator program with real rewards "
              imageSrc="/speaker.png"
              imageAlt="Placeholder illustration"
            />
          </Container>
        </div>
        <div className="h-2 bg-black sm:h-2.5" aria-hidden />
        <div className="bg-feature-section py-14 sm:py-16 lg:py-20">
          <Container>
            <FeatureRow
              title="Stay competitively curious together."
              description="Never miss important events and news."
              imageSrc="/image23.png"
              imageAlt="Placeholder illustration"
              imagePosition="right"
            />
          </Container>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="relative h-[150px] w-full overflow-hidden sm:h-[190px] md:h-[220px] lg:h-[240px]">
            <Image
              src="/oracle-orb.png"
              alt="A hand holding a soft glowing orb of light"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1080px) 100vw, 960px"
            />
          </div>

          <div className="mt-8 max-w-xl sm:mt-10 lg:mt-12">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Young oracle program
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Think you&apos;re good at seeing what&apos;s coming? Help build the
              next generation of predictors. Unlock perks and rewards.{" "}
              <Link
                href={routes.contact}
                className="text-highlight underline-offset-4 transition-colors hover:underline"
              >
                See how it works
              </Link>
              .
            </p>
            <div className="mt-7 sm:mt-8">
              <Button href={routes.contact} size="lg">
                Become an oracle
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="start" className="py-20 sm:py-24 lg:py-28">
        <Container className="flex flex-col items-center text-center">
          <h2 className="max-w-xl font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          The future is uncertain. That's what makes it fun.
          </h2>
          <div className="mt-8 sm:mt-10">
            <Button href={routes.homeStart} size="lg">
              Start predicting
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
