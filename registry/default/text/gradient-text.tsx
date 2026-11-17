import { cn } from "@/lib/utils";
import React from "react";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  gradient?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  gradient = "from-indigo-500 via-purple-500 to-pink-500",
  animate = true,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-transparent font-bold",
        gradient,
        animate && "bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
