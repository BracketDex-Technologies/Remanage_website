import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const columns = [
  { title: "Platform", links: [["Solutions", "/solutions"], ["Security", "/security"], ["Implementation", "/implementation"], ["Pricing", "/pricing"]] },
  { title: "Company", links: [["About", "/about"], ["Resources", "/resources"], ["Contact", "/contact"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Refund policy", "/refund"]] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-18 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Link href="/" className="flex h-16 w-52 items-center justify-center overflow-hidden" aria-label={`${siteConfig.name} home`}>
              <Image src="/logo.png" alt={siteConfig.name} width={1254} height={1254} className="h-52 w-52 max-w-none object-contain mix-blend-multiply" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">A calm, accountable operating system for Indian housing societies.</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-orange-600">
              {siteConfig.contact.email} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map(column => <div key={column.title}><h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{column.title}</h3><ul className="mt-4 space-y-3">{column.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm font-medium text-slate-600 hover:text-orange-600">{label}</Link></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span>&copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a href="https://www.bracketdex.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-600 hover:text-orange-600 transition-colors">
              Powered by BracketDex Technologies
            </a>
          </div>
          <span>Pune, India</span>
        </div>
      </div>
    </footer>
  );
}
