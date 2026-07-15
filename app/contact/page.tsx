import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { orgCity, orgEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about workshops, partnerships, oil donations, or general questions.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-body">
            Questions about workshops, partnerships, oil donations, or anything else — we'd love
            to hear from you.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[15px] text-body">
              <Mail size={18} className="text-blue" /> {orgEmail}
            </div>
            <div className="flex items-center gap-3 text-[15px] text-body">
              <MapPin size={18} className="text-blue" /> {orgCity}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ContactForm includeOrganization includeInquiryType />
        </Reveal>
      </div>
    </section>
  );
}
