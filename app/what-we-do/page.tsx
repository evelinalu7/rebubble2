import type { Metadata } from "next";
import { Droplets, Filter, FlaskConical, School, FileText, Building2, HeartHandshake, Users, Store, ShieldCheck } from "lucide-react";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "How we recycle used cooking oil, run sustainability workshops, and support Vancouver shelters through handmade soap.",
};

function CardGrid({
  items,
}: {
  items: { icon: any; title: string; text: string }[];
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08}>
          <Card className="h-full">
            <item.icon className="text-blue" size={26} strokeWidth={1.5} />
            <h3 className="mt-4 font-medium text-dark-blue">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{item.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export default function WhatWeDoPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>What We Do</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            Connecting Science With Community Action
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            We transform environmental knowledge into practical social impact through used-oil
            recycling, soap making, education, and community support.
          </p>
        </Reveal>
      </section>

      <section id="recycling" className="bg-beige py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Waste Oil Recycling: Practical Waste Reduction
            </h2>
          </Reveal>
          <CardGrid
            items={[
              { icon: Droplets, title: "Community Collection", text: "Oil is gathered from partner kitchens and neighbourhood drop-off points." },
              { icon: Filter, title: "Oil Filtering and Preparation", text: "Collected oil is strained and prepared to a consistent, workable standard." },
              { icon: FlaskConical, title: "Responsible Soap-Making Process", text: "Volunteers follow a tracked formulation process for every batch produced." },
            ]}
          />
        </div>
      </section>

      <section className="bg-pale-blue py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Learning Through Making
            </h2>
          </Reveal>
          <CardGrid
            items={[
              { icon: School, title: "School Workshops", text: "Hands-on sessions introducing students to recycling and basic chemistry." },
              { icon: FileText, title: "Teaching Materials", text: "Supporting resources educators can use before or after a session." },
              { icon: Building2, title: "Community and Business Sessions", text: "Workshops adapted for community groups, teams, and organizations." },
            ]}
          />
        </div>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Soap With a Local Purpose
            </h2>
          </Reveal>
          <CardGrid
            items={[
              { icon: HeartHandshake, title: "Soap Donations", text: "A share of every batch is set aside for direct donation to shelter partners." },
              { icon: ShieldCheck, title: "Shelter Partnerships", text: "Ongoing relationships with organizations who request hygiene products." },
              { icon: Store, title: "Fundraising", text: "Soap sales help fund materials, logistics, and workshop programming." },
              { icon: Users, title: "Volunteer Packaging Events", text: "Community members help prepare finished soap for donation and sale." },
            ]}
          />
        </div>
      </section>

      <section id="partnerships" className="bg-pale-blue py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Partnerships for Sustainable Impact
            </h2>
          </Reveal>
          <CardGrid
            items={[
              { icon: Store, title: "Restaurants and Oil Donors", text: "Kitchens that set aside used oil for collection." }, // PLACEHOLDER: replace with real partner names
              { icon: School, title: "Schools and Youth Groups", text: "Educational partners who host workshops and collection drives." },
              { icon: Building2, title: "Businesses and Sponsors", text: "Organizations supporting materials, space, or funding." },
              { icon: HeartHandshake, title: "Shelters and Nonprofits", text: "Community partners who receive soap donations directly." },
            ]}
          />
        </div>
      </section>
    </>
  );
}
