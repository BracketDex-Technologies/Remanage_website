"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, CircleDollarSign, KeyRound, MessageSquareText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const outcomes = [
  { icon: KeyRound, label: "Fewer gate calls" },
  { icon: CircleDollarSign, label: "Clearer collections" },
  { icon: MessageSquareText, label: "Trackable requests" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Society operations that do the busywork</p>
          <h1 className="mt-5 font-heading text-[clamp(2.5rem,7vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-slate-950">
            Run every society workflow from one place
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-orange-600 px-8 hover:bg-orange-700"><Link href="/contact">Get started <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="px-8"><Link href="/features">See the platform</Link></Button>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative hidden min-h-[340px] overflow-hidden rounded-2xl bg-slate-950 sm:block md:min-h-[380px]">
            <Image src="/images/hero-bg.jpg" alt="Residential community managed with ReManage Society" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300">Built for community operations</p>
              <p className="mt-3 max-w-lg font-heading text-2xl font-semibold leading-tight sm:text-4xl">One dependable record for the work that keeps a society running.</p>
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-orange-600 p-6 text-white md:min-h-[380px] md:p-8">
            <div className="flex items-center justify-between"><ShieldCheck className="h-7 w-7" /><span className="rounded-full border border-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Committee-first</span></div>
            <div>
              <p className="max-w-xl font-heading text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Less time coordinating. More time improving the community.</p>
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
