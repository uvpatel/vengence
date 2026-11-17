"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.5,
}: TextRevealProps) {
  const words = text.split(" ");
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={cn("inline-block", className)}>{text}</span>;
  }

  return (
    <span className={cn("inline-block flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden whitespace-nowrap mr-[0.25em]">
          <motion.span
            initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration,
              delay: delay + i * 0.08,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
