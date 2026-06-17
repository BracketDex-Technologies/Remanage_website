"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // degrees of max tilt, default 8
  glare?: boolean;
}

/**
 * TiltCard – wraps children in a 3D perspective tilt effect on mouse move.
 * Includes an optional specular glare highlight.
 */
export function TiltCard({ children, className = "", intensity = 8, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { stiffness: 250, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rawX.set(x);
      rawY.set(y);
      glareX.set(((e.clientX - rect.left) / rect.width) * 100);
      glareY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [rawX, rawY, glareX, glareY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rawX.set(0);
    rawY.set(0);
    glareX.set(50);
    glareY.set(50);
  }, [rawX, rawY, glareX, glareY]);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={`relative ${className}`}
    >
      {children}

      {/* Glare overlay */}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: glareBackground,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </motion.div>
  );
}
