import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FormField } from "@/components/ui/form-field";

const perks = [
  "AfterDays official merchandise",
  "Tickets and passes for events",
  "Coupons and vouchers for brands",
  "Paid internships, role of your choice",
] as const;

export default function ContactPage() {
  return (
    <main className="flex-1 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="relative min-h-[420px] overflow-hidden p-8 sm:min-h-[460px] sm:p-10 lg:p-12">
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,#0f2a1c_0%,#2d4a1f_38%,#6b7a28_72%,#c8d836_100%)]"
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0px,rgba(255,255,255,0.07)_2px,transparent_2px,transparent_10px)]"
              aria-hidden
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div className="space-y-5">
                <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
                  Young oracle program
                </h1>
                <div className="space-y-3 font-sans text-sm leading-6 text-foreground/95 sm:text-base sm:leading-7">
                  <p>
                    Help build the next generation of predictors. Unlock rewards.
                  </p>
                  <p className="text-accent">
                    Open for college students around the world.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground sm:text-[1.65rem]">
                  Perks
                </h2>
                <ul className="space-y-2 font-sans text-sm leading-6 text-foreground/95 sm:text-base sm:leading-7">
                  {perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:pt-2">
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.56rem]">
              Register interest
            </h2>

            <form className="mt-10 space-y-8 sm:mt-12" action="#" method="post">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
                <FormField
                  id="firstName"
                  label="First name"
                  placeholder="Your first name"
                  autoComplete="given-name"
                />
                <FormField
                  id="lastName"
                  label="Last name"
                  placeholder="Your last name"
                  autoComplete="family-name"
                />
              </div>
              <FormField
                id="email"
                label="Email address"
                placeholder="Your email address"
                type="email"
                autoComplete="email"
              />
              <FormField
                id="phone"
                label="Contact number"
                placeholder="Your contact number"
                type="tel"
                autoComplete="tel"
              />
              <FormField
                id="campus"
                label="Campus"
                placeholder="Your campus"
                autoComplete="organization"
              />
              <div className="pt-2">
                <Button type="submit" size="lg">
                  Submit interest
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
