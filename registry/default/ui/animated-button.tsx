"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  children?: React.ReactNode;
  shimmerColor?: string;
  glow?: boolean;
}

export function AnimatedButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.2)",
  glow = true,
  disabled,
  ...props
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      whileHover={prefersReducedMotion || disabled ? {} : { scale: 1.02 }}
      whileTap={prefersReducedMotion || disabled ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      disabled={disabled}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-2xl transition-all disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-950 border border-white/10 dark:border-neutral-200",
        glow && "hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]",
        className
      )}
      {...props}
    >
      {!prefersReducedMotion && (
        <span
          className="absolute inset-0 block h-full w-full -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
          style={
            {
              "--shimmer-color": shimmerColor,
            } as React.CSSProperties
          }
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
