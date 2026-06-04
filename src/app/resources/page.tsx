import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, ClipboardCheck, FileText, ShieldCheck, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
  { icon: ClipboardCheck, label: "Checklist", title: "Society software evaluation checklist", copy: "Questions committees should ask before selecting a platform.", href: "/contact" },
  { icon: ShieldCheck, label: "Guide", title: "A practical guide to resident data privacy", copy: "Clarify roles, access, retention, and governance before rollout.", href: "/security" },
  { icon: Calculator, label: "Tool", title: "Estimate your society’s software cost", copy: "Use flat count and workflow scope to understand likely pricing.", href: "/pricing" },
  { icon: Users, label: "Guide", title: "Planning resident onboarding", copy: "Prepare committee, guards, and residents for a focused launch.", href: "/implementation" },
  { icon: FileText, label: "Template", title: "Committee demo agenda", copy: "A structured agenda for evaluating security, finance, and operations.", href: "/contact" },
  { icon: BookOpen, label: "Overview", title: "Explore ReManage workflows", copy: "See how gate, billing, helpdesk, and governance fit together.", href: "/solutions" },
];

export default function ResourcesPage() {
  return <div className="min-h-screen bg-[#f7f7f5]"><Navbar /><main><section className="border-b border-slate-200 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Resources</p><h1 className="mt-5 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-slate-950">Make a more informed platform decision.</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">Practical material for committees evaluating society operations software and planning adoption.</p></div></section><section className="py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10 xl:px-12">{resources.map(({icon:Icon,label,title,copy,href})=><Link key={title} href={href} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><Icon className="h-5 w-5 text-orange-600"/><p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p><h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{copy}</p><ArrowRight className="mt-8 h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-600"/></Link>)}</div></section></main><Footer /></div>;
}
