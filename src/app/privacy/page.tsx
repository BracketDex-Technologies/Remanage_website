"use client";

import { useRef } from "react";
import { Shield, Lock, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "overview",
    title: "1. Overview & Data Controller",
    content: (
      <>
        <p>
          At <strong>ReManage Society</strong>, we respect your privacy and are committed to protecting your personal data.
          This Privacy Policy explains how we collect, use, store, and share information when you use our website,
          resident app, admin panels, and security guard terminal software (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          <strong>Role of the Resident Welfare Association (RWA):</strong> Under the Digital Personal Data Protection (DPDP) Act 2023
          and relevant data laws, your Society (the Management Committee / RWA) acts as the <strong>Data Fiduciary (Data Controller)</strong>
          determining the purposes and rules of security logging and resident directories. ReManage Society acts as a <strong>Data Processor</strong>
          providing the digital infrastructure to store and manage this data securely under instructions from the Society.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "2. Information We Collect",
    content: (
      <>
        <p>We process personal data to verify entries, secure the gated community, and enable billing. This includes:</p>
        <div className="my-4 space-y-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800 flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-primary" />
              Resident Directory Profile
            </span>
            <p className="mt-1 text-xs text-slate-600">
              Names, email addresses, mobile numbers, vehicle registration numbers, flat/villa numbers, and list of family members.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800 flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-650" />
              Visitor &amp; Gate Entry Logs
            </span>
            <p className="mt-1 text-xs text-slate-600">
              Visitor names, phone numbers, vehicle registration numbers, visitor photos (taken at the gate terminal),
              accompanying persons count, purpose of visit (e.g. delivery, guest, cab), and entry/exit timestamps.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800 flex items-center gap-2">
              <Lock className="h-4 w-4 text-cyan-600" />
              Payment &amp; Billing Data
            </span>
            <p className="mt-1 text-xs text-slate-600">
              Invoices, payment logs, transaction amounts, maintenance dues history. <em>We do not store complete credit card or net banking credentials; all card data is securely tokenized and handled directly by our certified PCI-DSS payment gateways.</em>
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "usage",
    title: "3. How We Use Your Data",
    content: (
      <>
        <p>The information is processed solely for community safety and management operations, including:</p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li>Sending push notifications to residents to approve or deny visitor entry in real-time.</li>
          <li>Maintaining digital visitor registers to replace insecure paper logbooks at the security gate.</li>
          <li>Generating monthly maintenance invoices, processing dues, and logging utility billing records.</li>
          <li>Broadcasting announcements, notifications, and meeting reminders from the Society Committee.</li>
          <li>Facilitating SOS emergency alerts from residents to the guard gate or community administrators.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "4. DPDP Act 2023 & Legitimate Use",
    content: (
      <>
        <p>
          For residents and staff, personal data is processed based on <strong>explicit consent</strong> given during onboarding.
          For visitors and delivery agents, gate logs and photographs are collected under <strong>legitimate use</strong> for safety,
          orderly entry, and security verification of private property as authorized by the respective Housing Society.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. Data Sharing & Third-Parties",
    content: (
      <>
        <p><strong>We do not sell, rent, or lease resident database logs to advertising companies.</strong> Data is shared only with:</p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li>
            <strong>Your Society Administration:</strong> Committee members have access to guard logs, dues lists, and resident directories.
          </li>
          <li>
            <strong>Integrated Service Partners:</strong> Delivery integrations (e.g. food, e-commerce) to pre-approve deliveries and reduce guard calls.
          </li>
          <li>
            <strong>Payment Intermediaries:</strong> RBI-compliant payment gateway providers to settle maintenance transactions securely.
          </li>
          <li>
            <strong>Law Enforcement:</strong> If officially requested under compliance with legal warrants, security logs may be shared with authorities.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention & Archiving",
    content: (
      <>
        <p>
          Visitor photographs and gate entry log records are kept for a limited period (typically <strong>180 days</strong>) to assist
          in any post-event investigations, after which they are automatically archived or permanently deleted, unless a longer
          retention period is requested in writing by the Society Committee for security compliance.
        </p>
        <p>
          Resident profiles and billing history are retained for the active duration of the society&apos;s contract with ReManage Society,
          or until the resident moves out and requests account deletion.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Security Measures",
    content: (
      <>
        <p>We deploy robust security standards to safeguard database logs:</p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li><strong>Encryption:</strong> Encryption of all data in transit via Secure Socket Layer (HTTPS) and encryption at rest for critical fields.</li>
          <li><strong>Role-Based Access Control:</strong> Strict database separation; security guards at the gate cannot view resident transaction history, phone numbers of residents are masked, and database access is limited to authorized committee members.</li>
          <li><strong>Infrastructure:</strong> Audited cloud infrastructure hosted in secure, compliant data centers in India.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rights",
    title: "8. User Rights",
    content: (
      <>
        <p>You have the following rights regarding your personal information, which can be exercised through your Society Admin panel or support request:</p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li><strong>Access &amp; Portability:</strong> Obtain details on what data is stored about your unit.</li>
          <li><strong>Correction:</strong> Rectify spelling, phone details, or vehicle numbers.</li>
          <li><strong>Consent Withdrawal:</strong> Withdraw consent for profile directory listings, subject to society bylaws requiring flat records.</li>
          <li><strong>Right to Deletion:</strong> Request account erasure upon selling or moving out of the flat.</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    const element = contentRefs.current[id];
    if (element) {
      const yOffset = -90; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50/30 text-slate-800 transition-colors duration-300">
        {/* Header with smooth gradients */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-28 pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-light),transparent)] opacity-30 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-600 border border-orange-100/60 mb-4">
              <Lock className="h-3.5 w-3.5" />
              <span>Data Protection</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-body">
              Last updated: June 2026. Learn how we handle logs, security details, and payments in compliance with the DPDP Act.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
            {/* Sidebar Sticky Navigation */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Policy Navigation</p>
                <nav className="flex flex-col space-y-2">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className="text-left text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors hover:translate-x-0.5 duration-150"
                    >
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3 space-y-12">
              <div className="rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-10 shadow-sm font-body text-sm leading-relaxed text-slate-600 space-y-8">
                {sections.map((sec) => (
                  <div
                    key={sec.id}
                    ref={(el) => {
                      contentRefs.current[sec.id] = el;
                    }}
                    className="space-y-3 pt-6 first:pt-0 border-t border-slate-100 first:border-t-0"
                  >
                    <h2 className="font-display text-lg font-bold text-slate-900">{sec.title}</h2>
                    <div className="space-y-4 text-slate-600 font-body">{sec.content}</div>
                  </div>
                ))}
              </div>

              {/* Contact Card */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-md">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-lg font-bold">Privacy Queries?</h3>
                    <p className="mt-2 text-xs text-slate-350 max-w-md">
                      For data corrections, request logs archive access, or general privacy concerns, get in touch with our Data Protection Officer.
                    </p>
                  </div>
                  <Link
                    href="mailto:demo@remanagesociety.com"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition-colors shadow-sm"
                  >
                    Email DPO
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
