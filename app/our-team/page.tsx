import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the youth volunteers leading Vancouver's used-oil-to-soap program.",
};

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Our Team</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            The People Behind the Program
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            A small team of Vancouver youth volunteers runs collection, workshops, and
            partnerships. {/* PLACEHOLDER team names and bios below */}
          </p>
        </Reveal>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-medium text-dark-blue">{member.name}</h3>
              <p className="text-[13px] uppercase tracking-wide text-muted-blue">{member.role}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-body">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
