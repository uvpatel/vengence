import React from "react";
import { cn } from "@/lib/utils";

export interface SpotlightBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  spotlightColor?: string;
  intensity?: number;
}

export function SpotlightBackground({
  children,
  className,
  spotlightColor = "rgba(120, 119, 198, 0.25)",
  intensity = 1,
  ...props
}: SpotlightBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950 text-white",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-[100%] blur-[120px]"
        style={{
          background: spotlightColor,
          opacity: intensity,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,rgba(10,10,10,0.8)_80%)]" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
