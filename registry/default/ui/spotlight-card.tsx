"use client";

import { useMotionTemplate, useMotionValue, useReducedMotion, motion } from "motion/react";
import type { HTMLAttributes, PointerEvent } from "react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  spotlightSize?: number;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(120, 119, 198, 0.15)",
  spotlightSize = 350,
  onPointerMove,
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const prefersReducedMotion = useReducedMotion();

  const background = useMotionTemplate`
    radial-gradient(
      ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
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

  function handlePointerLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 transition-colors",
        className
      )}
      onPointerMove={prefersReducedMotion ? onPointerMove : handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
