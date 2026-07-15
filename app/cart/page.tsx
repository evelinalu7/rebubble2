"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import { products } from "@/data/products";

interface CartLine {
  slug: string;
  quantity: number;
}

// Starter cart contents for demonstration — a production build would read this from real cart state.
const initialCart: CartLine[] = [
  { slug: "lavender-community-bar", quantity: 2 },
  { slug: "citrus-renewal-bar", quantity: 1 },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartLine[]>(initialCart);

  const lines = cart
    .map((line) => ({ ...line, product: products.find((p) => p.slug === line.slug) }))
    .filter((l) => l.product);

  const subtotal = lines.reduce((sum, l) => sum + (l.product?.price || 0) * l.quantity, 0);

  function updateQuantity(slug: string, delta: number) {
    setCart((prev) =>
      prev
        .map((l) => (l.slug === slug ? { ...l, quantity: Math.max(1, l.quantity + delta) } : l))
        .filter((l) => l.quantity > 0)
    );
  }

  function removeLine(slug: string) {
    setCart((prev) => prev.filter((l) => l.slug !== slug));
  }

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-content max-w-3xl">
        <SectionLabel>Your Cart</SectionLabel>
        <h1 className="mt-4 font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
          Cart
        </h1>

        {lines.length === 0 ? (
          <div className="mt-14 flex flex-col items-center gap-4 rounded-xl2 border border-dashed border-border bg-white p-14 text-center">
            <ShoppingBag className="text-muted-blue" size={32} />
            <p className="text-body">Your cart is empty.</p>
            <Button href="/shop">Shop Soap</Button>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-6">
            {lines.map((line) => (
              <div
                key={line.slug}
                className="flex items-center gap-5 rounded-xl2 border border-border bg-white p-5"
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image src={line.product!.image} alt={line.product!.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/shop/${line.slug}`} className="font-medium text-dark-blue hover:text-blue">
                    {line.product!.name}
                  </Link>
                  <p className="mt-1 text-[14px] text-muted-blue">${line.product!.price} CAD each</p>
                </div>
                <div className="flex items-center rounded-full border border-border">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(line.slug, -1)}
                    className="flex h-9 w-9 items-center justify-center text-dark-blue hover:text-blue"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-[14px] font-medium text-dark-blue">
                    {line.quantity}
                  </span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(line.slug, 1)}
                    className="flex h-9 w-9 items-center justify-center text-dark-blue hover:text-blue"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <p className="w-20 text-right font-semibold text-dark-blue">
                  ${(line.product!.price * line.quantity).toFixed(2)}
                </p>
                <button
                  aria-label={`Remove ${line.product!.name}`}
                  onClick={() => removeLine(line.slug)}
                  className="text-muted-blue hover:text-dark-blue"
                >
                  <X size={18} />
                </button>
              </div>
            ))}

            <div className="mt-4 flex flex-col items-end gap-4 border-t border-border pt-6">
              <div className="flex w-full max-w-xs justify-between text-[15px]">
                <span className="text-body">Subtotal</span>
                <span className="font-semibold text-dark-blue">${subtotal.toFixed(2)} CAD</span>
              </div>
              <p className="text-[13px] text-muted-blue">Shipping and taxes calculated at checkout.</p>
              <Button className="w-full max-w-xs justify-center">Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
