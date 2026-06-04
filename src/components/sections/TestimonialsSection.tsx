"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

const testimonials = [
  {
    quote:
      "Gate management used to be chaos — phone calls, WhatsApp approvals, lost delivery info. ReManage gave our guards a simple console and residents one-tap control. Complaints dropped 60% in the first month.",
    name: "Rajesh Patil",
    role: "Secretary",
    society: "Green Meadows, Pune",
    rating: 5,
  },
  {
    quote:
      "As treasurer, I was drowning in Excel sheets tracking who paid and who didn't. The billing module with UPI deep links changed everything — 94% collection rate, zero payment gateway fees.",
    name: "Sunita Deshmukh",
    role: "Treasurer",
    society: "Royal Residency, Pune",
    rating: 5,
  },
  {
    quote:
      "The free legal support surprised us. When our builder stalled the conveyance deed, the SocietyRights team guided us through the entire RERA filing. No other app offers this.",
    name: "Dr. Amit Joshi",
    role: "Committee Member",
    society: "Prestige Enclave, Pune",
    rating: 5,
  },
];

// Repeat the array 4 times to ensure a smooth, seamless infinite scroll container width
const scrollingItems = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50/50 py-20 md:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        {/* Header */}
        <SectionHeading
          badge="Social proof"
          title="Trusted by pilot communities across Pune"
          description="Hear from the committees and residents already running their societies on ReManage."
        />
      </div>

      {/* Flowing Marquee Container */}
      <div className="relative mt-16 w-full overflow-hidden py-4">
        {/* Fade masks for smooth edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="animate-infinite-scroll flex gap-6 whitespace-nowrap w-max px-4">
          {scrollingItems.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="w-[360px] sm:w-[420px] shrink-0 whitespace-normal rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-500/20"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start">
                <Quote className="h-8 w-8 text-orange-500/10" strokeWidth={1.5} />
                {/* Star rating */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-600">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role} &middot; {t.society}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
