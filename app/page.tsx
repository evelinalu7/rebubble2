import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Filter,
  FlaskConical,
  Sparkles,
  Recycle,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Handshake,
  Store,
  School,
  Users,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { workshops } from "@/data/workshops";
import { milestones, events } from "@/data/content";

const focusAreas = [
  {
    icon: Droplets,
    label: "Collection",
    title: "Oil Recovery",
    text: "We partner with kitchens and households across Vancouver to collect used cooking oil that would otherwise go to waste.",
  },
  {
    icon: FlaskConical,
    label: "Production",
    title: "Soap Making",
    text: "Volunteers filter, formulate, and hand-pour reclaimed oil into finished bars in small, carefully tracked batches.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "Sustainability Education",
    text: "Workshops introduce students and community members to waste reduction and the chemistry behind saponification.",
  },
  {
    icon: HeartHandshake,
    label: "Giving Back",
    title: "Community Support",
    text: "Finished soap and a share of proceeds go directly to shelters and community organizations across the city.",
  },
];

const steps = [
  { icon: Droplets, title: "Collect", text: "Used oil is gathered from partner kitchens and drop-off points." },
  { icon: Filter, title: "Filter", text: "Oil is strained and prepared to a consistent, workable standard." },
  { icon: FlaskConical, title: "Formulate", text: "Volunteers measure and mix each batch's saponification recipe." },
  { icon: Sparkles, title: "Create", text: "Bars are poured, cured, and cut by hand in small batches." },
  { icon: HeartHandshake, title: "Give Back", text: "Finished soap and proceeds reach shelters and local programs." },
];

const features = [
  {
    icon: Recycle,
    title: "Thoughtfully Repurposed",
    text: "Every bar starts as oil that would otherwise be poured down a drain or sent to landfill.",
  },
  {
    icon: ShieldCheck,
    title: "Carefully Made",
    text: "Each batch is formulated and tracked by trained youth volunteers using a consistent process.",
  },
  {
    icon: HeartHandshake,
    title: "Community Impact Included",
    text: "A portion of every sale supports our shelter partnerships and workshop programming.",
  },
];

