"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShoppingBag, User, X } from "lucide-react";
import { aboutDropdown, mainNav, orgName } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-sm font-serif font-semibold text-white">
            RB
          </span>
          <span className="font-serif text-lg font-semibold text-dark-blue">{orgName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setAboutOpen((v) => !v)}
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-dark-blue transition-colors hover:bg-light-blue/60 ${
                    isActive(item.href) ? "bg-light-blue/70 ring-1 ring-blue/40" : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 w-56 origin-top rounded-xl2 border border-border bg-white p-2 shadow-lift transition-all duration-200 ${
                    aboutOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {aboutDropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block rounded-lg px-4 py-2.5 text-[14px] text-body transition-colors hover:bg-pale-blue hover:text-dark-blue"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium text-dark-blue transition-colors hover:bg-light-blue/60 ${
                  isActive(item.href) ? "bg-light-blue/70 ring-1 ring-blue/40" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Link
            href="/shop"
            className="hidden rounded-full bg-blue px-6 py-3 text-[14px] font-semibold text-white shadow-card transition-all hover:bg-dark-blue hover:shadow-lift md:inline-flex"
          >
            Shop Soap
          </Link>
          <Link
            href="/login"
            aria-label="Account"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-dark-blue transition-colors hover:bg-light-blue/60 md:inline-flex"
          >
            <User size={20} />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-dark-blue transition-colors hover:bg-light-blue/60 md:inline-flex"
          >
            <ShoppingBag size={20} />
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-dark-blue hover:bg-light-blue/60 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-cream transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-content flex h-20 items-center justify-between">
          <span className="font-serif text-lg font-semibold text-dark-blue">{orgName}</span>
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-dark-blue hover:bg-light-blue/60"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="container-content flex flex-col gap-1 pt-4" aria-label="Mobile navigation">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-4 py-3.5 text-lg font-medium text-dark-blue hover:bg-light-blue/60"
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-border" />
          {aboutDropdown.map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              className="rounded-xl px-4 py-3 text-[15px] text-body hover:bg-light-blue/60"
            >
              {sub.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-blue px-6 py-3.5 text-center font-semibold text-white"
            >
              Shop Soap
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-border px-6 py-3.5 text-center font-semibold text-dark-blue"
            >
              Account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
