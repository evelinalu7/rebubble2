export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number; // PLACEHOLDER pricing in CAD
  impactLabel: string;
  image: string;
  category: "unscented" | "scented" | "sets";
  soldOut?: boolean;
  ingredients: string;
}

export const products: Product[] = [
  {
    slug: "unscented-reclaimed-oil-bar",
    name: "Unscented Reclaimed Oil Bar",
    description: "A gentle, fragrance-free bar made from filtered reclaimed cooking oil.",
    price: 9,
    impactLabel: "Made from ~250 mL of recovered oil", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=800&auto=format&fit=crop",
    category: "unscented",
    ingredients: "Saponified reclaimed cooking oil, water, sodium hydroxide.", // PLACEHOLDER
  },
  {
    slug: "lavender-community-bar",
    name: "Lavender Community Bar",
    description: "A calming lavender-scented bar, hand-poured by our youth volunteers.",
    price: 10,
    impactLabel: "Proceeds support shelter partners", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800&auto=format&fit=crop",
    category: "scented",
    ingredients: "Saponified reclaimed cooking oil, lavender essential oil, water, sodium hydroxide.", // PLACEHOLDER
  },
  {
    slug: "citrus-renewal-bar",
    name: "Citrus Renewal Bar",
    description: "A bright citrus bar formulated in our community workshop sessions.",
    price: 10,
    impactLabel: "1 bar donated for every 3 sold", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1600428853876-fb5a850b444a?q=80&w=800&auto=format&fit=crop",
    category: "scented",
    ingredients: "Saponified reclaimed cooking oil, citrus essential oil blend, water, sodium hydroxide.", // PLACEHOLDER
  },
  {
    slug: "workshop-soap-set",
    name: "Workshop Soap Set",
    description: "A set of four bars, produced during our monthly community workshops.",
    price: 28,
    impactLabel: "Funds one workshop seat", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1607006677169-56aeb1e0c69f?q=80&w=800&auto=format&fit=crop",
    category: "sets",
    ingredients: "Assorted saponified reclaimed cooking oil bars. See individual bars for details.",
  },
];
