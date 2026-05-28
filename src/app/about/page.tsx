"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Eye, Heart, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── SVG: Trust Shield ─── */
function TrustSVG() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm" aria-hidden="true">
      <motion.path
        d="M50 10 L85 25 L85 55 C85 72 65 88 50 93 C35 88 15 72 15 55 L15 25 Z"
        fill="none"
        className="stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="3.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M35 50 L44 59 L65 38"
        stroke="var(--color-success)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
    </svg>
  );
}

/* ─── SVG: Lightning bolt efficiency ─── */
function EfficiencySVG() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm" aria-hidden="true">
      <motion.polygon
        points="58,10 30,55 52,55 42,90 70,45 48,45"
        fill="none"
        className="stroke-amber-550 dark:stroke-amber-400"
        strokeWidth="3.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      {[25, 18, 12].map((r, i) => (
        <motion.circle
          key={r}
          cx="50"
          cy="50"
          r={r + 28}
          fill="none"
          stroke="var(--color-primary-light)"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: [0, 0.4, 0], scale: [0.7, 1.1, 1.4] } : {}}
          transition={{ delay: 0.3 + i * 0.3, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </svg>
  );
}

/* ─── SVG: Eye transparency ─── */
function TransparencySVG() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm" aria-hidden="true">
      <motion.path
        d="M10 50 Q30 20 50 20 Q70 20 90 50 Q70 80 50 80 Q30 80 10 50 Z"
        fill="none"
        className="stroke-cyan-600 dark:stroke-cyan-550"
        strokeWidth="3.5"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="12"
        fill="none"
        className="stroke-cyan-500"
        strokeWidth="3"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="5"
        className="fill-cyan-550"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 1, type: "spring" }}
      />
      <motion.line
        x1="20"
        y1="50"
        x2="80"
        y2="50"
        className="stroke-cyan-500"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ x1: 20, opacity: 0 }}
        animate={inView ? { opacity: [0, 1, 0] } : {}}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}