const involvedCards = [
  { icon: Store, title: "Purchase Soap", text: "Every bar sold supports our recycling and community programs.", href: "/shop" },
  { icon: Users, title: "Volunteer", text: "Help with collection, soap-making, or packaging events.", href: "/support-us" },
  { icon: School, title: "Book a Workshop", text: "Bring a hands-on sustainability session to your group.", href: "/workshops" },
  { icon: Handshake, title: "Partner With Us", text: "Restaurants, schools, and businesses can join our network.", href: "/support-us" },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="overflow-hidden bg-cream pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel>Youth-Led Sustainability in Vancouver</SectionLabel>
            <h1 className="mt-5 font-serif text-hero-mobile font-medium text-dark-blue md:text-hero">
              Giving Used Cooking Oil a Second Life
            </h1>
            <p className="mt-5 text-xl font-medium text-muted-blue">Handmade soap with a purpose.</p>
            <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-body md:text-[18px]">
              We collect unwanted cooking oil, transform it into handmade soap, and use our work to
              support local shelters, environmental education, and community initiatives across
              Vancouver.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/shop">Shop Soap</Button>
              <Button href="/what-we-do" variant="secondary">
                Learn About Us
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["250+ L", "Oil recycled"],
                ["1,500+", "Soap bars made"],
                ["20+", "Workshops hosted"],
                ["$5,000+", "Donated"],
              ].map(([stat, label]) => (
                <div key={label}>
                  {/* Placeholder statistic — replace with verified figures */}
                  <p className="font-serif text-2xl font-semibold text-dark-blue md:text-3xl">{stat}</p>
                  <p className="mt-1 text-[13px] text-muted-blue">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="relative" y={16}>
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-light-blue/70 blur-2xl" />
            <div className="relative rounded-xl3 border border-border bg-cream p-3 shadow-soft">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2">
                <Image
                  src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1200&auto=format&fit=crop"
                  alt="Volunteers making handmade soap from reclaimed cooking oil" // PLACEHOLDER alt text
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-8 hidden w-48 rounded-xl2 border border-border bg-white p-3 shadow-lift sm:block">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600428853876-fb5a850b444a?q=80&w=600&auto=format&fit=crop"
                  alt="Finished handmade soap bars stacked on a table" // PLACEHOLDER alt text
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — MISSION INTRODUCTION */}
      <section className="bg-pale-blue py-20 md:py-28">
        <Reveal className="container-content max-w-2xl text-center">
          <SectionLabel align="center">Our Purpose</SectionLabel>
          <h2 className="mt-4 font-serif text-section-mobile font-medium text-dark-blue md:text-section">
            Turning Everyday Waste Into Practical Good
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Our work brings together sustainability, hands-on learning, youth leadership, and
            community care.
          </p>
          <div className="divider-line mt-8" />
        </Reveal>
      </section>

      {/* SECTION 3 — FOUR FOCUS AREAS */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-xl font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Our Work Is Built Around Four Areas
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-8" : ""}>
                <Card className="h-full">
                  <area.icon className="text-blue" size={28} strokeWidth={1.5} />
                  <p className="eyebrow mt-5">{area.label}</p>
                  <h3 className="mt-2 font-serif text-card font-medium text-dark-blue">{area.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{area.text}</p>
                  <Link
                    href="/what-we-do"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-dark-blue"
                  >
                    Learn More <ArrowRight size={15} />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-pale-blue py-20 md:py-28">
        <div className="container-content">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-xl font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              From Kitchen Oil to Community Impact
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-5 md:gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue bg-white text-dark-blue">
                    <step.icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 font-serif text-lg font-medium text-dark-blue">{step.title}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-body">{step.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="mx-auto mt-5 h-8 w-px bg-blue/40 md:absolute md:right-[-18px] md:top-7 md:mt-0 md:h-px md:w-9" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY OUR SOAP IS DIFFERENT */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full bg-light-blue/60 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl3 border border-border shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1607006677169-56aeb1e0c69f?q=80&w=1000&auto=format&fit=crop"
                alt="Packaged handmade soap bars ready for sale" // PLACEHOLDER alt text
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 rounded-xl2 border border-border bg-white p-5 shadow-lift">
              <p className="font-serif text-2xl font-semibold text-dark-blue">1,500+</p>
              <p className="text-[13px] text-muted-blue">Bars handmade to date</p>
            </div>
          </Reveal>

          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-4 font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Purpose in Every Bar
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="rounded-xl2 border-l-4 border-blue bg-pale-blue/60 p-6">
                    <div className="flex items-center gap-3">
                      <f.icon size={20} className="text-dark-blue" strokeWidth={1.5} />
                      <h3 className="font-semibold text-dark-blue">{f.title}</h3>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-body">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURED PRODUCTS */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-content">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-xl font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Shop Soap With a Story
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border bg-white">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium text-dark-blue">{p.name}</h3>
                    <p className="mt-1 text-[14px] text-body">{p.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-semibold text-dark-blue">${p.price} CAD</span>
                      <span className="text-[12px] uppercase tracking-wide text-muted-blue">
                        {p.impactLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/shop" variant="secondary">
              View All Soap
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WORKSHOPS */}
      <section className="bg-pale-blue py-20 md:py-28">
        <div className="container-content">
          <Reveal className="max-w-2xl">
            <SectionLabel>Learn by Doing</SectionLabel>
            <h2 className="mt-4 font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Sustainability Education From School to Community
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-body">
              Our workshops introduce participants to waste reduction, chemistry, circular design,
              and practical soap making.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workshops.slice(0, 3).map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.1}>
                <Card hover className="flex h-full flex-col p-0 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={w.image} alt={w.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-lg font-medium text-dark-blue">{w.title}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">{w.description}</p>
                    <p className="mt-3 text-[13px] text-muted-blue">
                      {w.audience} &middot; {w.duration}
                    </p>
                    <Link
                      href={`/workshops/${w.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-dark-blue"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/workshops">Book a Workshop</Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — COMMUNITY SUPPORT */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl2 border border-border">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
                alt="Volunteers packaging soap for donation" // PLACEHOLDER alt text
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop"
                alt="Soap donation being handed to a shelter partner" // PLACEHOLDER alt text
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border">
              <Image
                src="https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?q=80&w=600&auto=format&fit=crop"
                alt="Youth volunteers filtering used cooking oil" // PLACEHOLDER alt text
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Supporting Vancouver Communities
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-body">
              A share of every batch we make is set aside for direct donation to shelters that
              request hygiene products for the people they serve.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-body">
              Proceeds from soap sales help fund workshop materials, oil collection logistics, and
              ongoing shelter partnerships.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-body">
              We work alongside restaurants, schools, and community organizations who share
              materials, space, and time to keep the program running.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                {/* Placeholder statistic */}
                <p className="font-serif text-2xl font-semibold text-dark-blue">$5,000+</p>
                <p className="mt-1 text-[13px] text-muted-blue">Donated to shelters</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-dark-blue">2</p>
                <p className="mt-1 text-[13px] text-muted-blue">Shelter partners</p>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/impact" variant="secondary">
                See Our Impact
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — RECOGNITION AND MILESTONES */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-content">
          <SectionLabel>Our Journey</SectionLabel>
          <div className="mt-4 flex items-end justify-between">
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Recognition and Milestones
            </h2>
            <Link href="/impact" className="hidden text-[14px] font-semibold text-blue hover:text-dark-blue sm:block">
              View All
            </Link>
          </div>

          <Reveal className="mt-10">
            <Card hover={false} className="grid gap-0 overflow-hidden p-0 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={milestones[1].image}
                  alt={milestones[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="w-fit rounded-full bg-light-blue px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-dark-blue">
                  {milestones[1].badge}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-medium text-dark-blue">
                  {milestones[1].title}
                </h3>
                <p className="mt-2 text-[13px] uppercase tracking-wide text-muted-blue">
                  {milestones[1].date}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-body">{milestones[1].description}</p>
                <Link
                  href="/impact"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-dark-blue"
                >
                  View All <ArrowRight size={15} />
                </Link>
              </div>
            </Card>
          </Reveal>
          {/* Fictional placeholder milestones — replace with verified organizational history. */}
        </div>
      </section>

      {/* SECTION 10 — ACTIVITIES */}
      <section className="bg-pale-blue py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Upcoming and Recent Activities
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {events.map((ev, i) => (
              <Reveal key={ev.slug} delay={i * 0.1}>
                <Card hover className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative h-44 w-full">
                    <Image src={ev.image} alt={ev.title} fill className="object-cover" />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        ev.status === "upcoming" ? "bg-blue text-white" : "bg-white text-muted-blue"
                      }`}
                    >
                      {ev.status === "upcoming" ? "Upcoming" : "Past"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-[13px] text-muted-blue">
                      <CalendarDays size={14} /> {ev.date}
                    </p>
                    <h3 className="mt-2 font-serif text-lg font-medium text-dark-blue">{ev.title}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">{ev.description}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-[13px] text-muted-blue">
                      <MapPin size={14} /> {ev.location}
                    </p>
                    <Link
                      href="/impact"
                      className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-dark-blue"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/impact" variant="secondary">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 11 — GET INVOLVED */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-serif text-section-mobile font-medium text-dark-blue md:text-section">
              Action Starts With You
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-body">
              Every purchase, partnership, workshop, and volunteer hour helps us grow our
              environmental and community impact.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {involvedCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Link href={c.href} className="block h-full">
                  <Card className="h-full text-left">
                    <c.icon size={26} className="text-blue" strokeWidth={1.5} />
                    <h3 className="mt-4 font-medium text-dark-blue">{c.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">{c.text}</p>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="bg-cream pb-24 pt-4 md:pb-32">
        <Reveal className="container-content">
          <div className="rounded-xl3 bg-dark-blue px-8 py-16 text-center text-white md:px-16 md:py-20">
            <h2 className="mx-auto max-w-2xl font-serif text-section-mobile font-medium md:text-section">
              Turn Everyday Waste Into Meaningful Change
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-light-blue">
              Support a youth-led Vancouver initiative combining sustainability, education, and
              community care.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-card transition-all hover:bg-light-blue hover:text-dark-blue"
              >
                Shop Soap
              </Link>
              <Link
                href="/support-us"
                className="rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white hover:text-dark-blue"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
