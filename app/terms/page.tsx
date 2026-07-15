import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-content max-w-2xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
          Terms of Service
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-body">
          {/* PLACEHOLDER legal text — replace with terms reviewed by counsel */}
          This page is a placeholder. Replace this text with the organization's real terms of
          service.
        </p>
      </div>
    </section>
  );
}
