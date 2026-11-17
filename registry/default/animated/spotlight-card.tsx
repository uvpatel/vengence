
"use client";

import { useMotionTemplate, useMotionValue, useReducedMotion, motion } from "motion/react";
import type { HTMLAttributes, PointerEvent } from "react";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.12)",
  onPointerMove,
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const background = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);

    onPointerMove?.(event);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 ${className}`}
      onPointerMove={prefersReducedMotion ? onPointerMove : handlePointerMove}
      {...props}
    >
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
