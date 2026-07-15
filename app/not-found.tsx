import Link from "next/link";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream py-24">
      <div className="container-content max-w-md text-center">
        <SectionLabel align="center">404</SectionLabel>
        <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
          Page Not Found
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-body">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Link
            href="/shop"
            className="rounded-full border border-dark-blue/30 px-7 py-3.5 text-[15px] font-semibold text-dark-blue hover:border-dark-blue"
          >
            Shop Soap
          </Link>
        </div>
      </div>
    </section>
  );
}
