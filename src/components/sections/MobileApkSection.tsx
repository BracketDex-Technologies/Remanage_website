"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sun,
} from "lucide-react";

const highlights = [
  "Resident dashboard and quick actions",
  "Bills, payments, and account history",
  "Complaints with images and status",
  "Visitors, amenities, notices, and society contacts",
];

export function MobileApkSection() {
  return (
    <section id="mobile" className="border-y border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Resident mobile app</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Everything residents need, without the clutter.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              A focused mobile experience for paying dues, approving visitors, raising complaints, booking amenities, and staying informed.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                  {item}
                </li>
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
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Request mobile demo <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 px-4 text-xs font-semibold text-slate-600"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-4 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <Sun className="h-3.5 w-3.5 text-orange-500" /> Light mode experience
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50/60 via-white to-sky-50/40 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
          >
            {/* Desktop Overlapping Fan Layout */}
            <div className="relative hidden md:block h-[510px] w-full max-w-[560px] mx-auto">
              {/* Left Phone */}
              <div className="absolute left-[5%] top-[55px] w-[180px] lg:w-[190px] -rotate-6 rounded-[2rem] bg-slate-950 p-1.5 shadow-xl ring-1 ring-slate-900/10 transition-all duration-500 hover:z-30 hover:scale-105 hover:rotate-0">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/MobileUI.jpeg"
                    alt="Resident App Home"
                    width={300}
                    height={610}
                    className="w-full h-auto object-cover"
                    quality={95}
                  />
                </div>
              </div>

              {/* Right Phone */}
              <div className="absolute right-[5%] top-[55px] w-[180px] lg:w-[190px] rotate-6 rounded-[2rem] bg-slate-950 p-1.5 shadow-xl ring-1 ring-slate-900/10 transition-all duration-500 hover:z-30 hover:scale-105 hover:rotate-0">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/Services UI.jpeg"
                    alt="Services & Helpers UI"
                    width={300}
                    height={610}
                    className="w-full h-auto object-cover"
                    quality={95}
                  />
                </div>
              </div>

              {/* Center Phone */}
              <div className="absolute left-1/2 top-0 w-[190px] lg:w-[200px] -translate-x-1/2 rounded-[2rem] bg-slate-950 p-1.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] ring-1 ring-slate-900/10 transition-all duration-500 z-20 hover:scale-105">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/MySociety.jpeg"
                    alt="My Society Management"
                    width={300}
                    height={610}
                    className="w-full h-auto object-cover"
                    quality={95}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Swipeable Layout */}
            <div className="flex md:hidden w-full gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start px-2">
              <div className="w-[210px] shrink-0 snap-center rounded-[2rem] bg-slate-950 p-1.5 shadow-lg ring-1 ring-slate-900/10">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/MobileUI.jpeg"
                    alt="Resident App Home"
                    width={300}
                    height={610}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-[210px] shrink-0 snap-center rounded-[2rem] bg-slate-950 p-1.5 shadow-xl ring-1 ring-slate-900/10">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/MySociety.jpeg"
                    alt="My Society Management"
                    width={300}
                    height={610}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-[210px] shrink-0 snap-center rounded-[2rem] bg-slate-950 p-1.5 shadow-lg ring-1 ring-slate-900/10">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/Services UI.jpeg"
                    alt="Services & Helpers UI"
                    width={300}
                    height={610}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] font-semibold text-slate-400 md:hidden">
              Swipe to see more app screens
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
