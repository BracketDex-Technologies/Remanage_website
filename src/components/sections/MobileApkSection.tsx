"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Resident dashboard and quick actions",
  "Bills, payments, and account history",
  "Complaints with images and status",
  "Visitors, amenities, notices, and society contacts",
];

const screens = [
  {
    src: "/images/MobileUI.jpeg",
    alt: "Resident App Home",
    label: "Home Dashboard",
  },
  {
    src: "/images/MySociety.jpeg",
    alt: "My Society Management",
    label: "Society Hub",
  },
  {
    src: "/images/Watchemen_Ui.jpeg",
    alt: "Security Guard UI",
    label: "Guard Terminal",
  },
  {
    src: "/images/Services UI.jpeg",
    alt: "Services & Helpers UI",
    label: "Services",
  },
];

export function MobileApkSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const goTo = (idx: number) => {
    if (idx < 0) setActiveIdx(screens.length - 1);
    else if (idx >= screens.length) setActiveIdx(0);
    else setActiveIdx(idx);
  };

  return (
    <section
      id="mobile"
      className="relative overflow-hidden border-y border-slate-200 bg-white py-16 sm:py-24"
    >
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 ring-1 ring-orange-100">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Resident mobile app
            </div>

            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Everything residents need,{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                without the clutter.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              A focused mobile experience for paying dues, approving visitors,
              raising complaints, booking amenities, and staying informed.
            </p>

            <ul className="mt-7 grid gap-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="group relative overflow-hidden rounded-full"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-4 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Request mobile demo{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="group relative overflow-hidden rounded-full border border-slate-200"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-4 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <a
                  href={siteConfig.links.apk}
                  download="ReManage-Society-release.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 bg-white px-7 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:text-orange-600"
                >
                  Download APK{" "}
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Interactive Phone Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Background glow behind phones */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent blur-3xl" />
            </div>

            {/* Desktop: 3-phone perspective layout */}
            <div className="relative hidden md:flex items-end justify-center gap-4 lg:gap-5 py-8">
              {/* Left Phone */}
              <motion.div
                animate={{
                  y: activeIdx === 0 ? -8 : 0,
                  scale: activeIdx === 0 ? 1.02 : 0.95,
                  opacity: activeIdx === 0 ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => goTo(0)}
                className="relative w-[160px] lg:w-[175px] cursor-pointer"
              >
                <div
                  className={`rounded-[2rem] p-1.5 shadow-xl transition-all duration-500 ${
                    activeIdx === 0
                      ? "bg-slate-900 ring-2 ring-orange-400/50 shadow-orange-500/15"
                      : "bg-slate-800 ring-1 ring-slate-700/50"
                  }`}
                >
                  <div className="overflow-hidden rounded-[1.75rem] bg-white">
                    <Image
                      src={screens[0].src}
                      alt={screens[0].alt}
                      width={300}
                      height={610}
                      className="w-full h-auto object-cover"
                      quality={95}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Center Phone (Hero) */}
              <motion.div
                animate={{
                  y: activeIdx === 1 ? -16 : -8,
                  scale: activeIdx === 1 ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => goTo(1)}
                className="relative z-20 w-[180px] lg:w-[200px] cursor-pointer"
              >
                <div
                  className={`rounded-[2.5rem] p-2 shadow-2xl transition-all duration-500 ${
                    activeIdx === 1
                      ? "bg-slate-900 ring-2 ring-orange-400/50 shadow-orange-500/20"
                      : "bg-slate-900 ring-1 ring-slate-800"
                  }`}
                >
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-slate-900" />
                  <div className="overflow-hidden rounded-[2rem] bg-white">
                    <Image
                      src={screens[1].src}
                      alt={screens[1].alt}
                      width={300}
                      height={610}
                      className="w-full h-auto object-cover"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Phone */}
              <motion.div
                animate={{
                  y: activeIdx === 2 ? -8 : 0,
                  scale: activeIdx === 2 ? 1.02 : 0.95,
                  opacity: activeIdx === 2 ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => goTo(2)}
                className="relative w-[160px] lg:w-[175px] cursor-pointer"
              >
                <div
                  className={`rounded-[2rem] p-1.5 shadow-xl transition-all duration-500 ${
                    activeIdx === 2
                      ? "bg-slate-900 ring-2 ring-orange-400/50 shadow-orange-500/15"
                      : "bg-slate-800 ring-1 ring-slate-700/50"
                  }`}
                >
                  <div className="overflow-hidden rounded-[1.75rem] bg-white">
                    <Image
                      src={screens[2].src}
                      alt={screens[2].alt}
                      width={300}
                      height={610}
                      className="w-full h-auto object-cover"
                      quality={95}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Screen indicator dots + navigation (Desktop) */}
            <div className="hidden md:flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => goTo(activeIdx - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-800"
                aria-label="Previous screen"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {screens.slice(0, 3).map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => goTo(i)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                      activeIdx === i
                        ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goTo(activeIdx + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-800"
                aria-label="Next screen"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile: Horizontal Carousel */}
            <div className="flex md:hidden flex-col items-center">
              <div className="relative w-[220px] mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="rounded-[2.5rem] bg-slate-900 p-2 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-800">
                      <div className="overflow-hidden rounded-[2rem] bg-white">
                        <Image
                          src={screens[activeIdx].src}
                          alt={screens[activeIdx].alt}
                          width={300}
                          height={610}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile navigation dots */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => goTo(activeIdx - 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex gap-1.5">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIdx === i
                          ? "w-6 bg-orange-500"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to screen ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goTo(activeIdx + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                  aria-label="Next screen"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-3 text-xs font-semibold text-slate-400">
                {screens[activeIdx].label}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
