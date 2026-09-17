"use client";

import { DaysLogoIcon } from "@/components/days/days-logo-icon";
import { cn } from "@/lib/utils";
import { useState } from "react";

const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;

export function DaySelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {dayLabels.map((label, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={label}
            type="button"
            aria-label={`Select ${label}`}
            aria-pressed={isActive}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "rounded-2xl p-2 transition-all",
              isActive
                ? "bg-[#ececec] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                : "bg-transparent hover:bg-[#ececec]/60",
            )}
          >
            <DaysLogoIcon />
            <span className="sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
