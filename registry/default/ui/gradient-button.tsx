"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface GradientButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  children?: React.ReactNode;
  gradient?: string;
  variant?: "solid" | "bordered";
}

export function GradientButton({
  children,
  className,
  gradient = "from-indigo-500 via-purple-500 to-pink-500",
  variant = "bordered",
  disabled,
  ...props
}: GradientButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === "solid") {
    return (
      <motion.button
        whileHover={prefersReducedMotion || disabled ? {} : { scale: 1.02 }}
        whileTap={prefersReducedMotion || disabled ? {} : { scale: 0.98 }}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all disabled:opacity-50 active:scale-95",
          gradient,
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={prefersReducedMotion || disabled ? {} : { scale: 1.02 }}
      whileTap={prefersReducedMotion || disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] font-medium transition-all disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r transition-all duration-300 group-hover:opacity-100 opacity-70 blur-[1px]",
          gradient
        )}
      />
      <span className="relative flex items-center gap-2 rounded-[11px] bg-neutral-950 px-5 py-2.5 text-sm text-neutral-100 transition-colors duration-200 group-hover:bg-neutral-900 dark:bg-neutral-900 dark:group-hover:bg-neutral-800">
        {children}
      </span>
    </motion.button>
  );
}
