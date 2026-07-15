"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail } from "lucide-react";
import { footerLinks, orgCity, orgEmail, orgName } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="container-content grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue text-xs font-serif font-semibold text-white">
              RB
            </span>
            <span className="font-serif text-base font-semibold text-dark-blue">{orgName}</span>
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-body">
            A youth-led Vancouver initiative turning used cooking oil into handmade soap that
            supports community organizations.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[14px] text-body">
            <MapPin size={16} className="text-blue" />
            {orgCity}
          </div>
          <div className="mt-2 flex items-center gap-2 text-[14px] text-body">
            <Mail size={16} className="text-blue" />
            {orgEmail}
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-dark-blue transition-colors hover:bg-light-blue/60"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-dark-blue transition-colors hover:bg-light-blue/60"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <FooterColumn title="Shop" links={footerLinks.shop} />
        <FooterColumn title="Workshops" links={footerLinks.workshops} />
        <FooterColumn title="Get Involved" links={footerLinks.getInvolved} />

        <div className="col-span-2 md:col-span-1">
          <h3 className="eyebrow mb-4">Newsletter</h3>
          <p className="mb-3 text-[14px] text-body">Occasional updates on workshops and impact.</p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-full border border-border bg-white px-4 py-2.5 text-sm text-dark-blue outline-none placeholder:text-muted-blue focus:border-blue"
            />
            <button
              type="submit"
              className="rounded-full bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark-blue"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-6 text-[13px] text-muted-blue md:flex-row">
          <p>&copy; {new Date().getFullYear()} {orgName}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.legal.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-dark-blue">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow mb-4">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-[14px] text-body hover:text-dark-blue">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
