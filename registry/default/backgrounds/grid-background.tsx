import { cn } from "@/lib/utils";
import React from "react";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  gridSize?: number;
  mask?: "radial" | "none";
}

export function GridBackground({
  children,
  className,
  gridSize = 32,
  mask = "radial",
  ...props
}: GridBackgroundProps) {
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
          "pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          mask === "radial" &&
            "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        )}
        style={{ backgroundSize: `${gridSize}px ${gridSize}px` }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
