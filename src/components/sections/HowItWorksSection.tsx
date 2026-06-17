"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { howItWorks } from "@/lib/content";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const stats = [
  { value: "12+", label: "Live modules", sub: "Demo platform" },
  { value: "4", label: "User roles", sub: "Resident to guard" },
  { value: "1", label: "Unified app", sub: "Mobile & web" },
];

export function HowItWorksSection() {
  return (
    <section id="platform" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 [--cell-border-color:rgba(30,41,59,0.5)] [--cell-fill-color:rgba(2,6,23,0.65)] [--cell-shadow-color:rgba(37,99,235,0.15)]">
          <BackgroundRippleEffect rows={12} cols={42} cellSize={44} gridClassName="opacity-35" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-slate-950 from-0% via-slate-900/95 via-45% to-orange-900/70 to-100%"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-full flex-col max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="pt-10 pb-6 md:pt-12 md:pb-6">
          <SectionHeading
            badge="Implementation"
            title="Go live in three steps"
            description="Register your society, onboard residents and committee, then run gate, billing, and notices from day one."
            dark
            action={{ label: "Book a demo", href: "/contact" }}
            className="[&_a]:pointer-events-auto"
          />
        </div>

        {/* Mobile & Tablet View: Vertical Stack */}
        <div className="md:hidden flex flex-col gap-4 py-2">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-6 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.25)]"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="default"
              />
              {/* Subtle gradient accent along top edge */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" aria-hidden />
              <div className="relative z-10">
                <span className="font-heading text-3xl font-semibold text-orange-300/50">{item.step}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Laptop View: Horizontal 3-Columns */}
        <div className="hidden md:grid gap-px border border-white/20 bg-white/5 grid-cols-3 flex-1">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative bg-slate-900/25 p-6 backdrop-blur-[2px] lg:p-8 overflow-hidden"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="default"
              />
              <div className="relative z-10">
                <span className="font-heading text-3xl font-semibold text-orange-300/50">{item.step}</span>
                <h3 className="mt-2 font-heading text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 py-6 md:py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid flex-1 grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-orange-400/40 pl-4">
                <div className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-100">{stat.label}</div>
                <div className="text-xs text-slate-300/80">{stat.sub}</div>
              </div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="pointer-events-auto shrink-0 bg-white text-slate-900 hover:bg-slate-100"
          >
            <Link href="/contact">
              Start with a demo
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
