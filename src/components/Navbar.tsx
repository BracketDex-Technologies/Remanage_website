"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Download, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background/95 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl"
      >
        <nav className="flex h-[72px] w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 xl:px-12">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-white">
              <Building2 className="h-5 w-5 text-slate-900" strokeWidth={2.4} />
            </span>
            <span className="font-heading text-xl font-semibold tracking-tight text-slate-900">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:border-emerald-200 hover:text-slate-900 xl:flex"
              aria-label={`WhatsApp ${siteConfig.contact.whatsappDisplay}`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              {siteConfig.contact.whatsappDisplay}
            </a>

            <div className="hidden items-center gap-2 md:flex">
              <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
                <a href={siteConfig.links.apk}>
                  <Download />
                  APK
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/contact">
                  <Sparkles className="fill-slate-900" />
                  Demo
                </Link>
              </Button>
              <Button asChild size="sm">
                <a href={siteConfig.contact.call}>
                  <Phone />
                  Call
                </a>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((c) => !c)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 right-0 top-0 flex w-[88%] max-w-sm flex-col bg-background p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xl font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-lg font-medium ${
                      pathname === link.href ? "bg-slate-900 text-white" : "text-slate-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 pt-6">
                <Button asChild variant="accent" className="w-full">
                  <a href={siteConfig.links.apk} onClick={() => setIsOpen(false)}>
                    <Download />
                    Download APK
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book demo
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
      }`}
    >
      {active ? (
        <motion.span
          layoutId="navbar-active-pill"
          className="absolute inset-0 rounded-full bg-slate-100"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      ) : null}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
