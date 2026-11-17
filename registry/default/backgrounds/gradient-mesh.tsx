"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

export interface GradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function GradientMesh({
  children,
  className,
  ...props
}: GradientMeshProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950 text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 50, -30, 0],
                  y: [0, -40, 20, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] h-[450px] w-[450px] rounded-full bg-purple-600/30 blur-[100px]"
        />
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, -60, 40, 0],
                  y: [0, 30, -50, 0],
                  scale: [1, 1.05, 1.15, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/30 blur-[100px]"
        />
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 40, -40, 0],
                  y: [0, 50, -30, 0],
                  scale: [1, 0.9, 1.1, 1],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] left-[20%] h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
