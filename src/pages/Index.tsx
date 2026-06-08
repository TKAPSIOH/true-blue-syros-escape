import { useMemo, useState } from "react";
import { properties, areas } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import heroImg from "@/assets/hero-syros.jpg";

export default function Index() {
  const [area, setArea] = useState<string>("all");
  const [capacity, setCapacity] = useState<string>("any");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (area !== "all" && p.area !== area) return false;
      if (capacity !== "any" && p.maxGuests < parseInt(capacity, 10)) return false;
      return true;
    });
  }, [area, capacity]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <a href="/" className="flex items-baseline gap-2 text-white">
            <span className="font-serif text-2xl tracking-tight">Trueblue</span>
            <span className="hidden text-xs uppercase tracking-[0.25em] opacity-70 sm:inline">
              Syros
            </span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Whitewashed Cycladic houses overlooking the Aegean sea in Syros"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/80">
              Curated stays · Syros, Greece
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
              A quiet corner of the&nbsp;Aegean,
              <br />
              kept honestly&nbsp;blue.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
              A small collection of homes across the island — chosen for their
              light, their view, and the way the day slows down inside them.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="absolute inset-x-0 bottom-6 z-20 px-6 sm:px-10">
          <div className="mx-auto max-w-4xl rounded-xl border border-border/70 bg-card/95 p-3 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-2">
            <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <FilterField label="Area">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-transparent text-sm text-foreground outline-none"
                >
                  <option value="all">Any area</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </FilterField>
              <FilterField label="Guests">
                <select
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full bg-transparent text-sm text-foreground outline-none"
                >
                  <option value="any">Any number</option>
                  {[2, 3, 4, 5, 6, 8].map((n) => (
                    <option key={n} value={n}>{n}+ guests</option>
                  ))}
                </select>
              </FilterField>
              <a
                href="#stays"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition hover:bg-primary/90"
              >
                Show {filtered.length} home{filtered.length === 1 ? "" : "s"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property grid */}
      <section id="stays" className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-10 sm:pt-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The collection
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
              Home to keep, not just to&nbsp;visit.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            {filtered.length} of {properties.length} properties shown.
            {(area !== "all" || capacity !== "any") && (
              <>
                {" "}
                <button
                  onClick={() => { setArea("all"); setCapacity("any"); }}
                  className="underline-offset-4 hover:text-accent hover:underline"
                >
                  Clear filters
                </button>
              </>
            )}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-20 text-center">
            <p className="font-serif text-2xl text-foreground">No homes match those filters.</p>
            <p className="mt-2 text-sm text-muted-foreground">Try widening the area or guest count.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/70 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="font-serif text-xl text-foreground">Trueblue</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Syros · Cyclades
            </p>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-line text-right">
            info@true-blue.gr · © {new Date().getFullYear()}
{"\n+30 6944 367 844 Tasos\n+30 6944 612 624 Dimitris\n\n"}
          </p>
        </div>
      </footer>
    </div>
  );
}

function FilterField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-0.5 rounded-lg px-4 py-2 transition hover:bg-secondary/60">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
