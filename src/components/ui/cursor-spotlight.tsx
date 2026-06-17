"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorSpotlight – a soft glowing orb that follows the cursor.
 * Only rendered on pointer devices (hidden on touch screens via CSS).
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth spring following
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Outer soft glow */}
      <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.07)_0%,rgba(249,115,22,0.03)_40%,transparent_70%)] blur-2xl" />
    </motion.div>
  );
}
