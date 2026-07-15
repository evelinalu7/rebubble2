"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { products } from "@/data/products";

const categories = ["all", "unscented", "scented", "sets"] as const;
const sortOptions = ["featured", "price-asc", "price-desc", "name"] as const;

export default function ShopPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("featured");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, sort, query]);

  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <Reveal className="container-content max-w-2xl">
          <SectionLabel>Shop</SectionLabel>
          <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-title">
            Soap With a Story
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-body">
            Every bar is handmade from reclaimed cooking oil. Prices shown are placeholders.
          </p>
        </Reveal>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium capitalize transition-colors ${
                    category === c
                      ? "border-blue bg-blue text-white"
                      : "border-border bg-white text-dark-blue hover:border-blue"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-blue" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search soap"
                  aria-label="Search products"
                  className="rounded-full border border-border bg-white py-2 pl-9 pr-4 text-[14px] outline-none focus:border-blue"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                aria-label="Sort products"
                className="rounded-full border border-border bg-white px-4 py-2 text-[14px] outline-none focus:border-blue"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-16 rounded-xl2 border border-dashed border-border bg-white p-12 text-center">
              <p className="text-body">No soap matches your search. Try a different term.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((p) => (
                <div key={p.slug} className="group">
                  <Link href={`/shop/${p.slug}`} className="relative block aspect-square overflow-hidden rounded-xl2 border border-border bg-white">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.soldOut && (
                      <span className="absolute left-3 top-3 rounded-full bg-dark-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                        Sold Out
                      </span>
                    )}
                  </Link>
                  <div className="mt-4">
                    <Link href={`/shop/${p.slug}`}>
                      <h3 className="font-medium text-dark-blue">{p.name}</h3>
                    </Link>
                    <p className="mt-1 text-[13px] uppercase tracking-wide text-muted-blue">{p.impactLabel}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-semibold text-dark-blue">${p.price} CAD</span>
                      <button
                        disabled={p.soldOut}
                        className="rounded-full border border-border px-4 py-1.5 text-[13px] font-semibold text-dark-blue transition-colors hover:border-blue disabled:opacity-40"
                      >
                        {p.soldOut ? "Sold Out" : "Quick Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
