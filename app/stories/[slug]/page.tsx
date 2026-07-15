import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { stories } from "@/data/content";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const story = stories.find((s) => s.slug === params.slug);
  return { title: story ? story.title : "Story" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) return notFound();

  return (
    <article className="bg-cream py-20 md:py-28">
      <div className="container-content max-w-3xl">
        <Reveal>
          <SectionLabel>{story.category}</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
            {story.title}
          </h1>
          <p className="mt-3 text-[13px] uppercase tracking-wide text-muted-blue">{story.date}</p>
        </Reveal>

        <Reveal className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl3 border border-border shadow-soft">
          <Image src={story.image} alt={story.title} fill className="object-cover" />
        </Reveal>

        <Reveal className="prose-content mt-10 flex flex-col gap-5 text-[16px] leading-relaxed text-body">
          {/* PLACEHOLDER article body — replace with the real story text */}
          <p>{story.excerpt}</p>
          <p>
            This section is a placeholder for the full story. Replace this text with a detailed,
            first-hand account of the event, partnership, or milestone described above.
          </p>
          <p>
            Consider including quotes from volunteers, photos from the day, and specific figures
            once they've been verified.
          </p>
        </Reveal>
      </div>
    </article>
  );
}
