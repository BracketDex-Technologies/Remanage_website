"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, CircleDollarSign, KeyRound, MessageSquareText, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const outcomes = [
  { icon: KeyRound, label: "Fewer gate calls" },
  { icon: CircleDollarSign, label: "Clearer collections" },
  { icon: MessageSquareText, label: "Trackable requests" },
];

const proofPoints = [
  { value: "12+", label: "operational modules" },
  { value: "4", label: "role-based workspaces" },
  { value: "10+ yrs", label: "society legal expertise" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-orange-700">
            <Sparkles className="h-3.5 w-3.5" />
            Society operations that do the busywork
          </p>
          <h1 className="mx-auto mt-5 max-w-5xl font-heading text-[clamp(2.35rem,6.4vw,5.9rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950">
            Run every society workflow from one place
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-orange-600 px-8 shadow-lg shadow-orange-600/20 hover:bg-orange-700"><Link href="/contact">Get started <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white px-8 shadow-sm"><Link href="/features">See the platform</Link></Button>
          </div>

          {/* Starting price anchor */}
          <p className="mt-4 text-sm text-slate-500">
            Plans start at{" "}
            <Link href="/pricing" className="font-semibold text-orange-600 underline-offset-4 hover:underline">
              Rs. 10/flat/month
            </Link>
          </p>

          {/* Legal expertise badge — strongest differentiator surfaced above fold */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <a
              href="https://societyrights.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-orange-200 bg-orange-50/60 px-4 py-2 transition-colors hover:border-orange-300 hover:bg-orange-50"
            >
              <Scale className="h-4 w-4 text-orange-600" />
              <span className="text-xs font-semibold text-slate-700">
                Backed by <span className="text-orange-600">SocietyRights</span> - 10+ years legal expertise for housing societies
              </span>
            </a>
          </motion.div>

          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left shadow-sm">
            {proofPoints.map((point) => (
              <div key={point.label} className="border-r border-slate-200 px-3 py-3 last:border-r-0 sm:px-5 sm:py-4">
                <p className="font-heading text-lg font-semibold leading-none text-slate-950 sm:text-2xl">{point.value}</p>
                <p className="mt-1 text-[11px] font-medium leading-snug text-slate-500 sm:text-xs">{point.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-9 grid gap-3 md:grid-cols-[1.08fr_0.92fr] lg:mt-10">
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative min-h-[240px] overflow-hidden rounded-xl bg-slate-950 sm:min-h-[340px] md:min-h-[400px]">
            <Image src="/images/hero-bg.jpg" alt="Residential community managed with ReManage Society" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute right-4 top-4 hidden w-[220px] rounded-xl border border-white/20 bg-white/92 p-4 text-slate-900 shadow-2xl shadow-slate-950/30 backdrop-blur sm:block">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-600">Live ops</p>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">On track</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-medium text-slate-500">Visitors</span>
                  <span className="font-heading text-lg font-semibold">18</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-medium text-slate-500">Collections</span>
                  <span className="font-heading text-lg font-semibold">82%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Open tickets</span>
                  <span className="font-heading text-lg font-semibold">06</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300">Built for community operations</p>
              <p className="mt-3 max-w-lg font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">One dependable record for the work that keeps a society running.</p>
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="hidden min-h-[300px] flex-col justify-between rounded-xl bg-orange-600 p-6 text-white md:flex md:min-h-[400px] md:p-8">
            <div className="flex items-center justify-between"><ShieldCheck className="h-7 w-7" /><span className="rounded-full border border-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Committee-first</span></div>
            <div>
              <p className="max-w-xl font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">Less time coordinating. More time improving the community.</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {outcomes.map(({ icon: Icon, label }) => <li key={label} className="border-t border-white/30 pt-3 text-xs font-semibold"><Icon className="mb-3 h-4 w-4" />{label}</li>)}
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["Guided onboarding", "Role-based access", "Exportable records"].map(item => <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-slate-500"><Check className="h-3.5 w-3.5 text-orange-600" />{item}</span>)}
        </div>
      </div>
    </section>
  );
}
