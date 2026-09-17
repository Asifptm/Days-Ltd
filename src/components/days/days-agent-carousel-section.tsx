"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";

type AgentSlide = {
  id: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
};

const slides: AgentSlide[] = [
  {
    id: "banner-1",
    caption: "Each agent represents a real person",
    imageSrc: "/banner1.png",
    imageAlt: "Agent profile visualization",
  },
  {
    id: "banner-2",
    caption: "Build a population of any size",
    imageSrc: "/banner2.png",
    imageAlt: "Behavioural signal visualization",
  },
  {
    id: "banner-3",
    caption: "Introduce the variables that matter",
    imageSrc: "/banner3.png",
    imageAlt: "Market simulation preview",
  },
  {
    id: "banner-4",
    caption: "Observe how agents respond to change",
    imageSrc: "/banner4.png",
    imageAlt: "Market simulation preview — slide 4",
  },
  {
    id: "banner-5",
    caption: "Get individual and population responses",
    imageSrc: "/banner5.png",
    imageAlt: "Market simulation preview — slide 5",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="text-neutral-600"
    >
      <path
        d={
          direction === "left" ? "M9 2L4 7l5 5" : "M5 2l5 5-5 5"
        }
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DaysAgentCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const goPrev = useCallback(() => {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  }, []);

  return (
    <section className="border-t border-neutral-200 bg-white py-20 sm:py-24 lg:py-32">
      <Container className="max-w-[1240px]">
        <div
          className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#c9c9c9] px-6 py-12 sm:min-h-[420px] sm:rounded-[2.25rem] sm:px-10 sm:py-16 lg:min-h-[520px] lg:rounded-[2.5rem]"
          aria-live="polite"
          aria-atomic
        >
          <Image
            key={slide.id}
            src={slide.imageSrc}
            alt={slide.imageAlt}
            width={480}
            height={480}
            className="h-auto max-h-[240px] w-auto max-w-full object-contain animate-fade-in sm:max-h-[320px] lg:max-h-[400px]"
            style={{ width: "auto", height: "auto" }}
            sizes="(max-width: 640px) 80vw, 480px"
            priority={activeIndex === 0}
            unoptimized
          />
        </div>

        <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9c9c9] transition-colors hover:bg-[#bdbdbd] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            aria-label="Previous slide"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#c9c9c9] px-5 py-3 sm:min-h-14 sm:px-8 lg:min-h-[3.75rem]">
            <p className="text-center font-sans text-sm font-medium leading-snug text-neutral-700 sm:text-base lg:text-lg">
              {slide.caption}
            </p>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9c9c9] transition-colors hover:bg-[#bdbdbd] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            aria-label="Next slide"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2 sm:mt-6" aria-hidden>
          {slides.map((item, index) => (
            <span
              key={item.id}
              className={cn(
                "h-2 rounded-full transition-all",
                index === activeIndex
                  ? "w-8 bg-neutral-500"
                  : "w-2 bg-neutral-300",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
