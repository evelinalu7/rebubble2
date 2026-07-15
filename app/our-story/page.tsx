import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How a youth-led group in Vancouver started turning used cooking oil into handmade soap.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Our Story</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            A Small Idea That Started in a Kitchen
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            {/* PLACEHOLDER narrative — replace with the organization's real founding story */}
            Our founders noticed how much cooking oil went to waste in their own homes and school
            cafeteria. What began as a small classroom experiment in saponification grew into a
            youth-led effort to recycle oil across Vancouver and turn it into something useful.
          </p>
        </Reveal>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl3 border border-border shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop"
              alt="Early volunteer soap-making session" // PLACEHOLDER alt text
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              From a Classroom Project to a Community Program
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              After the first few batches of soap, we realized the process could scale beyond a
              single classroom. We started collecting oil from neighbourhood kitchens and hosting
              community drop-in sessions where anyone could learn the process.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Today, our workshops run in schools and community spaces across Vancouver, and our
              soap supports shelter partnerships we've built along the way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-pale-blue py-16 md:py-24 text-center">
        <Reveal className="container-content max-w-xl">
          <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
            Want to Be Part of the Next Chapter?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            We're always looking for volunteers, partners, and new places to collect oil.
          </p>
          <div className="mt-8">
            <Button href="/support-us">Get Involved</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
