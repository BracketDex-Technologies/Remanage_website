"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", society: "", homes: "", message: "" });
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Committee demo request: ${form.society}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSociety: ${form.society}\nHomes: ${form.homes}\n\n${form.message}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };
  const update = (key: keyof typeof form, value: string) => setForm(current => ({ ...current, [key]: value }));
  const field = "w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-600";

  return <div className="min-h-screen bg-[#f7f7f5]"><Navbar /><main>
    <section className="border-b border-slate-200 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Contact</p><h1 className="mt-5 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-slate-950">Bring your committee questions.</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">We&apos;ll walk through your current process, show the relevant workflows, and help you decide whether ReManage is a practical fit.</p></div></section>
    <section className="py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 xl:px-12"><div><h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-slate-950">Talk to the team</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">Share the workflow your society wants to improve first. We usually respond within one business day.</p><div className="mt-10 space-y-5"><a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-600"><Mail className="h-4 w-4"/>{siteConfig.contact.email}</a><a href={siteConfig.contact.call} className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-600"><Phone className="h-4 w-4"/>{siteConfig.contact.phone}</a><p className="flex items-center gap-3 text-sm font-medium text-slate-700"><MapPin className="h-4 w-4"/>Pune, India</p></div></div>
    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9"><div className="grid gap-x-7 gap-y-5 sm:grid-cols-2"><input required className={field} placeholder="Your name" value={form.name} onChange={e=>update("name",e.target.value)}/><input required type="email" className={field} placeholder="Work email" value={form.email} onChange={e=>update("email",e.target.value)}/><input className={field} placeholder="Phone number" value={form.phone} onChange={e=>update("phone",e.target.value)}/><input required className={field} placeholder="Society name" value={form.society} onChange={e=>update("society",e.target.value)}/><input className={field} placeholder="Number of homes" value={form.homes} onChange={e=>update("homes",e.target.value)}/><select className={field} defaultValue=""><option value="" disabled>First workflow to improve</option><option>Gate & visitors</option><option>Billing & collections</option><option>Helpdesk & operations</option><option>Notices & governance</option></select></div><textarea required rows={5} className={`${field} mt-6 resize-none`} placeholder="Tell us about your current process and what you want to improve." value={form.message} onChange={e=>update("message",e.target.value)}/><button type="submit" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-orange-600">Prepare demo request <ArrowRight className="h-4 w-4"/></button><p className="mt-4 text-xs text-slate-400">This opens your email client with the request prepared for review.</p></form></div></section>
  </main><Footer /></div>;
}
