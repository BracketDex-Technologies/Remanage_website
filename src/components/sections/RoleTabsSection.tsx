"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CheckCircle, Home, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { roleTabs, type RoleTabKey } from "@/lib/content";

const tabKeys = Object.keys(roleTabs) as RoleTabKey[];

const tabMeta: Record<RoleTabKey, { icon: typeof Home; hint: string }> = {
  residents: { icon: Home, hint: "Daily living & gate" },
  committee: { icon: Building2, hint: "RWA & treasury" },
};

export function RoleTabsSection() {
  const [activeTab, setActiveTab] = useState<RoleTabKey>("residents");
  const active = roleTabs[activeTab];

  return (
    <section id="for-you" className="bg-background pb-10 pt-6 md:pb-12 md:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          badge="Built for your role"
          title="Residents, owners, and committees — one platform"
          description="Pick a perspective to see the workflows ReManage Society supports out of the box."
          className="max-w-2xl"
        />

        <div className="mt-5 overflow-hidden border border-slate-200 bg-slate-50/80 lg:grid lg:grid-cols-[minmax(0,240px)_1fr]">
          {/* Vertical role selector */}
          <div className="flex border-b border-slate-200 lg:flex-col lg:border-b-0 lg:border-r">
            {tabKeys.map((key) => {
              const meta = tabMeta[key];
              const Icon = meta.icon;
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`relative flex flex-1 items-start gap-3 px-4 py-4 text-left transition-colors lg:flex-none lg:px-5 lg:py-5 ${
                    isActive ? "bg-white" : "hover:bg-white/60"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary lg:bottom-auto lg:left-0 lg:top-0 lg:h-full lg:w-1" />
                  ) : null}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? "bg-primary text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-heading text-sm font-semibold ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {roleTabs[key].title}
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-500">{meta.hint}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="bg-white p-5 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid gap-6 lg:grid-cols-[1fr_minmax(0,300px)] lg:items-start"
              >
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 sm:text-2xl">
                    {active.tagline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.description}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {active.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.2}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dashboard preview screenshot */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                  {activeTab === "residents" ? (
                    <div className="relative">
                      <p className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        Resident app preview
                      </p>
                      <Image
                        src="/images/resident-app-preview.png"
                        alt="Resident mobile app — visitor approvals, bill payments, quick actions"
                        width={400}
                        height={700}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <p className="bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        Committee dashboard preview
                      </p>
                      <Image
                        src="/images/committee-dashboard-preview.png"
                        alt="Committee dashboard — collection progress, expenses, notice delivery"
                        width={600}
                        height={500}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
