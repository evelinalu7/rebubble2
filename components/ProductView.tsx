"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Truck } from "lucide-react";
import type { Product } from "@/data/products";
import Reveal from "@/components/Reveal";

const scentVariants = ["Original", "Lavender", "Citrus"];

export default function ProductView({ product, related }: { product: Product; related: Product[] }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(scentVariants[0]);
  const [added, setAdded] = useState(false);

  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-content grid gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-square overflow-hidden rounded-xl3 border border-border shadow-soft">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </Reveal>

          <div>
            <h1 className="font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-dark-blue">${product.price} CAD</p>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-body">{product.description}</p>
            <p className="mt-2 text-[13px] uppercase tracking-wide text-muted-blue">{product.impactLabel}</p>

            <div className="mt-8">
              <p className="mb-2 text-[14px] font-medium text-dark-blue">Scent</p>
              <div className="flex flex-wrap gap-2">
                {scentVariants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                      variant === v
                        ? "border-blue bg-blue text-white"
                        : "border-border bg-white text-dark-blue hover:border-blue"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-border bg-white">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-dark-blue hover:text-blue"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium text-dark-blue">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center text-dark-blue hover:text-blue"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => setAdded(true)}
                className="rounded-full bg-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-card transition-all hover:bg-dark-blue hover:shadow-lift"
              >
                Add to Cart
              </button>
              <Link
                href="/cart"
                className="rounded-full border border-dark-blue/30 px-7 py-3.5 text-[15px] font-semibold text-dark-blue hover:border-dark-blue hover:bg-white"
              >
                Buy Now
              </Link>
            </div>
            {added && (
              <p className="mt-3 text-[14px] font-medium text-blue">
                Added {quantity} × {product.name} ({variant}) to your cart.
              </p>
            )}

            <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8">
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-blue">Ingredients</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-body">{product.ingredients}</p>
              </div>
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-blue">Care & Storage</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-body">
                  Keep on a well-draining dish between uses to extend the life of the bar.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-blue">Impact</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-body">{product.impactLabel}</p>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-muted-blue">
                <Truck size={16} /> Ships within Vancouver and across Canada. {/* PLACEHOLDER shipping info */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige py-16 md:py-24">
        <div className="container-content">
          <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
            You Might Also Like
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/shop/${p.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border bg-white">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 font-medium text-dark-blue">{p.name}</h3>
                <p className="text-[14px] text-body">${p.price} CAD</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
