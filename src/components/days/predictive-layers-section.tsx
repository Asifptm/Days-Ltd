"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useState } from "react";

const layers = [
  {
    id: "01",
    title: "AI Layer",
    description:
      "LLM-based interaction layer for simple communication through natural language",
  },
  {
    id: "02",
    title: "Knowledge Layer",
    description:
      "Contextual layer with organisation data, strategies, stakeholder dynamics,",
  },
  {
    id: "03",
    title: "Behaviour Layer",
    description:
      "Multi-agent system based on real-world human behaviour data, event-response patterns, and social dynamics",
  },
  {
    id: "04",
    title: "Environment Layer",
    description:
      "Computational model of real-world trends, culture, economic outlook, and other external factors",
  },
] as const;

export function PredictiveLayersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)_minmax(0,1fr)] lg:gap-6 xl:gap-10">
          <div className="flex flex-col justify-start">
            <h1 className="font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Predictive, not retrospective.
            </h1>
            <p className="mt-6 max-w-md font-sans text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7 lg:mt-8">
              We&apos;ve reimagined customer relationships, helping businesses
              anticipate what&apos;s next and act with confidence.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[#1a1a1b] sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/Frame 257.png"
              alt="Isometric layers diagram"
              fill
              className="object-contain object-center p-6 sm:p-8"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>

          <div className="overflow-hidden rounded-sm bg-[#eef3f7] lg:min-h-[520px]">
            <ul className="divide-y divide-neutral-300/80">
              {layers.map((layer, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={layer.id}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "relative w-full px-5 py-5 text-left transition-colors sm:px-6 sm:py-6",
                        isActive
                          ? "bg-[#dfeaf5] pt-6"
                          : "bg-transparent hover:bg-[#e8eef4]",
                      )}
                    >
                      {isActive ? (
                        <span
                          className="absolute inset-x-0 top-0 h-0.5 bg-[#4a7ab8]"
                          aria-hidden
                        />
                      ) : null}
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-sans text-sm font-bold text-neutral-900 sm:text-base">
                          {layer.title}
                        </p>
                        <span className="shrink-0 font-sans text-xs font-medium text-neutral-500 sm:text-sm">
                          {layer.id}
                        </span>
                      </div>
                      <p className="mt-3 font-sans text-xs leading-5 text-neutral-600 sm:text-sm sm:leading-6">
                        {layer.description}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
