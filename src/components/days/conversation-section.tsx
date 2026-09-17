import Image from "next/image";
import { Container } from "@/components/ui/container";

const posts = [
  {
    date: "August 30, 2026",
    title: "Driving customer obsession",
    imageSrc: "https://picsum.photos/seed/days-convo-1/640/480",
  },
  {
    date: "August 30, 2026",
    title: "Driving customer obsession",
    imageSrc: "https://picsum.photos/seed/days-convo-2/640/480",
  },
  {
    date: "August 30, 2026",
    title: "Driving customer obsession",
    imageSrc: "https://picsum.photos/seed/days-convo-3/640/480",
  },
] as const;

function ConversationCard({
  date,
  title,
  imageSrc,
}: {
  date: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <article className="flex w-full max-w-[280px] flex-col overflow-hidden rounded-2xl sm:max-w-none">
      <div className="relative aspect-[4/3] w-full bg-[#bdbdbd]">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 280px, 33vw"
        />
      </div>
      <div className="bg-[#e6f0f9] px-5 py-5 sm:px-6 sm:py-6">
        <p className="font-sans text-xs text-[#757575] sm:text-sm">{date}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-[#2c5e9e] sm:text-[1.35rem]">
          {title}
        </h3>
      </div>
    </article>
  );
}

export function ConversationSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <h2 className="text-center font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
          Conversation around building better Days
        </h2>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 justify-items-center gap-6 sm:mt-12 md:max-w-none md:grid-cols-3 md:gap-5 lg:mt-14 lg:gap-6">
          {posts.map((post, index) => (
            <ConversationCard
              key={`${post.title}-${index}`}
              date={post.date}
              title={post.title}
              imageSrc={post.imageSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
