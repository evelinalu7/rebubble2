import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { stories } from "@/data/content";

export const metadata: Metadata = {
  title: "Stories and Updates",
  description: "Updates from our workshops, shelter partnerships, and oil collection program in Vancouver.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Stories and Updates</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            News From the Program
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Updates on our workshops, partnerships, and community impact across Vancouver.
          </p>
        </Reveal>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link href={`/stories/${s.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 border border-border">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-muted-blue">
                  {s.category} &middot; {s.date}
                </p>
                <h3 className="mt-2 font-serif text-lg font-medium text-dark-blue">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{s.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue">
                  Read Story <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