/* ─── SVG: Heart community ─── */
function CommunitySVG() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm" aria-hidden="true">
      <motion.path
        d="M50 78 C30 62 10 50 10 35 C10 22 22 14 33 18 C40 20 46 26 50 33 C54 26 60 20 67 18 C78 14 90 22 90 35 C90 50 70 62 50 78 Z"
        fill="none"
        className="stroke-rose-500"
        strokeWidth="3.5"
        initial={{ pathLength: 0, scale: 0.8, opacity: 0 }}
        animate={inView ? { pathLength: 1, scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M50 78 C30 62 10 50 10 35 C10 22 22 14 33 18 C40 20 46 26 50 33 C54 26 60 20 67 18 C78 14 90 22 90 35 C90 50 70 62 50 78 Z"
        className="fill-rose-500"
        fillOpacity="0.15"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      />
      <motion.path
        d="M50 78 C30 62 10 50 10 35 C10 22 22 14 33 18 C40 20 46 26 50 33 C54 26 60 20 67 18 C78 14 90 22 90 35 C90 50 70 62 50 78 Z"
        fill="none"
        className="stroke-rose-600"
        strokeWidth="5"
        strokeOpacity="0.3"
        initial={{ scale: 1, opacity: 0 }}
        animate={inView ? { scale: [1, 1.2], opacity: [0.5, 0] } : {}}
        style={{ transformOrigin: "50px 50px" }}
        transition={{ delay: 1.2, duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
      />
    </svg>
  );
}

/* ─── Counter animation ─── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const milestones = [
  { year: "2019", title: "The Idea", desc: "Founders experienced firsthand the chaos of paper visitor logs and manual maintenance collection in their own society." },
  { year: "2020", title: "First Prototype", desc: "A simple visitor management app built in a Pune apartment complex, tested with 50 flats and 3 security guards." },
  { year: "2021", title: "Private Beta", desc: "Expanded to 20 societies across Pune & Bengaluru. Iterated rapidly on resident payments and complaint workflows." },
  { year: "2022", title: "Product Launch", desc: "SmartSocietyHub officially launched with full-stack features: gate management, maintenance billing, and notice boards." },
  { year: "2024", title: "Scale & Growth", desc: "Serving 500+ societies, 75,000+ residents across 12 major Indian cities with 99.9% uptime and ISO-certified security." },
];

const values = [
  {
    icon: <TrustSVG />,
    lucide: <Shield className="w-4 h-4" />,
    title: "Trust First",
    color: "from-blue-500 to-indigo-600",
    desc: "Security is not an afterthought. End-to-end encryption, role-based access, and regular third-party security audits ensure your data stays yours.",
  },
  {
    icon: <EfficiencySVG />,
    lucide: <Zap className="w-4 h-4" />,
    title: "Radical Efficiency",
    color: "from-amber-500 to-orange-650",
    desc: "Every feature is built to save time. What used to take hours—collecting dues, logging visitors, managing complaints—takes seconds with SmartSocietyHub.",
  },
  {
    icon: <TransparencySVG />,
    lucide: <Eye className="w-4 h-4" />,
    title: "Full Transparency",
    color: "from-cyan-500 to-teal-600",
    desc: "Every rupee, every complaint, every visitor entry is logged and auditable. Committee members and residents always know what's happening.",
  },
  {
    icon: <CommunitySVG />,
    lucide: <Heart className="w-4 h-4" />,
    title: "Community at Heart",
    color: "from-rose-500 to-pink-650",
    desc: "Neighborhoods are more than buildings. We build tools that foster connection, not just administration—turning residents into neighbors.",
  },
];

const team = [
  { name: "Arjun Mehta", role: "Co-founder & CEO", bg: "from-blue-400/20 to-indigo-500/20 text-blue-600 dark:text-blue-455", initials: "AM" },
  { name: "Priya Krishnan", role: "Co-founder & CTO", bg: "from-purple-400/20 to-violet-500/20 text-purple-600 dark:text-purple-400", initials: "PK" },
  { name: "Rohan Desai", role: "Head of Product", bg: "from-emerald-400/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400", initials: "RD" },
  { name: "Sneha Iyer", role: "Head of Customer Success", bg: "from-amber-400/20 to-orange-500/20 text-amber-600 dark:text-amber-405", initials: "SI" },
  { name: "Karan Batra", role: "Lead Engineer", bg: "from-cyan-400/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400", initials: "KB" },
  { name: "Ananya Gupta", role: "Design Lead", bg: "from-rose-400/20 to-pink-500/20 text-rose-600 dark:text-rose-400", initials: "AG" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        
        {/* ── Hero ── */}
        <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden border-b border-slate-100 dark:border-slate-800/40">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30 mb-6"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 leading-[1.1] mb-6"
            >
              Building the future of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-500">
                community living
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              SmartSocietyHub was born from a simple frustration—managing an apartment community should not require a legacy filing cabinet and three chaotic chat groups.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-blue-600 dark:bg-blue-750 py-10 relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center text-white relative z-10">
            {[
              { val: 500, suffix: "+", label: "Societies" },
              { val: 75000, suffix: "+", label: "Residents" },
              { val: 12, suffix: "", label: "Cities" },
              { val: 99, suffix: ".9%", label: "Uptime" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl font-extrabold tracking-tight font-display">
                  <CountUp target={s.val} suffix={s.suffix} />
                </div>
                <div className="text-blue-100/90 mt-1 text-sm font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-650 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-md">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Digitise every resident welfare system in India
                </h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                Residential Welfare Associations manage the daily lives of millions of apartments, yet most still operate on paper registries, spreadsheets, and informal cash collection.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                We believe every gated community—from a 20-flat building to a township of 2,000 homes—deserves modern, clean, self-serve tools that make living together simpler, safer, and completely auditable.
              </p>
              <div className="pt-2">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-200 group text-sm"
                >
                  Explore Features
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Animated building blueprint SVG */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <svg viewBox="0 0 300 350" className="w-full max-w-sm drop-shadow-md" aria-hidden="true">
                {/* Building */}
                <motion.rect
                  x="60" y="80" width="180" height="240" rx="8"
                  fill="none"
                  className="stroke-blue-600/30 dark:stroke-blue-500/20"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
                {/* Windows grid */}
                {[0, 1, 2, 3].map(row =>
                  [0, 1, 2].map(col => (
                    <motion.rect
                      key={`${row}-${col}`}
                      x={85 + col * 55}
                      y={110 + row * 52}
                      width="32"
                      height="28"
                      rx="4"
                      className="fill-blue-500/10 dark:fill-blue-400/10 stroke-blue-600/20 dark:stroke-blue-500/20"
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (row * 3 + col) * 0.08, duration: 0.4, type: "spring" }}
                    />
                  ))
                )}
                {/* Door */}
                <motion.rect
                  x="130"
                  y="280"
                  width="40"
                  height="40"
                  rx="6"
                  fill="none"
                  className="stroke-violet-600/30 dark:stroke-violet-500/25"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                />
                {/* Ground */}
                <line x1="30" y1="320" x2="270" y2="320" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/10 border-t border-b border-slate-100 dark:border-slate-800/40 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-md">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                Our Core Values
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="bg-white dark:bg-slate-900/40 rounded-3xl p-6 shadow-sm border border-slate-200/50 dark:border-slate-800/40 flex flex-col items-center text-center group backdrop-blur-sm"
                >
                  <div className="mb-5 group-hover:scale-105 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-blue-600 dark:text-blue-450 bg-blue-50 dark:bg-blue-950/50 mb-3 border border-blue-100/50 dark:border-blue-900/30">
                    {v.lucide}
                    <span>{v.title}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-md">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                From Prototype to Scale
              </h2>
            </motion.div>

            <div className="relative">
              {/* Center spine line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content card */}
                    <div className={`md:w-5/12 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                      <div className="bg-white dark:bg-slate-900/40 rounded-3xl p-6 shadow-sm border border-slate-200/50 dark:border-slate-800/40 hover:shadow-md transition-shadow duration-300">
                        <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1 font-display">{m.year}</div>
                        <div className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{m.title}</div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex md:w-2/12 justify-center">
                      <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-dark-bg shadow-md relative">
                        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30" />
                      </div>
                    </div>

                    <div className="md:w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/10 border-t border-b border-slate-100 dark:border-slate-800/40 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-md">
                The People
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                Meet the Team
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
                A diverse group of engineers, designers, and community advocates united by one goal.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-slate-900/40 rounded-3xl p-8 shadow-sm border border-slate-200/50 dark:border-slate-800/40 flex flex-col items-center text-center group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.bg} flex items-center justify-center text-xl font-bold mb-4 shadow-sm border border-slate-200/10 dark:border-slate-800/10`}>
                    {member.initials}
                  </div>
                  <div className="font-bold text-lg text-slate-900 dark:text-white">{member.name}</div>
                  <div className="text-slate-450 dark:text-slate-500 text-sm mt-1">{member.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl bg-slate-950 dark:bg-slate-900/50 border border-slate-800/50 p-12 text-center text-white relative overflow-hidden shadow-xl"
          >
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                Ready to transform your society?
              </h2>
              <p className="text-slate-350 text-base max-w-xl mx-auto leading-relaxed">
                Join 500+ societies that trust SmartSocietyHub for secure, transparent, and efficient community management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-50 transition-colors duration-200 text-sm"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors duration-200 text-sm"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
