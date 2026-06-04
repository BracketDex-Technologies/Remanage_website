"use client";

import { useRef } from "react";
import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          Welcome to <strong>ReManage Society</strong>. These Terms & Conditions (&quot;Terms&quot;) govern
          your access to and use of the ReManage Society website, resident mobile applications, committee admin panel,
          and security guard terminal applications (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          By creating an account, accessing, or using the Platform, you agree to be bound by these Terms
          and our Privacy Policy. If you are using the Platform on behalf of a residential society, housing society,
          gated community, or resident welfare association (each a &quot;Society&quot;), you represent and warrant
          that you have the authority to bind that Society to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Registration & Accounts",
    content: (
      <>
        <p>
          To use the Platform, you must register and maintain an active account. You agree to provide accurate,
          current, and complete information during registration.
        </p>
        <div className="my-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800">Resident Accounts</span>
            <p className="mt-1 text-xs text-slate-600">
              Linked to specific flat/villa units. Residents are responsible for managing invitees, domestic staff permissions, and dues payments.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800">Committee / Admin Accounts</span>
            <p className="mt-1 text-xs text-slate-600">
              Granted to Society management committees to administer billing, approve announcements, manage staff, and configure security rules.
            </p>
          </div>
        </div>
        <p>
          You are entirely responsible for maintaining the confidentiality of your account credentials and for any
          activities that occur under your account.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "3. Platform Services & Society Control",
    content: (
      <>
        <p>
          ReManage Society provides a SaaS (Software as a Service) platform to automate gate logs, billing, payments, and notices.
          However, you acknowledge that:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li>
            <strong>Physical Security remains local:</strong> ReManage Society provides software. The recruitment,
            conduct, and operation of physical security guards are solely managed by your Society Management Committee.
          </li>
          <li>
            <strong>Roster & Directory data:</strong> The inclusion and verification of residents, flat numbers,
            and staff databases are managed locally by the Society Admins.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "visitor-gate",
    title: "4. Visitor Management & Data Logs",
    content: (
      <>
        <p>
          The Platform logs visitors, delivery personnel, and domestic staff entries based on checks performed at the gate
          and confirmations sent via the resident app.
        </p>
        <p>
          Residents agree to use the visitor approval feature responsibly. Society committees and residents agree that gate log entries
          (including visitor photos, vehicle numbers, and times of entry) are collected for safety and record-keeping purposes
          under the instruction of the Society.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "5. Dues & Payment Processing",
    content: (
      <>
        <p>
          The Platform facilitates the payment of society maintenance dues, amenities bookings, and other charges using third-party
          payment gateway providers (e.g. Razorpay, PayU, Stripe).
        </p>
        <p>
          <strong>Intermediary Role:</strong> ReManage Society is a technology provider and does not collect maintenance funds
          for itself. All funds collected are routed directly to the bank account of your respective Society.
        </p>
        <p>
          <strong>Transaction Failures:</strong> We are not liable for transaction failures, bank settlement delays, or errors
          arising from third-party payment gateways. If you experience payment discrepancies, please contact your Society Committee.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: (
      <>
        <p>
          The Platform, including its source code, design assets, logos, databases, features, and functionality, is and
          remains the exclusive property of ReManage Society and its licensors.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable, revocable license to access the Platform solely
          for residential community administration and communication in accordance with these Terms.
        </p>
      </>
    ),
  },
  {
    id: "limitation",
    title: "7. Limitation of Liability & Disclaimers",
    content: (
      <>
        <p>
          THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED.
        </p>
        <p>
          ReManage Society shall not be liable for any direct, indirect, incidental, special, or consequential damages
          resulting from:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li>Unauthorized visitor entry or security breaches at the physical gate.</li>
          <li>System downtimes, loss of internet connectivity at the guard terminal, or app unavailability.</li>
          <li>Inaccuracies in data entered by residents, visitors, or security personnel.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "8. Governing Law & Jurisdiction",
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict
          of law principles.
        </p>
        <p>
          Any legal action or proceeding arising out of or in connection with these Terms or the Platform shall be subject
          to the exclusive jurisdiction of the courts located in <strong>Pune, Maharashtra, India</strong>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
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
        {/* Header background with smooth gradients */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-28 pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-light),transparent)] opacity-30 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold text-primary border border-orange-100/60 mb-4">
              <Scale className="h-3.5 w-3.5" />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-body">
              Last updated: June 2026. Please read these terms carefully before accessing or using the ReManage Society platform.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
            {/* Sidebar Sticky Navigation */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">On this page</p>
                <nav className="flex flex-col space-y-2">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className="text-left text-xs font-semibold text-slate-600 hover:text-primary transition-colors hover:translate-x-0.5 duration-150"
                    >
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Terms Content Column */}
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

              {/* Glassmorphic Contact Card */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-md">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-lg font-bold">Have questions about our Terms?</h3>
                    <p className="mt-2 text-xs text-slate-350 max-w-md">
                      If you have questions regarding safety protocols, billing agreements, or data storage, please contact our support team.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition-colors shadow-sm"
                  >
                    Contact Support
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
