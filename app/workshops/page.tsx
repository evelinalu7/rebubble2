"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { workshops } from "@/data/workshops";

const types = ["all", "school", "community", "corporate"] as const;
const statuses = ["all", "upcoming", "past"] as const;

export default function WorkshopsPage() {
  const [type, setType] = useState<(typeof types)[number]>("all");
  const [status, setStatus] = useState<(typeof statuses)[number]>("all");

  const filtered = useMemo(
    () =>
      workshops.filter(
        (w) => (type === "all" || w.type === type) && (status === "all" || w.status === status)
      ),
    [type, status]
  );

  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Workshops</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            Learn Through Making
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Explore upcoming workshops, school sessions, volunteer opportunities, and past
            activities.
          </p>
        </Reveal>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium capitalize transition-colors ${
                    type === t
                      ? "border-blue bg-blue text-white"
                      : "border-border bg-white text-dark-blue hover:border-blue"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium capitalize transition-colors ${
                    status === s
                      ? "border-dark-blue bg-dark-blue text-white"
                      : "border-border bg-white text-dark-blue hover:border-dark-blue"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-16 rounded-xl2 border border-dashed border-border bg-white p-12 text-center">
              <p className="text-body">No workshops match these filters yet. Try a different combination.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((w) => (
                <Card key={w.slug} hover className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative h-44 w-full">
                    <Image src={w.image} alt={w.title} fill className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-dark-blue">
                      {w.status === "upcoming" ? "Upcoming" : "Past"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-[13px] text-muted-blue">
                      <CalendarDays size={14} /> {w.date}
                    </p>
                    <h3 className="mt-2 font-serif text-lg font-medium text-dark-blue">{w.title}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">{w.description}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-[13px] text-muted-blue">
                      <MapPin size={14} /> {w.location}
                    </p>
                    <Link
                      href={`/workshops/${w.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-dark-blue"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="school" className="bg-pale-blue py-16 md:py-24 text-center">
        <div className="container-content max-w-xl">
          <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
            Booking for Schools, Community Groups, and Teams
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            Reach out with your group size, location, and preferred dates and we'll follow up with
            availability.
          </p>
          <div id="corporate" className="mt-8">
            <Button href="/contact">Request a Booking</Button>
          </div>
        </div>
      </section>
    </>
  );
}
