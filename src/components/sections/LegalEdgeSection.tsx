"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Scale,
  ShieldCheck,
  FileCheck2,
  Landmark,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const legalServices = [
  {
    icon: Scale,
    title: "Society Formation",
    description:
      "Expert handling of society registration with or without builder cooperation under MCS Act.",
  },
  {
    icon: FileCheck2,
    title: "Deemed Conveyance",
    description:
      "End-to-end deemed conveyance deed execution — the legal right to own your land.",
  },
  {
    icon: Landmark,
    title: "Legal Compliance",
    description:
      "RWA bylaws, AGM procedures, election disputes, and Maharashtra housing law advisory.",
  },
  {
    icon: ShieldCheck,
    title: "Dispute Resolution",
    description:
      "Builder disputes, maintenance recovery, RERA compliance, and society conflict mediation.",
  },
];

const stats = [
  { value: "5+", label: "Years", sub: "Legal practice" },
  { value: "500+", label: "Societies", sub: "Clients served" },
  { value: "Free", label: "Legal Aid", sub: "With every plan" },
];

export function LegalEdgeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-y border-slate-200">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-slate-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-600 border border-orange-500/20 mb-5">
            <Scale className="h-3.5 w-3.5" />
            <span>Our Unfair Advantage</span>
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Not just software.{" "}
            <span className="text-orange-500">
              Legal expertise built in.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We&apos;re not new to housing societies. The team behind ReManage
            has been running{" "}
            <a
              href="https://societyrights.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-orange-500 hover:text-orange-400 underline-offset-4 hover:underline transition-colors"
            >
              SocietyRights
              <ExternalLink className="h-3 w-3" />
            </a>{" "}
            — Pune&apos;s trusted legal practice for housing societies — for
            over 5 years. Now, we&apos;re bringing that deep legal knowledge
            into the digital management of your entire society.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Left: services grid */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {legalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-orange-500/30 hover:bg-orange-50/30"
                >
                  <service.icon className="h-5 w-5 text-orange-500" />
                  <h3 className="mt-3 font-heading text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i > 0 ? "border-l border-slate-200 pl-6" : ""}`}
                >
                  <div className="font-heading text-2xl font-semibold text-orange-500 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-900">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: logo card + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col items-center gap-6"
          >
            {/* SocietyRights logo card */}
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-50/50 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-2xl bg-white p-3 shadow-md border border-slate-100 sm:h-44 sm:w-44">
                  <Image
                    src="/images/society-rights-logo.png"
                    alt="SocietyRights — Legal experts for housing societies"
                    width={500}
                    height={500}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mt-6 font-heading text-lg font-semibold text-slate-900">
                  Powered by SocietyRights
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Pune&apos;s No. 1 law firm for housing society registration,
                  deemed conveyance, and RWA legal compliance. The same team now
                  manages your society digitally.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["RERA Expert", "MCS Act", "Conveyance Deed", "RWA Law"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold text-orange-500 border border-orange-500/20"
                      >
                        <BadgeCheck className="h-3 w-3" />
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Advantage callout */}
            <div className="w-full max-w-md rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Exclusive to ReManage
              </p>
              <p className="mt-2 font-heading text-base font-semibold text-slate-900 sm:text-lg">
                Free legal consultation with every subscription
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                No other society management app offers bundled legal support.
                From society formation disputes to conveyance challenges — your
                committee gets expert legal guidance at zero extra cost.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button
                  asChild
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-700 font-bold"
                >
                  <Link href="/contact">
                    Get Legal + Digital
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900">
                  <a
                    href="https://societyrights.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit SocietyRights
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
