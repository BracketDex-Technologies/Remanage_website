"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
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
        className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.22)] backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:h-[72px] lg:px-10 xl:px-12">
          <Link
            href="/"
            className="flex h-16 w-[132px] shrink-0 items-center justify-start overflow-hidden sm:w-[172px] lg:h-[72px]"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={824}
              height={264}
              priority
              className="h-[116px] w-[116px] max-w-none object-contain mix-blend-multiply sm:h-[152px] sm:w-[152px]"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Button asChild variant="ghost" size="sm">
                <a href={siteConfig.links.login}>Sign in</a>
              </Button>
              <Button asChild size="sm">
                <Link href="/contact">Book a demo <ArrowRight /></Link>
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
              className="absolute bottom-0 right-0 top-0 flex w-[88%] max-w-sm flex-col bg-white p-6 shadow-2xl"
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
                <Button asChild variant="outline" className="w-full">
                  <a href={siteConfig.links.login} onClick={() => setIsOpen(false)}>
                    Sign in
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
      className={`relative rounded-full px-3 py-2 text-xs font-semibold transition-colors xl:px-4 xl:text-sm ${
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
