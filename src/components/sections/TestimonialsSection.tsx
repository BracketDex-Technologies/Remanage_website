import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

const resources = [
  { icon: ClipboardCheck, type: "Checklist", title: "How to evaluate society management software", href: "/resources" },
  { icon: ShieldCheck, type: "Guide", title: "Planning resident data privacy and access", href: "/security" },
  { icon: BookOpen, type: "Overview", title: "A practical approach to society onboarding", href: "/implementation" },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading badge="Resources" title="Make a more informed platform decision" description="Useful material for committees evaluating software and planning adoption." action={{ label: "Explore resources", href: "/resources" }} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">{resources.map(({icon:Icon,type,title,href})=><Link key={title} href={href} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"><Icon className="h-5 w-5 text-orange-600"/><p className="mt-10 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{type}</p><h3 className="mt-3 font-heading text-xl font-semibold text-slate-950">{title}</h3><ArrowRight className="mt-7 h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-600"/></Link>)}</div>
      </div>
    </section>
  );
}
