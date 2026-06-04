"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

const resources = [
  {
    icon: ClipboardCheck,
    type: "Checklist",
    title: "How to evaluate society management software",
    href: "/resources",
    description: "Key features, compliance checklists, and evaluation frameworks for your committee.",
  },
  {
    icon: ShieldCheck,
    type: "Guide",
    title: "Planning resident data privacy and access",
    href: "/security",
    description: "Learn how to establish secure access policies and protect resident information.",
  },
  {
    icon: BookOpen,
    type: "Overview",
    title: "A practical approach to society onboarding",
    href: "/implementation",
    description: "A step-by-step roadmap to smoothly transition your society to digital operations.",
  },
];

export function ResourcesSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          badge="Resources"
          title="Make a more informed platform decision"
          description="Useful material for committees evaluating software and planning adoption."
          action={{ label: "Explore resources", href: "/resources" }}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map(({ icon: Icon, type, title, href, description }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:border-orange-500/20"
            >
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {type}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors">
                <span>Read article</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
