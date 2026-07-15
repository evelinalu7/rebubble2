import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-content max-w-2xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
          Shipping Policy
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-body">
          {/* PLACEHOLDER legal text */}
          This page is a placeholder. Replace this text with real shipping timelines, rates, and
          coverage areas once finalized.
        </p>
      </div>
    </section>
  );
}
