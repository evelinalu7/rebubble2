import type { Metadata } from "next";
import { Building2, Instagram, Facebook, School, ShoppingBag, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Purchase soap, volunteer, partner, or reach out — ways to support our Vancouver oil recycling program.",
};

export default function SupportUsPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Support Us</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            Support the Work
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Every form of support helps us recycle more oil, create more soap, host more
            workshops, and contribute to Vancouver community organizations.
          </p>
        </Reveal>
      </section>

      {/* 1. Purchase Charity Soap */}
      <section className="bg-pale-blue py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <Card hover={false} className="mx-auto max-w-xl text-center">
              <ShoppingBag className="mx-auto text-blue" size={30} strokeWidth={1.5} />
              <h2 className="mt-4 font-serif text-2xl font-medium text-dark-blue">
                Purchase Charity Soap
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                Every bar purchased directly funds our collection, education, and donation
                programs.
              </p>
              <div className="mt-6">
                <Button href="/shop">Shop Now</Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* 2. Your Impact */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="text-center font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Your Impact
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["1,500+", "Soap made"],
              ["250+ L", "Oil recycled"],
              ["$5,000+", "Funds raised"],
              ["400+", "Soap donated"],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl2 border border-border bg-white p-6 text-center shadow-card">
                {/* Placeholder statistic */}
                <p className="font-serif text-2xl font-semibold text-dark-blue">{stat}</p>
                <p className="mt-1 text-[13px] text-muted-blue">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ways to Support */}
      <section className="bg-pale-blue py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Ways to Support
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Building2, title: "Business Partnerships", text: "Sponsor materials, workshops, or ongoing oil collection." },
              { icon: Users, title: "Volunteer With Us", text: "Join a soap-making session, packaging day, or collection route." },
              { icon: School, title: "School and Community Collaboration", text: "Host a workshop or collection drive at your school or organization." },
            ].map((c) => (
              <Card key={c.title} className="h-full">
                <c.icon className="text-blue" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 font-medium text-dark-blue">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{c.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Share and Follow */}
      <section className="bg-beige py-16 md:py-24 text-center">
        <div className="container-content max-w-lg">
          <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
            Share and Follow
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            Follow along with workshops, collection updates, and new soap batches.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-dark-blue hover:border-blue">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-dark-blue hover:border-blue">
              <Facebook size={18} />
            </a>
          </div>
          <div className="mt-7">
            <Button variant="secondary">Share Our Mission</Button>
          </div>
        </div>
      </section>

      {/* 5. Contact Form */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-content max-w-xl">
          <Reveal>
            <h2 className="text-center font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Inquiries Welcome
            </h2>
          </Reveal>
          <div className="mt-10">
            <ContactForm includeOrganization includeInquiryType />
          </div>
        </div>
      </section>
    </>
  );
}
