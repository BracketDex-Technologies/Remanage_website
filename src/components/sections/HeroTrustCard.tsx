"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { TrustPillarTheme } from "@/lib/content";

const spring = { stiffness: 320, damping: 24 };

type HeroTrustCardProps = {
  icon: LucideIcon;
  label: string;
  description: string;
  theme: TrustPillarTheme;
  index: number;
  reduceMotion: boolean | null;
};

export function HeroTrustCard({
  icon: Icon,
  label,
  description,
  theme,
  index,
  reduceMotion,
}: HeroTrustCardProps) {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), spring);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), spring);
  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), spring);
  const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), spring);
  const contentX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), spring);
  const contentY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), spring);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const parallaxStyle = reduceMotion
    ? undefined
    : {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d" as const,
      };

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.07, duration: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={parallaxStyle}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className={`group relative overflow-hidden rounded-xl border shadow-md shadow-slate-900/10 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:shadow-lg ${theme.card} ${theme.hoverBorder} ${theme.hoverShadow}`}
    >
      <span
        className={`pointer-events-none absolute -right-6 -top-10 h-28 w-28 rounded-full blur-2xl ${theme.glow}`}
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${theme.topLine} to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        aria-hidden
      />

      <ParallaxLayer
        x={iconX}
        y={iconY}
        disabled={!!reduceMotion}
        className="pointer-events-none absolute inset-0"
      >
        <Icon
          className={`absolute -right-3 -bottom-3 h-24 w-24 sm:h-28 sm:w-28 text-slate-300 transition-colors duration-300 group-hover:${theme.watermark}`}
          strokeWidth={1}
          aria-hidden
        />
      </ParallaxLayer>

      <ParallaxLayer x={contentX} y={contentY} disabled={!!reduceMotion} className="relative z-10 p-5 sm:p-6">
        <div
          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${theme.iconBox}`}
        >
          <Icon className={`h-5 w-5 ${theme.icon}`} strokeWidth={2} aria-hidden />
        </div>
        <h3 className="font-heading text-base font-semibold leading-snug text-slate-900">{label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </ParallaxLayer>
    </motion.article>
  );
}

function ParallaxLayer({
  x,
  y,
  disabled,
  className,
  children,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  disabled: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
