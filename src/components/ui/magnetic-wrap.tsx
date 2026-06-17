"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticWrapProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0–1, how strongly it attracts, default 0.35
}

/**
 * MagneticWrap – adds a magnetic pull effect to any element.
 * The wrapped content smoothly moves toward the cursor when hovered.
 */
export function MagneticWrap({ children, className = "", strength = 0.35 }: MagneticWrapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawX.set((e.clientX - cx) * strength);
      rawY.set((e.clientY - cy) * strength);
    },
    [rawX, rawY, strength]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
