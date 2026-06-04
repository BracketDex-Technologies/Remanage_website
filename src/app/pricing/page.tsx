"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Shield,
  Layers,
  CreditCard,
  Activity,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Pricing SVG graphic ─── */
function PricingSVG({ flatCount }: { flatCount: number }) {
  const ratio = Math.min(flatCount / 1000, 1);
  const barH = Math.round(ratio * 100);
  return (
    <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-lg" aria-hidden="true">
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        className="stroke-orange-600/20 dark:stroke-orange-500/20"
        strokeWidth="3"
        strokeDasharray="8 6"
      />
      {/* Inner card background */}
      <circle cx="100" cy="100" r="65" className="fill-slate-50 dark:fill-slate-900/60" />
      {/* Dynamic bar */}
      <rect x="82" y={140 - barH} width="36" height={barH} rx="6" fill="url(#barGrad)" />
      {/* Labels */}
      <text
        x="100"
        y="156"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        className="fill-slate-400 dark:fill-slate-500 tracking-widest font-display"
      >
        UNITS
      </text>
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontSize="24"
        fontWeight="800"
        className="fill-orange-600 dark:fill-orange-400 font-display"
      >
        {flatCount}
      </text>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Comparison categories array
const comparisonCategories = [
  {
    title: "Core Focus & Architecture",
    items: [
      {
        feature: "Primary Focus",
        sc: "Modern occupancy-centric operations, clean data structures, and direct zero-fee UPI collections",
        mygate: "Security-first gated access control and premium ERP accounting for large societies",
        nobroker: "Lifestyle features, in-app services, local marketplace, and community ad network",
        adda: "Strict double-entry accounting and statutory compliance for RWA committees",
      },
      {
        feature: "Data Privacy",
        sc: "Strict logical database isolation scoped by society ID. Zero resident ad networks",
        mygate: "Proprietary cloud model; handles sensitive gate and visitor logs at enterprise level",
        nobroker: "Cluttered with local ads, lead generation, and vendor-partner listings in app",
        adda: "Standard hosted SaaS multi-tenant database scoping, RWA data policy",
      },
    ],
  },
  {
    title: "Security & Visitor Control",
    items: [
      {
        feature: "Gate Console",
        sc: "Simplified web-based /gate panel, quick guest verification, package desk collection status",
        mygate: "Enterprise guard app, delivery auto-approval (Zomato/Swiggy integration), watchman console",
        nobroker: "Overstay notifications, vehicle logging, guard patrolling logs with incident tracking",
        adda: "Passcode-based entry logs and basic visitor check-ins",
      },
      {
        feature: "Staff & Helpers",
        sc: "Unique passcodes, flat check-in logs, resident notification and helper payment lists",
        mygate: "Biometric and face recognition checks, staff rating registers, attendance logs",
        nobroker: "Staff directory checklists, duty rotations, real-time check-in alerts",
        adda: "Basic helper logs with check-in/out stamps via guard gate",
      },
    ],
  },
  {
    title: "Billing & Finance",
    items: [
      {
        feature: "Maintenance & Dues",
        sc: "Zero-fee UPI deep link collections, automated invoice runs, logical owner-tenant ledger split",
        mygate: "Automated billing runs, credit card/netbanking payments with standard gateways",
        nobroker: "Rent collections, bills, standard payment gateway options with convenience fees",
        adda: "Double-entry accounting, ledger audit reports, statutory balance sheet generation",
      },
      {
        feature: "Personal Payments",
        sc: "Distinct flows for private owner-to-tenant rent tracking and direct resident-to-staff pay",
        mygate: "Lacks separate personal billing scopes; handles all payments inside same RWA channel",
        nobroker: "Rent payments with heavy credit card promos and standard helper transactions",
        adda: "Purely RWA-to-resident billing; no built-in private rent or helper payment systems",
      },
    ],
  },
  {
    title: "Operations & Communication",
    items: [
      {
        feature: "Helpdesk & complaints",
        sc: "Category complaint queues, status tracks, resident email alerts",
        mygate: "SLA assignment, ticket routes, and manager dashboards",
        nobroker: "Helpdesk logs, local contractor recommendations (plumbing, cleaning)",
        adda: "Complaint logs, checklist reviews, AMC contract tracker for society assets",
      },
      {
        feature: "Community Forums",
        sc: "Notice board with read logs, polls, committee meeting minutes",
        mygate: "Official RWA notice updates, AGM notifications, meeting minutes",
        nobroker: "Neighbourhood discussion feeds, local group forums, classifieds listing",
        adda: "Official communications, circular boards, and meeting minutes",
      },
    ],
  },
  {
    title: "User Experience & Stack",
    items: [
      {
        feature: "UI Style",
        sc: "Premium modern design system, seamless dark/light theme, web & PWA responsive",
        mygate: "Clean, native mobile app, standard administrative web portal",
        nobroker: "Feature-heavy, busy dashboard with ads and promotional offers",
        adda: "Functional, older interface styling, heavier on back-office accounting pages",
      },
      {
        feature: "Extensibility",
        sc: "Open-source foundations, clear database schemas, easy API-driven custom modules",
        mygate: "Proprietary closed-loop system, hardware integrations via certified vendors only",
        nobroker: "Closed ecosystem focused on proprietary partner services",
        adda: "Enterprise SaaS, restricted direct database adjustments or custom integrations",
      },
    ],
  },
];

export default function PricingPage() {
  const [flatCount, setFlatCount] = useState(150);
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [compareTarget, setCompareTarget] = useState<"mygate" | "nobroker" | "adda">("mygate");

  const discountFactor = isAnnual ? 0.8 : 1.0;

  const starterPricePerFlat = 10;
  const premiumPricePerFlat = 25;
  const starterMin = 300;
  const premiumMin = 750;

  const starterCost = Math.max(starterMin, Math.round(flatCount * starterPricePerFlat * discountFactor));
  const premiumCost = Math.max(premiumMin, Math.round(flatCount * premiumPricePerFlat * discountFactor));

  const registerUrl = process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "")}/register`
    : "/contact";

  const faqs = [
    {
      q: "How does the pricing calculator work?",
      a: "Pricing is calculated based on the total number of occupied or registered residential units (flats/villas) in your society. You only pay for what you manage. Annual subscriptions receive an additional 20% discount.",
    },
    {
      q: "Is there any setup or onboarding fee?",
      a: "No. Setting up a new society under ReManage Society is completely self-serve and free. You can import residents, flats, and past ledger states using Excel templates instantly.",
    },
    {
      q: "How do zero-fee UPI collections work?",
      a: "Standard payment gateways charge 1.5% to 2% per transaction. ReManage Society enables direct UPI deep linking: residents scan a dynamic QR code or click a link to make standard mobile bank-to-bank transfers. You reconcile the receipt instantly using UTR codes for zero fees.",
    },
    {
      q: "Can we cancel our subscription at any time?",
      a: "Yes. You can cancel your subscription whenever you wish. Your data remains fully exportable in Excel and PDF formats, ensuring you are never locked in.",
    },
    {
      q: "Is data isolation secure between societies?",
      a: "Yes. Every society operates in full logical isolation. Databases enforce society ID scoping on every model query, ensuring residents and guards can never view external community data.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-100 pb-10 pt-16 dark:border-slate-800/40 sm:pb-14 sm:pt-20">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-100/50 dark:border-orange-900/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Billing</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 leading-[1.1]">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Select your flat count to calculate customized monthly costs for your resident association.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/10 to-transparent dark:from-slate-800/5 dark:to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

              {/* Slider Controls */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <label className="font-display font-bold text-lg text-slate-950 dark:text-white">
                      Number of Flats
                    </label>
                    <span className="px-4 py-1.5 bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-display font-bold text-xl rounded-xl border border-orange-100/30 dark:border-orange-900/30">
                      {flatCount} Units
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="5"
                    value={flatCount}
                    onChange={(e) => setFlatCount(parseInt(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 font-semibold mt-3">
                    <span>10 units</span>
                    <span>500 units</span>
                    <span>1000 units</span>
                  </div>
                </div>

                {/* Billing toggle */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-250/40 dark:border-slate-800/40">
                  <div>
                    <span className="font-display font-bold text-slate-800 dark:text-slate-200 block text-sm">
                      Billing Cycle
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">Save 20% on annual commitments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-slate-950 dark:text-white" : "text-slate-450 dark:text-slate-500"}`}>
                      Monthly
                    </span>
                    <button
                      onClick={() => setIsAnnual(!isAnnual)}
                      className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-200 ${isAnnual ? "bg-orange-600" : "bg-slate-350 dark:bg-slate-800"
                        }`}
                      aria-label="Toggle billing cycle"
                    >
                      <motion.div
                        layout
                        className="w-4 h-4 bg-white rounded-full shadow-md"
                        animate={{ x: isAnnual ? 24 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </button>
                    <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${isAnnual ? "text-orange-600 dark:text-orange-400" : "text-slate-450 dark:text-slate-500"}`}>
                      Annually{" "}
                      <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded font-extrabold uppercase border border-emerald-100/50 dark:border-emerald-900/30">
                        20% Off
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* SVG Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <PricingSVG flatCount={flatCount} />
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-8 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">Gate Security Only</span>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">Starter Pack</h2>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-slate-900 dark:text-white tracking-tight">
                    ₹{starterCost.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-slate-500">/ month</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-550 mb-6">
                  ₹10/flat · min ₹300{isAnnual && " · 20% annual discount applied"}
                </p>
                <ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    "Guard Console log scanner",
                    "Visitor entries & pre-approvals",
                    "Domestic staff attendance log",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                  <li className="flex gap-3 items-start opacity-35">
                    <Check className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                    <span>Billing &amp; automatic invoices</span>
                  </li>
                </ul>
              </div>
              <a
                href={registerUrl}
                className="w-full py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-white rounded-xl text-center font-bold text-sm transition-colors block border border-slate-100 dark:border-slate-800"
              >
                Choose Starter
              </a>
            </div>

            {/* Premium Plan (Featured with subtle glow) */}
            <div className="bg-white dark:bg-slate-900/60 border-2 border-orange-600 rounded-3xl p-8 relative flex flex-col justify-between shadow-xl shadow-orange-500/5 dark:shadow-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/15 transition-all duration-200">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-orange-600 text-white font-display font-extrabold text-[10px] rounded-full uppercase tracking-widest shadow-md">
                RECOMMENDED
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 block mb-2">
                  Complete ERP &amp; Gate
                </span>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">Premium App</h2>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-slate-900 dark:text-white tracking-tight">
                    ₹{premiumCost.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-slate-500">/ month</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-550 mb-6">
                  ₹25/flat · min ₹750{isAnnual && " · 20% annual discount applied"}
                </p>
                <ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    { label: "Everything in Starter", bold: true },
                    { label: "Double-entry ledger accounting", bold: false },
                    { label: "Zero-cost UPI maintenance receipting", bold: false },
                    { label: "Amenity bookings & helpdesk ticketing", bold: false },
                  ].map((f) => (
                    <li key={f.label} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                      <span className={f.bold ? "font-semibold text-slate-800 dark:text-slate-200" : ""}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={registerUrl}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-center font-bold text-sm shadow-lg shadow-orange-600/20 transition-all duration-200 block"
              >
                Choose Premium
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-8 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">Custom Multi-societies</span>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">Enterprise</h2>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-slate-900 dark:text-white tracking-tight">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    "Dedicated database isolation setups",
                    "Custom domain support options",
                    "Dedicated account support manager",
                    "API exports for financial systems",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-white rounded-xl text-center font-bold text-sm transition-colors block border border-slate-100 dark:border-slate-800"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-800/40 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-100/50 dark:border-orange-900/30 mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Competitor Analysis</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mb-4">
              How ReManage Society Compares
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              We design with clarity, security, and extensibility in mind. See how we match up against traditional systems.
            </p>
          </div>

          {/* Desktop Comparison Table (Visible on md and up) */}
          <div className="hidden md:block overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl shadow-sm backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/20">
                  <th className="p-6 text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider w-[20%]">Aspect</th>
                  <th className="p-6 text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider w-[28%] bg-orange-50/10 dark:bg-orange-950/10 border-x border-orange-100/30 dark:border-orange-900/10">
                    <div className="flex items-center gap-2">
                      <span>ReManage Society</span>
                      <span className="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded font-extrabold uppercase">OUR APP</span>
                    </div>
                  </th>
                  <th className="p-6 text-sm font-bold text-slate-655 dark:text-slate-300 uppercase tracking-wider w-[17%]">MyGate</th>
                  <th className="p-6 text-sm font-bold text-slate-655 dark:text-slate-300 uppercase tracking-wider w-[17%]">NoBrokerHood</th>
                  <th className="p-6 text-sm font-bold text-slate-655 dark:text-slate-300 uppercase tracking-wider w-[17%]">ADDA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((category, catIdx) => (
                  <Fragment key={catIdx}>
                    <tr className="bg-slate-55/80 dark:bg-slate-950/40 border-y border-slate-150/40 dark:border-slate-800/60">
                      <td colSpan={5} className="py-4 px-6 font-display font-extrabold text-sm text-slate-800 dark:text-slate-200 tracking-wide">
                        <div className="flex items-center gap-2">
                          {catIdx === 0 && <Layers className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                          {catIdx === 1 && <Shield className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                          {catIdx === 2 && <CreditCard className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                          {catIdx === 3 && <Activity className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                          {catIdx === 4 && <Smartphone className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                          {category.title}
                        </div>
                      </td>
                    </tr>
                    {category.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-100 dark:border-slate-800/30 hover:bg-slate-50/20 dark:hover:bg-slate-800/10 transition-colors">
                        <td className="p-6 font-semibold text-slate-900 dark:text-white text-sm">{item.feature}</td>
                        <td className="p-6 text-sm font-medium text-slate-800 dark:text-slate-200 bg-orange-50/5 dark:bg-orange-950/5 border-x border-orange-100/20 dark:border-orange-900/5">
                          {item.sc}
                        </td>
                        <td className="p-6 text-sm text-slate-500 dark:text-slate-450">{item.mygate}</td>
                        <td className="p-6 text-sm text-slate-500 dark:text-slate-450">{item.nobroker}</td>
                        <td className="p-6 text-sm text-slate-500 dark:text-slate-450">{item.adda}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison (Visible on sm and below) */}
          <div className="block md:hidden space-y-6">
            {/* Segmented control for choosing competitor */}
            <div className="flex flex-col gap-2 p-1.5 bg-slate-150/40 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 px-3 pt-1">Compare ReManage Society with:</span>
              <div className="grid grid-cols-3 gap-1">
                {(["mygate", "nobroker", "adda"] as const).map((comp) => (
                  <button
                    key={comp}
                    onClick={() => setCompareTarget(comp)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${compareTarget === comp
                        ? "bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-sm"
                        : "text-slate-600 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white"
                      }`}
                  >
                    {comp === "mygate" ? "MyGate" : comp === "nobroker" ? "NoBrokerHood" : "ADDA"}
                  </button>
                ))}
              </div>
            </div>

            {/* List of categories */}
            <div className="space-y-8">
              {comparisonCategories.map((category, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  <h3 className="font-display font-extrabold text-sm text-slate-800 dark:text-slate-200 tracking-wide border-b border-slate-100 dark:border-slate-800 pb-2 uppercase flex items-center gap-2">
                    {catIdx === 0 && <Layers className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                    {catIdx === 1 && <Shield className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                    {catIdx === 2 && <CreditCard className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                    {catIdx === 3 && <Activity className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                    {catIdx === 4 && <Smartphone className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="bg-slate-50/40 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-5 space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.feature}</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {/* ReManage Society Card */}
                          <div className="p-3.5 bg-orange-50/20 dark:bg-orange-950/20 border border-orange-100/30 dark:border-orange-900/30 rounded-xl">
                            <span className="text-[9px] font-extrabold text-orange-600 dark:text-orange-400 uppercase tracking-widest block mb-1">ReManage Society</span>
                            <p className="text-xs font-medium text-slate-805 dark:text-slate-200 leading-relaxed">{item.sc}</p>
                          </div>
                          {/* Selected Competitor Card */}
                          <div className="p-3.5 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                            <span className="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                              {compareTarget === "mygate" ? "MyGate" : compareTarget === "nobroker" ? "NoBrokerHood" : "ADDA"}
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {compareTarget === "mygate" ? item.mygate : compareTarget === "nobroker" ? item.nobroker : item.adda}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-800/40 relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Find answers to commonly asked questions regarding subscription plans, features, and security.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
                      {faq.q}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-550" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
