"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  compact?: boolean;
  dark?: boolean;
  action?: { label: string; href: string };
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  compact = true,
  dark = false,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        compact ? "space-y-2" : "space-y-4",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-xl",
        className
      )}
    >
      {badge ? (
        <p className={cn("text-eyebrow", dark ? "text-orange-300" : "text-primary")}>{badge}</p>
      ) : null}
      <div
        className={cn(
          "flex flex-col gap-3",
          action && align === "left" && "lg:flex-row lg:items-end lg:justify-between lg:gap-8"
        )}
      >
        <div className="space-y-2">
          <h2
            className={cn(
              "font-heading font-semibold tracking-tight",
              compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
              dark ? "text-white" : "text-slate-900"
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                compact ? "text-sm leading-relaxed" : "text-lead",
                dark ? "text-slate-300" : "text-slate-600"
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        {action ? (
          <Link
            href={action.href}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold transition-colors",
              dark ? "text-orange-300 hover:text-white" : "text-primary hover:text-primary-hover"
            )}
          >
            {action.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
}
