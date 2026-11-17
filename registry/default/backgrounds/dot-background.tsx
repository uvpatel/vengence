import { cn } from "@/lib/utils";
import React from "react";

export interface DotBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  dotSize?: number;
  spacing?: number;
  mask?: "radial" | "none";
}

export function DotBackground({
  children,
  className,
  dotSize = 1.5,
  spacing = 24,
  mask = "radial",
  ...props
}: DotBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-white dark:bg-neutral-950 overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          mask === "radial" &&
            "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        )}
        style={{
          backgroundImage: `radial-gradient(#d1d5db ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
