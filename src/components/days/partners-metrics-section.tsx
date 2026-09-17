import Image from "next/image";
import { Container } from "@/components/ui/container";

type PartnerColumn = {
  logoSrc: string;
  logoAlt: string;
  partOf: string;
  stat: string;
  statLabel: string;
};

const BADGE_W = 280;
const BADGE_H = 68;

function PartnerBadge({
  logoSrc,
  logoAlt,
  partOf,
}: {
  logoSrc: string;
  logoAlt: string;
  partOf: string;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-3.5 rounded-lg bg-[#2d9474] px-4 py-3"
      style={{ width: BADGE_W, height: BADGE_H }}
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md bg-white">
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          className="object-contain p-1"
          sizes="44px"
        />
      </div>
      <p className="min-w-0 flex-1 font-sans text-sm leading-snug text-white">
        <span className="block text-[0.6875rem] font-normal text-white/90">
          Part of
        </span>
        <span className="line-clamp-2 font-semibold leading-tight">
          {partOf}
        </span>
      </p>
    </div>
  );
}

const columns: PartnerColumn[] = [
  {
    logoSrc: "/partner-logo-iimk-live.png",
    logoAlt: "IIM Kozhikode LIVE",
    partOf: "IIMK LIVE",
    stat: "100,000+",
    statLabel: "Human Behaviour Data",
  },
  {
    logoSrc: "/partner-logo-ksum.png",
    logoAlt: "Kerala Startup Mission",
    partOf: "KSUM",
    stat: "60-70%",
    statLabel: "Real World Similarity",
  },
  {
    logoSrc: "/partner-logo-nvidia.png",
    logoAlt: "NVIDIA Inception Program",
    partOf: "Inception Program",
    stat: "10x less",
    statLabel: "Compute Cost (NCA)",
  },
];

export function PartnersMetricsSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <Container>
        <div
          className="relative mx-auto flex w-full max-w-[1040px] flex-col justify-between overflow-hidden rounded-xl bg-[#e6f4ea] px-8 py-10 sm:min-h-[400px] sm:px-12 sm:py-12 md:min-h-[420px] lg:min-h-[440px] lg:px-14 lg:py-14"
        >
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/90"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            {columns.map((column) => (
              <PartnerBadge
                key={column.partOf}
                logoSrc={column.logoSrc}
                logoAlt={column.logoAlt}
                partOf={column.partOf}
              />
            ))}
          </div>

          <div className="relative mt-16 grid grid-cols-1 justify-items-center gap-10 sm:mt-20 md:mt-auto md:grid-cols-3 md:gap-8 lg:gap-10 lg:pt-16">
            {columns.map((column) => (
              <div
                key={`${column.partOf}-stat`}
                className="text-center"
                style={{ width: BADGE_W }}
              >
                <p className="font-sans text-[1.75rem] font-bold leading-none tracking-tight text-[#555555] sm:text-[1.875rem] lg:text-[2rem]">
                  {column.stat}
                </p>
                <p className="mt-2.5 font-sans text-sm leading-snug text-[#555555] sm:text-[0.9375rem]">
                  {column.statLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
