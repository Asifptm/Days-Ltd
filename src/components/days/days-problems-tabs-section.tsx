"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useState } from "react";

type ProblemTab = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const tabs: ProblemTab[] = [
  {
    id: "product-ideation",
    label: "Product Ideation",
    imageSrc: "/pic1.png",
    imageAlt: "Person reviewing a foldable phone for product ideation",
    description:
      "Test product ideas on simulated customers. Spot user friction, predict feature adoption, and refine your prototype before you ship.",
  },
  {
    id: "marketing-branding",
    label: "Marketing & Branding",
    imageSrc: "/pic2.png",
    imageAlt: "Marketing and branding scenario",
    description:
      "Validate campaigns on simulated audiences. See what resonates, identify potential fatigue, and refine your messaging before you spend.",
  },
  {
    id: "behavioral-insights",
    label: "Behavioral Insights",
    imageSrc: "/pic3.png",
    imageAlt: "Behavioral insights visualization",
    description:
      "Uncover what drives consumer choices. Identify motivations, preferences, biases, and behavioral patterns that shape customer decisions.",
  },
  {
    id: "market-scenarios",
    label: "Market Scenarios",
    imageSrc: "/pic4.png",
    imageAlt: "Market scenarios visualization",
    description:
      "Simulate your business through market changes. Explore economic shifts, regulatory changes, competitors, and changing consumer preferences.",
  },
  {
    id: "pr-communication",
    label: "PR & Communication",
    imageSrc: "/pic5.png",
    imageAlt: "PR and communication scenario",
    description:
      "Compare business decisions before you commit. Explore different strategies, uncover downstream risks, and understand potential outcomes.",
  },
];

export function DaysProblemsTabsSection() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section className="border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1180px]">
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(220px,0.95fr)_minmax(0,1.7fr)] lg:gap-12 xl:gap-14">
          <div className="flex flex-col">
            <h2 className="font-serif text-[1.65rem] leading-snug tracking-tight text-neutral-900 sm:text-[1.85rem] lg:text-[2rem] lg:leading-[1.2]">
              Solve real world problems
            </h2>

            <ul
              className="mt-8 list-none p-0 sm:mt-10"
              role="tablist"
              aria-label="Problem areas"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeId;

                return (
                  <li key={tab.id} className="border-b border-neutral-200">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(tab.id)}
                      className={cn(
                        "w-full py-4 text-left font-sans text-[0.9375rem] leading-snug transition-colors sm:py-5 sm:text-base",
                        isActive
                          ? "bg-gradient-to-r from-[#d8eadc] via-[#e8f3ea] to-transparent font-medium text-neutral-900"
                          : "bg-transparent text-neutral-800 hover:bg-neutral-50",
                      )}
                    >
                      <span className="block px-3 sm:px-4">{tab.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            key={activeTab.id}
            className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-neutral-200 animate-fade-in sm:min-h-[400px] sm:rounded-[2rem] lg:min-h-[480px]"
            role="tabpanel"
            aria-label={activeTab.label}
          >
            {activeTab.imageSrc ? (
              <Image
                src={activeTab.imageSrc}
                alt={activeTab.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority={activeTab.id === tabs[0].id}
              />
            ) : null}

            <div className="absolute inset-x-4 bottom-4 max-w-md rounded-2xl border border-white/50 bg-white/55 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[22rem] sm:p-6 lg:max-w-[24rem]">
              <p className="font-sans text-[0.8125rem] leading-relaxed text-neutral-900 sm:text-sm sm:leading-6">
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
