import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-content max-w-2xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-body">
          {/* PLACEHOLDER legal text — replace with a policy reviewed by counsel */}
          This page is a placeholder. Replace this text with a privacy policy describing what
          information is collected through this site, how it is used, and how visitors can
          request its removal.
        </p>
      </div>
    </section>
  );
}
