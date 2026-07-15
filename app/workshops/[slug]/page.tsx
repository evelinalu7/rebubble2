import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { workshops } from "@/data/workshops";

export function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const workshop = workshops.find((w) => w.slug === params.slug);
  return { title: workshop ? workshop.title : "Workshop" };
}

export default function WorkshopDetailPage({ params }: { params: { slug: string } }) {
  const workshop = workshops.find((w) => w.slug === params.slug);
  if (!workshop) return notFound();

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl3 border border-border shadow-soft">
          <Image src={workshop.image} alt={workshop.title} fill className="object-cover" />
        </Reveal>

        <div>
          <SectionLabel>{workshop.type} Workshop</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
            {workshop.title}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-body">{workshop.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6">
            <div>
              <dt className="flex items-center gap-1.5 text-[13px] text-muted-blue">
                <CalendarDays size={14} /> Date
              </dt>
              <dd className="mt-1 font-medium text-dark-blue">{workshop.date}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-[13px] text-muted-blue">
                <MapPin size={14} /> Location
              </dt>
              <dd className="mt-1 font-medium text-dark-blue">{workshop.location}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-[13px] text-muted-blue">
                <Clock size={14} /> Duration
              </dt>
              <dd className="mt-1 font-medium text-dark-blue">{workshop.duration}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-[13px] text-muted-blue">
                <Users size={14} /> Capacity
              </dt>
              <dd className="mt-1 font-medium text-dark-blue">{workshop.capacity}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <Button href="/contact">Reserve a Spot</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
