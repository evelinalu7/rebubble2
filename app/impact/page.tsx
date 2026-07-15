import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import { milestones } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Placeholder figures on oil recycled, soap made, workshops hosted, and funds donated.",
};

const stats = [
  ["250+ L", "Oil recycled"],
  ["1,500+", "Soap bars made"],
  ["20+", "Workshops hosted"],
  ["600+", "Participants reached"],
  ["400+", "Bars donated"],
  ["$5,000+", "Funds donated"],
  ["6", "Partner organizations"],
];

const gallery = [
  "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607006677169-56aeb1e0c69f?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=700&auto=format&fit=crop",
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Impact</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            Our Impact
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Figures below are placeholders pending our next verified impact report.
          </p>
        </Reveal>
      </section>

      <section className="bg-pale-blue py-16 md:py-24">
        <div className="container-content grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(([stat, label], i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="rounded-xl2 border border-border bg-white p-6 text-center shadow-card">
                <p className="font-serif text-3xl font-semibold text-dark-blue">{stat}</p>
                <p className="mt-1 text-[13px] text-muted-blue">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Our Journey So Far
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <Card hover={false} className="grid gap-0 overflow-hidden p-0 md:grid-cols-[220px_1fr]">
                  <div className="relative h-40 md:h-full">
                    <Image src={m.image} alt={m.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-light-blue px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-dark-blue">
                      {m.badge}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-medium text-dark-blue">{m.title}</h3>
                    <p className="text-[13px] uppercase tracking-wide text-muted-blue">{m.date}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">{m.description}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          {/* Fictional placeholder milestones — replace with verified organizational history. */}
        </div>
      </section>

      <section className="bg-pale-blue py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Photo Gallery
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-xl2 border border-border">
                <Image src={src} alt="Program activity photo" fill className="object-cover" /> {/* PLACEHOLDER alt text */}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-16 md:py-24 text-center">
        <Reveal className="container-content max-w-lg">
          <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
            Annual Report
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            A full breakdown of our figures will be available once our annual report is finalized.
          </p>
          <Link
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-dark-blue hover:border-blue"
          >
            <Download size={17} /> Download Annual Report (Coming Soon)
          </Link>
        </Reveal>
      </section>
    </>
  );
}
