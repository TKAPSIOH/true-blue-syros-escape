import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ArrowLeft,
  Users,
  Square,
  Bath,
  BedDouble,
  Wifi,
  Wind,
  Car,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/listing/$propertyId")({
  component: ListingPage,
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.propertyId);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.property;
    return {
      meta: [
        { title: p ? `${p.name} — Trueblue · Syros` : "Trueblue · Syros" },
        { name: "description", content: p ? `Stay at ${p.name} in ${p.area}, Syros. ${p.maxGuests} guests · ${p.sizeSqm} m².` : "Curated vacation homes in Syros, Greece." },
        { property: "og:title", content: p ? `${p.name} — Trueblue · Syros` : "Trueblue · Syros" },
        { property: "og:type", content: "website" },
      ],
    };
  },
});

function ListingPage() {
  const { property } = Route.useLoaderData();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <Link to="/" className="flex items-baseline gap-2 text-white">
            <span className="font-serif text-2xl tracking-tight">Trueblue</span>
            <span className="hidden text-xs uppercase tracking-[0.25em] opacity-70 sm:inline">
              Syros
            </span>
          </Link>
        </nav>
      </header>

      {/* Back link */}
      <div className="absolute inset-x-0 top-24 z-20 px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            All homes
          </Link>
        </div>
      </div>

      {/* Hero image gallery */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-muted">
        <div className="h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {property.images.map((src: string, i: number) => (
              <div
                key={i}
                className="relative h-full min-w-0 flex-[0_0_100%]"
              >
                <img
                  src={src}
                  alt={`${property.name} — photo ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-primary/30" />

        {/* Arrows */}
        <button
          aria-label="Previous photo"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/85 p-2.5 text-foreground backdrop-blur-sm transition hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <button
          aria-label="Next photo"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/85 p-2.5 text-foreground backdrop-blur-sm transition hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5 rotate-180" strokeWidth={1.75} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {property.images.map((_img: string, i: number) => (
            <button
              key={i}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected ? "w-6 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          {/* Main info */}
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {property.area}
            </p>
            <h1 className="mt-2 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {property.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
              {property.street}
            </p>

            {property.description && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80">
                {property.description}
              </p>
            )}

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <SpecCard
                icon={<Users className="h-5 w-5" strokeWidth={1.5} />}
                label="Guests"
                value={String(property.maxGuests)}
              />
              <SpecCard
                icon={<Square className="h-5 w-5" strokeWidth={1.5} />}
                label="Size"
                value={`${property.sizeSqm} m²`}
              />
              <SpecCard
                icon={<BedDouble className="h-5 w-5" strokeWidth={1.5} />}
                label="Bedrooms"
                value={String(property.bedrooms)}
              />
              <SpecCard
                icon={<Bath className="h-5 w-5" strokeWidth={1.5} />}
                label="WC"
                value={String(property.bathrooms)}
              />
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Amenities
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                <AmenityRow
                  icon={<Wifi className="h-4 w-4" strokeWidth={1.5} />}
                  label="Wi-Fi"
                  enabled={property.amenities.wifi}
                />
                <AmenityRow
                  icon={<Wind className="h-4 w-4" strokeWidth={1.5} />}
                  label="Air Conditioning"
                  enabled={property.amenities.ac}
                />
                <AmenityRow
                  icon={<Car className="h-4 w-4" strokeWidth={1.5} />}
                  label="Parking"
                  enabled={property.amenities.parking}
                />
              </div>
            </div>

            {/* Indicative rates */}
            {property.rates && (
              <div className="mt-10">
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Indicative rates per night
                </h2>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <RateCard month="June" price={property.rates.june} />
                  <RateCard month="July" price={property.rates.july} />
                  <RateCard month="August" price={property.rates.august} />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Prices are indicative and may vary by dates and length of stay.
                </p>
              </div>
            )}
          </div>

          {/* Booking card */}
          <aside className="animate-fade-up">
            <div className="sticky top-8 rounded-xl border border-border/70 bg-card p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)]">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Starting from
              </p>
              <p className="mt-1 font-serif text-3xl text-foreground">
                €95 <span className="text-base text-muted-foreground">/ night</span>
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={property.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-medium tracking-wide text-accent-foreground transition-all duration-300 hover:gap-3 hover:bg-accent/90"
                >
                  Check Rates &amp; Availability
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Free cancellation up to 48 hours before check-in. Instant confirmation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/70 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="font-serif text-xl text-foreground">Trueblue</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Syros · Cyclades
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            info@true-blue.gr · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function SpecCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border/70 bg-secondary/40 px-4 py-4">
      <div className="text-accent">{icon}</div>
      <div>
        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</dt>
        <dd className="mt-0.5 text-lg font-medium text-foreground">{value}</dd>
      </div>
    </div>
  );
}

function RateCard({ month, price }: { month: string; price: number }) {
  return (
    <div className="flex flex-col items-start gap-1 rounded-lg border border-border/70 bg-secondary/40 px-4 py-3">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {month}
      </span>
      <span className="font-serif text-xl text-foreground">
        €{price}
        <span className="ml-1 text-xs text-muted-foreground">/ night</span>
      </span>
    </div>
  );
}

function AmenityRow({
  icon,
  label,
  enabled,
}: {
  icon: React.ReactNode;
  label: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3">
      <div className={enabled ? "text-accent" : "text-muted-foreground/40"}>
        {icon}
      </div>
      <div className="flex flex-1 items-center justify-between">
        <span className="text-sm text-foreground/80">{label}</span>
        <span
          className={`text-xs font-medium uppercase tracking-wider ${
            enabled ? "text-accent" : "text-muted-foreground/50"
          }`}
        >
          {enabled ? "Yes" : "No"}
        </span>
      </div>
    </div>
  );
}
