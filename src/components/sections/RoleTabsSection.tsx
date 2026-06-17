"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CheckCircle, Home, Shield, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { roleTabs, type RoleTabKey } from "@/lib/content";

const tabKeys = Object.keys(roleTabs) as RoleTabKey[];

const tabMeta: Record<
  RoleTabKey,
  {
    icon: typeof Home;
    hint: string;
    gradient: string;
    previewLabel: string;
    previewGradient: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    deviceType: "mobile" | "desktop";
  }
> = {
  residents: {
    icon: Home,
    hint: "Daily living & gate",
    gradient: "from-orange-500 to-amber-500",
    previewLabel: "Resident App",
    previewGradient: "from-orange-500 to-orange-600",
    image: "/images/MobileUI.jpeg",
    imageAlt:
      "Resident mobile app — visitor approvals, bill payments, quick actions",
    imageWidth: 400,
    imageHeight: 700,
    deviceType: "mobile",
  },
  committee: {
    icon: Building2,
    hint: "RWA & treasury",
    gradient: "from-violet-500 to-purple-500",
    previewLabel: "Committee Dashboard",
    previewGradient: "from-violet-500 to-violet-600",
    image: "/images/DesktopViewChairman.png",
    imageAlt:
      "Committee dashboard — collection progress, expenses, notice delivery",
    imageWidth: 600,
    imageHeight: 500,
    deviceType: "desktop",
  },
  security: {
    icon: Shield,
    hint: "Gate terminal & logs",
    gradient: "from-emerald-500 to-teal-500",
    previewLabel: "Guard Terminal",
    previewGradient: "from-emerald-500 to-emerald-600",
    image: "/images/Watchemen_Ui.jpeg",
    imageAlt:
      "Security guard terminal app — check-ins, resident approvals, SOS alerts",
    imageWidth: 400,
    imageHeight: 700,
    deviceType: "mobile",
  },
};

export function RoleTabsSection() {
  const [activeTab, setActiveTab] = useState<RoleTabKey>("residents");
  const active = roleTabs[activeTab];
  const meta = tabMeta[activeTab];

  return (
    <section id="for-you" className="bg-background pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          badge="Built for your role"
          title="Residents, owners, and committees — one platform"
          description="Pick a perspective to see the workflows ReManage Society supports out of the box."
          className="max-w-2xl"
        />

        {/* Tabs Row */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabKeys.map((key) => {
            const t = tabMeta[key];
            const Icon = t.icon;
            const isActive = activeTab === key;

            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-950/20"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-br ${t.gradient} text-white`
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <span>{roleTabs[key].title}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeRoleDot"
                    className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-orange-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-sm"
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Text Content */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
                  <Sparkles className="h-3 w-3" />
                  {meta.hint}
                </div>

                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {active.tagline}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {active.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {active.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.15, duration: 0.3 }}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                        strokeWidth={2.2}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Screenshot Preview */}
              <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-orange-50/30 p-6 sm:p-8 lg:p-10">
                {/* Background glow */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-[0.07] bg-gradient-to-br ${meta.gradient}`}
                />

                {/* Decorative dots pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "radial-gradient(circle, #1e293b 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />

                {meta.deviceType === "mobile" ? (
                  /* Mobile Device Frame */
                  <motion.div
                    initial={{ rotate: -3, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-[200px] pb-10 sm:w-[220px] lg:w-[240px]"
                  >
                    {/* Device frame — no notch so app top bar is visible */}
                    <div className="rounded-[2.5rem] bg-slate-900 p-2 shadow-2xl shadow-slate-900/30 ring-1 ring-slate-800">
                      <div className="overflow-hidden rounded-[2rem] bg-white">
                        <Image
                          src={meta.image}
                          alt={meta.imageAlt}
                          width={meta.imageWidth}
                          height={meta.imageHeight}
                          className="h-auto w-full object-cover"
                          quality={95}
                        />
                      </div>
                    </div>
                    {/* Label badge — shifted below phone bottom edge */}
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r ${meta.previewGradient} px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg`}
                    >
                      {meta.previewLabel}
                    </div>
                  </motion.div>
                ) : (
                  /* Desktop Device Frame */
                  <motion.div
                    initial={{ scale: 0.93 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-full max-w-[520px]"
                  >
                    <div className="overflow-hidden rounded-xl bg-slate-900 p-1.5 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-800">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-2 px-3 py-2">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                        </div>
                        <div className="ml-3 h-5 flex-1 rounded-md bg-slate-800 px-3 flex items-center">
                          <span className="text-[9px] text-slate-500">
                            remanage.app/committee
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-b-lg bg-white">
                        <Image
                          src={meta.image}
                          alt={meta.imageAlt}
                          width={meta.imageWidth}
                          height={meta.imageHeight}
                          className="h-auto w-full object-cover"
                          quality={95}
                        />
                      </div>
                    </div>
                    {/* Label badge */}
                    <div
                      className={`absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r ${meta.previewGradient} px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg`}
                    >
                      {meta.previewLabel}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
