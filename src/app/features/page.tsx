"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  Users,
  Briefcase,
  Check,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const categories = [
    {
      id: "security",
      title: "Security & Gate Management",
      badge: "Active Defense",
      description:
        "Digital guard consoles that keep your premises secure without slowing down daily deliveries or guests.",
      icon: Shield,
      color: "blue",
      features: [
        "Visitor logs with name, phone, vehicle, and host verification.",
        "One-tap approval notifications delivered to resident phones.",
        "Secure parcel management logs with resident collection checkoffs.",
        "Domestic help (maid, driver, cook) entry tracking via unique codes.",
        "Security blacklist logs with watch alerts directly on gate console.",
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-xl" aria-hidden="true">
          <rect
            x="30" y="20" width="140" height="160" rx="20"
            className="fill-slate-50/80 dark:fill-slate-900/80 stroke-slate-200/80 dark:stroke-slate-800/80"
            strokeWidth="2"
          />
          {/* Security Shield */}
          <path
            d="M100 50 L140 65 V105 C140 135 120 155 100 162 C80 155 60 135 60 105 V65 Z"
            className="fill-blue-600 dark:fill-blue-500 animate-float"
          />
          <path
            d="M100 60 L130 72 V105 C130 128 115 144 100 150 V60 Z"
            className="fill-blue-400 dark:fill-blue-300"
            opacity="0.8"
          />
          {/* Checkmark */}
          <path
            d="M84 107 L95 118 L117 93"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pulse scanner */}
          <line x1="20" y1="90" x2="180" y2="90" stroke="var(--color-success)" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="20" y1="120" x2="180" y2="120" stroke="var(--color-success)" strokeWidth="1" strokeDasharray="5 3" opacity="0.6" />
        </svg>
      ),
    },
    {
      id: "finance",
      title: "Double-Entry Finance & Accounting",
      badge: "Audit Ready",
      description:
        "Audit-ready collections, invoices, and expense registers built on strict double-entry ledger models.",
      icon: CreditCard,
      color: "emerald",
      features: [
        "Auto-generate maintenance bills with flat-specific variables.",
        "Direct UPI integration to support zero-cost transaction billing.",
        "Sinking, reserve, and corpus fund separation tracking.",
        "Expense voucher uploads with vendor credit check reconciliation.",
        "Defaulters register with aging lists and auto-reminders.",
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-xl" aria-hidden="true">
          <ellipse
            cx="100" cy="150" rx="70" ry="25"
            className="fill-emerald-50/40 dark:fill-emerald-950/20 stroke-emerald-200/50 dark:stroke-emerald-900/30"
            strokeWidth="2"
          />
          {/* Animated Coin stacks */}
          <g className="animate-float" style={{ animationDelay: "0.5s" }}>
            <rect x="70" y="80" width="25" height="40" rx="4" fill="var(--color-success)" />
            <ellipse cx="82.5" cy="80" rx="12.5" ry="5" fill="#34d399" />
            <ellipse cx="82.5" cy="90" rx="12.5" ry="5" fill="#34d399" />
            <ellipse cx="82.5" cy="100" rx="12.5" ry="5" fill="#34d399" />

            <rect x="105" y="60" width="25" height="60" rx="4" className="fill-emerald-700 dark:fill-emerald-600" />
            <ellipse cx="117.5" cy="60" rx="12.5" ry="5" fill="var(--color-success)" />
            <ellipse cx="117.5" cy="70" rx="12.5" ry="5" fill="var(--color-success)" />
            <ellipse cx="117.5" cy="80" rx="12.5" ry="5" fill="var(--color-success)" />
            <ellipse cx="117.5" cy="90" rx="12.5" ry="5" fill="var(--color-success)" />
          </g>
          {/* Trend arrow */}
          <path d="M 60 70 Q 100 30 140 50" fill="none" fillOpacity="0" stroke="var(--color-success)" strokeWidth="3" strokeDasharray="6 4" />
        </svg>
      ),
    },
    {
      id: "resident",
      title: "Resident App Experience",
      badge: "Vibrant Community",
      description:
        "Create a vibrant, responsive neighbor network with built-in emergency services and shared booking utilities.",
      icon: Users,
      color: "purple",
      features: [
        "Private resident directory with user privacy control settings.",
        "Helpdesk panel to create complaints and verify secretarial reviews.",
        "Interactive clubhouse amenity slot booking engine with calendar view.",
        "Classified marketplace to buy and sell home goods securely.",
        "Instant emergency SOS broadcast button to notify guard consoles.",
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-xl" aria-hidden="true">
          <rect
            x="40" y="30" width="120" height="140" rx="20"
            className="fill-purple-50/40 dark:fill-purple-950/20 stroke-purple-200/50 dark:stroke-purple-900/30"
            strokeWidth="2"
          />
          {/* Chat bubble animations */}
          <g className="animate-float">
            <rect x="55" y="50" width="60" height="24" rx="8" className="fill-purple-600 dark:fill-purple-500" />
            <path d="M 65 74 L 70 80 L 75 74 Z" className="fill-purple-600 dark:fill-purple-500" />
            <rect x="65" y="58" width="40" height="3" rx="1.5" fill="#ffffff" />
            <rect x="65" y="65" width="25" height="3" rx="1.5" fill="#ffffff" />
          </g>
          <g className="animate-float" style={{ animationDelay: "1s" }}>
            <rect x="85" y="95" width="60" height="24" rx="8" className="fill-purple-400 dark:fill-purple-300" />
            <path d="M 135 119 L 130 125 L 125 119 Z" className="fill-purple-400 dark:fill-purple-300" />
            <rect x="95" y="103" width="30" height="3" rx="1.5" fill="#ffffff" />
            <rect x="95" y="110" width="40" height="3" rx="1.5" fill="#ffffff" />
          </g>
        </svg>
      ),
    },
    {
      id: "admin",
      title: "Operations & Admin Hub",
      badge: "Sleek Operations",
      description:
        "Take command of vendor AMCs, maintenance registries, move-ins, and committee audit trials.",
      icon: Briefcase,
      color: "pink",
      features: [
        "Organized owner vs tenant occupancies and tower databases.",
        "Move-in/out scheduling workflows to coordinate gate permits.",
        "Vendor directories listing active contracts, contacts, and logs.",
        "Asset registries listing purchases, warranties, and depreciation.",
        "Immutable activity logger tracking every sensitive admin override.",
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-xl" aria-hidden="true">
          <ellipse
            cx="100" cy="100" rx="70" ry="70"
            className="fill-pink-50/40 dark:fill-pink-950/20 stroke-pink-200/50 dark:stroke-pink-900/30"
            strokeWidth="2"
          />
          {/* Gears */}
          <g className="animate-spin" style={{ animationDuration: "12s", transformOrigin: "90px 90px" }}>
            <path d="M90 65 L90 55 M90 125 L90 115 M65 90 L55 90 M125 90 L115 90" className="stroke-pink-600 dark:stroke-pink-500" strokeWidth="6" strokeLinecap="round" />
            <circle cx="90" cy="90" r="20" fill="none" className="stroke-pink-600 dark:stroke-pink-500" strokeWidth="5" />
          </g>
          <g className="animate-spin" style={{ animationDuration: "8s", transformOrigin: "120px 120px", animationDirection: "reverse" }}>
            <path d="M120 105 L120 98 M120 142 L120 135 M105 120 L98 120 M142 120 L135 120" className="stroke-pink-400 dark:stroke-pink-300" strokeWidth="4" strokeLinecap="round" />
            <circle cx="120" cy="120" r="12" fill="none" className="stroke-pink-400 dark:stroke-pink-300" strokeWidth="3" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-100 dark:border-slate-800/40">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Grade Platform</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 leading-[1.1]">
              Engineered for Modern Communities
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Explore how SmartSocietyHub handles every element of modern apartment communities—from secure gate hardware emulation to strict double-entry ledger bookkeeping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category List */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* SVG Showcase Column */}
                <div className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="relative flex items-center justify-center p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-850/20 w-full max-w-sm aspect-square"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-slate-100/10 to-transparent dark:from-slate-800/5 dark:to-transparent pointer-events-none" />
                    {cat.svg}
                  </motion.div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-md">
                      {cat.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100/50 dark:border-blue-900/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white">
                        {cat.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                    {cat.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {cat.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Security Info Card */}
      <section className="relative py-24 bg-slate-50/50 dark:bg-slate-900/10 border-t border-b border-slate-100 dark:border-slate-800/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/30 flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="font-display font-bold text-3xl tracking-tight text-slate-900 dark:text-white">
              Secured &amp; Compliant Posture
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Data isolation is strictly enforced at the database layer using unique tenant society identifiers. Supported by rate-limiting, session audits, and end-to-end TLS protocols, your information remains protected.
            </p>
            <div className="pt-4">
              <a
                href={`${appUrl}/register`}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md font-bold transition-all duration-200 inline-flex items-center gap-2 group text-sm"
              >
                Deploy SmartSocietyHub
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
