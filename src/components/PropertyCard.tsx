import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Square,
  Bath,
  Wifi,
  Wind,
  Car,
  ArrowUpRight,
} from "lucide-react";
import type { Property } from "@/data/properties";

function Amenity({
  Icon,
  label,
  enabled,
}: {
  Icon: typeof Wifi;
  label: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 py-2 last:border-0">
      <div className="flex items-center gap-2 text-sm text-foreground/80">
        <Icon className={`h-4 w-4 ${enabled ? "text-accent" : "text-muted-foreground/50"}`} strokeWidth={1.5} />
        <span>{label}</span>
      </div>
      <span
        className={`text-xs font-medium uppercase tracking-wider ${
          enabled ? "text-accent" : "text-muted-foreground/60"
        }`}
      >
        {enabled ? "Yes" : "PUBLIC"}
      </span>
    </div>
  );
}

export function PropertyCard({ property }: { property: Property }) {
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
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-500 hover:border-accent/40 hover:shadow-[0_20px_60px_-30px_oklch(0.5_0.16_235/0.35)]">
      <Link to={`/listing/${property.id}`}>
        {/* Image slider */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <div className="h-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {property.images.map((src, i) => (
                <div
                  key={i}
                  className="relative h-full min-w-0 flex-[0_0_100%]"
                >
                  <img
                    src={src}
                    alt={`${property.name} — photo ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); emblaApi?.scrollPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/85 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
          </button>
          <button
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); emblaApi?.scrollNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/85 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {property.images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to photo ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); emblaApi?.scrollTo(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selected ? "w-5 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-6 pb-0">
          <header>
            <h3 className="font-serif text-2xl leading-tight text-foreground">
              {property.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {property.area} · {property.street}
            </p>
          </header>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-6 pb-6">
        {/* Specs */}
        <dl className="mt-5 grid grid-cols-3 divide-x divide-border/70 rounded-md border border-border/70 bg-secondary/40">
          <div className="flex flex-col items-center gap-1 px-2 py-3">
            <Users className="h-4 w-4 text-accent" strokeWidth={1.5} />
            <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Guests</dt>
            <dd className="text-sm font-medium text-foreground">{property.maxGuests}</dd>
          </div>
          <div className="flex flex-col items-center gap-1 px-2 py-3">
            <Square className="h-4 w-4 text-accent" strokeWidth={1.5} />
            <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Size</dt>
            <dd className="text-sm font-medium text-foreground">{property.sizeSqm} m²</dd>
          </div>
          <div className="flex flex-col items-center gap-1 px-2 py-3">
            <Bath className="h-4 w-4 text-accent" strokeWidth={1.5} />
            <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">WC</dt>
            <dd className="text-sm font-medium text-foreground">{property.bathrooms}</dd>
          </div>
        </dl>

        {/* Amenities */}
        <div className="mt-5">
          <Amenity Icon={Wind} label="Air Condition" enabled={property.amenities.ac} />
          <Amenity Icon={Wifi} label="Wi-Fi" enabled={property.amenities.wifi} />
          <Amenity Icon={Car} label="Parking" enabled={property.amenities.parking} />
        </div>

        {/* CTA */}
        <a
          href="tel:+306944367844"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-all duration-300 hover:gap-3 hover:bg-accent/90"
        >
          Book now with a call
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </a>
      </div>
    </article>
  );
}
