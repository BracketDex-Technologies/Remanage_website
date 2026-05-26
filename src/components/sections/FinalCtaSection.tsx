"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-r from-primary via-blue-600 to-indigo-700 py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="max-w-xl space-y-2">
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              Ready to simplify society operations?
            </h2>
            <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
              Book a walkthrough for your committee or download the APK for residents.
            </p>
            <Link
              href={siteConfig.links.register}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Create your society workspace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[320px]">
            <Button asChild size="lg" variant="secondary" className="w-full justify-center">
              <Link href="/contact">
                Book a demo
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full justify-center bg-orange-500 text-white hover:bg-orange-600"
            >
              <a href={siteConfig.links.apk}>
                <Download />
                Download APK
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
