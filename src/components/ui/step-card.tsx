import Image from "next/image";
import { cn } from "@/lib/utils";

export type StepCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function StepCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  className,
}: StepCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-[260px] flex-col overflow-hidden rounded-2xl sm:min-h-[280px] lg:min-h-[300px]",
        className,
      )}
    >
      <div className="relative min-h-[150px] flex-[7] bg-[#bdbdbd] sm:min-h-[165px] lg:min-h-[180px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
      </div>
      <div className="flex flex-[3] flex-col justify-center bg-[#dceefa] px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="font-serif text-2xl leading-snug text-[#3d7ab8] sm:text-[1.65rem] lg:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-6 text-[#4a4a4a] sm:text-[0.9375rem] sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
}
