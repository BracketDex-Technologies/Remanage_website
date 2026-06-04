"use client";

import { useRef } from "react";
import { CreditCard, RefreshCw, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "overview",
    title: "1. Scope & Payment Flow",
    content: (
      <>
        <p>
          This Refund and Cancellation Policy governs the payments processed through the <strong>ReManage Society</strong> Platform.
          The Platform facilitates the payment of society maintenance dues, penalties, utility charges, security deposits,
          and facility bookings (e.g. clubhouse, sports courts).
        </p>
        <p>
          <strong>Direct Settlement:</strong> ReManage Society is a technology facilitator. It provides the integration
          with RBI-authorized Payment Gateways (such as Razorpay, PayU, or Stripe). All payments processed through the Platform
          are settled directly into the designated bank account of your respective <strong>Resident Welfare Association (RWA)</strong>
          or Housing Society. ReManage Society does not hold or escrow these funds.
        </p>
      </>
    ),
  },
  {
    id: "dues",
    title: "2. Maintenance Dues & Society Charges",
    content: (
      <>
        <p>
          Maintenance fees, utility bills, and corpus funds are levied directly by the Management Committee of your Society.
          Once maintenance dues are successfully paid through the Platform and a digital receipt is generated:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-2">
          <li><strong>No Cancellation:</strong> Payments for monthly, quarterly, or annual maintenance dues cannot be cancelled once processed.</li>
          <li>
            <strong>Refunds from Society:</strong> Any request for a refund due to overpayment, incorrect flat billing, or unit adjustment
            must be submitted directly to your Society Management Committee. ReManage Society does not have authority to issue refunds
            from the Society&apos;s bank account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "bookings",
    title: "3. Amenity & Event Cancellations",
    content: (
      <>
        <p>
          cancellation rules for clubhouse bookings, guest rooms, swimming pool passes, or local community events are governed
          strictly by the bylaws and rules established by your specific Housing Society.
        </p>
        <p>
          If the Society rules permit amenity cancellation and refund, the refund will be initiated by the Society Administrators.
          Once approved, the refund will be processed back to the resident&apos;s original payment source (bank account, credit card,
          or UPI wallet) via the payment gateway.
        </p>
      </>
    ),
  },
  {
    id: "failed-transactions",
    title: "4. Failed Transactions & Double Debits",
    content: (
      <>
        <p>
          Sometimes, a transaction might fail at the payment gateway or bank end, but funds are debited from the resident&apos;s account.
          This is known as a double debit or bank-end failure.
        </p>
        <div className="my-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800 flex items-center gap-1.5">
              <RefreshCw className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
              Auto-Refund Policy
            </span>
            <p className="mt-1 text-xs text-slate-600">
              For payments that fail to generate a receipt but debit your bank account, the integrated payment gateway will initiate an auto-refund.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <span className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Landmark className="h-4 w-4 text-cyan-600" />
              Settlement Timelines
            </span>
            <p className="mt-1 text-xs text-slate-600">
              Refunds are processed back to the original source (Credit Card, Net Banking, or UPI) within <strong>5 to 7 working days</strong>, subject to your bank&apos;s policies.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "disputes",
    title: "5. Dispute Resolution & Chargebacks",
    content: (
      <>
        <p>
          In the event of double payments resulting from user error (e.g. double-clicking the payment button, or paying twice for the same invoice),
          residents should contact the Society Committee to adjust the excess amount against the next billing cycle.
        </p>
        <p>
          If a resident files a formal chargeback request with their issuing bank, ReManage Society will provide the transaction logs,
          invoice details, and RWA approval documents to the payment gateway to represent the case. Final settlement of the chargeback
          will be governed by RBI guidelines and bank rules.
        </p>
      </>
    ),
  },
];

export default function RefundPage() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold text-primary border border-orange-100/60 mb-4">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Payments &amp; Refunds</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-body">
              Last updated: June 2026. Review rules for maintenance payments, double debits, and processing timelines.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
            {/* Sidebar Sticky Navigation */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Policy Topics</p>
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

              {/* Support Contact */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-md">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-lg font-bold">Transaction Issue?</h3>
                    <p className="mt-2 text-xs text-slate-350 max-w-md">
                      If you have questions about bank settlement status or a transaction ID that did not receive a receipt, please email our billing desk.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition-colors shadow-sm"
                  >
                    Raise Ticket
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
