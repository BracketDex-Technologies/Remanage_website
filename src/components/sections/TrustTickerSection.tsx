import { pilotCommunities } from "@/lib/content";

export function TrustTickerSection() {
  const items = [...pilotCommunities, ...pilotCommunities];

  return (
    <section className="border-b border-slate-700 bg-slate-800 py-3.5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:px-10 xl:px-12">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Pilot communities exploring digital society operations
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="animate-infinite-scroll flex items-center gap-10 whitespace-nowrap md:gap-14">
            {items.map((name, idx) => (
              <span
                key={`${name}-${idx}`}
                className="font-heading text-xs font-medium uppercase tracking-[0.14em] text-slate-300"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-slate-800 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-slate-800 to-transparent" />
        </div>
      </div>
    </section>
  );
}
