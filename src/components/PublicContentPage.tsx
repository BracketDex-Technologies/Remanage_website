import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type ContentSection = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: { icon: LucideIcon; title: string; description: string; points?: string[] }[];
};

export function PublicContentPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: ContentSection[];
}) {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-950">
      <Navbar />
      <main>
        <section className="border-b border-slate-200 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">{eyebrow}</p>
            <h1 className="mt-5 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.07em]">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-orange-600">Book a working session <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/pricing" className="inline-flex h-12 items-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-800 hover:border-slate-950">View pricing</Link>
            </div>
          </div>
        </section>
        {sections.map((section, sectionIndex) => (
          <section key={section.title} id={section.id} className={`border-b border-slate-200 py-20 sm:py-24 ${sectionIndex % 2 ? "bg-white" : "bg-[#f7f7f5]"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="max-w-md">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">{section.eyebrow}</p>
                  <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{section.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-slate-600">{section.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.items.map(({ icon: Icon, title: itemTitle, description: itemDescription, points }) => (
                    <article key={itemTitle} className="rounded-2xl border border-slate-200 bg-white p-6">
                      <Icon className="h-5 w-5 text-orange-600" />
                      <h3 className="mt-8 font-heading text-xl font-semibold">{itemTitle}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{itemDescription}</p>
                      {points ? <ul className="mt-5 space-y-2">{points.map((point) => <li key={point} className="flex gap-2 text-xs font-medium text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-600" />{point}</li>)}</ul> : null}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10 xl:px-12">
            <h2 className="max-w-3xl font-heading text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">See how ReManage fits your society.</h2>
            <Link href="/contact" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-orange-600 px-7 text-sm font-semibold text-white hover:bg-white hover:text-slate-950">Book a demo <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
