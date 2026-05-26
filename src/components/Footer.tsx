"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Check, Download, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-background pt-16 pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(320px,70%)]" aria-hidden>
        <div className="footer-gradient-sky absolute -bottom-12 -left-[10%] h-56 w-[70%] rounded-full bg-sky-400/25 blur-3xl" />
        <div className="footer-gradient-orange absolute -right-[5%] bottom-0 h-48 w-[55%] rounded-full bg-orange-400/20 blur-3xl" />
        <div className="footer-gradient-blend absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-300/15 via-orange-200/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <Building2 className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-heading text-xl font-semibold text-slate-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-sm font-body text-sm leading-relaxed text-slate-600">
              {siteConfig.tagline}. Digital gate, billing, and community tools for Indian gated
              societies.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-sm space-y-2">
              <label
                htmlFor="newsletter"
                className="font-body text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Newsletter
              </label>
              <div className="relative flex">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-12 pl-4 font-body text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-1.5 right-1.5 rounded-lg bg-primary p-2 text-white"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              {subscribed ? (
                <p className="font-body text-xs font-medium text-emerald-600">Thanks for subscribing.</p>
              ) : null}
            </form>
          </div>

          <div>
            <h3 className="mb-4 font-body text-xs font-bold uppercase tracking-widest text-slate-500">
              Product
            </h3>
            <ul className="space-y-2.5 font-body text-sm font-medium text-slate-600">
              <li>
                <Link href="/features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-primary">
                  Modules
                </Link>
              </li>
              <li>
                <a href={siteConfig.links.apk} className="inline-flex items-center gap-1 hover:text-primary">
                  <Download className="h-3.5 w-3.5" />
                  Download APK
                </a>
              </li>
              <li>
                <a href={siteConfig.links.login} className="hover:text-primary">
                  Sign in
                </a>
              </li>
              <li>
                <a href={siteConfig.links.gate} className="hover:text-primary">
                  Guard terminal
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-body text-xs font-bold uppercase tracking-widest text-slate-500">
              Company
            </h3>
            <ul className="space-y-2.5 font-body text-sm font-medium text-slate-600">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-body text-xs font-bold uppercase tracking-widest text-slate-500">
              Contact
            </h3>
            <ul className="space-y-2 font-body text-sm text-slate-600">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>Pune, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-8 font-body text-xs text-slate-500 sm:flex-row">
          <span>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </span>
          <span>
            Powered by{" "}
            <a
              href="https://www.buzyhub.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Buzyhub.in
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
