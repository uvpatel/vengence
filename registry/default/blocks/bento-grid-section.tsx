import React from "react";
import { cn } from "@/lib/utils";

export function BentoGridSection({ className }: { className?: string }) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Engineered for high impact
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Modular bento grid cards packed with interactive spring physics and visual depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">Distribution</span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-2">Zero lock-in shadcn registry</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Every component is directly copied to your source folder. Modify, tweak, and theme directly without runtime dependencies.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-500">Motion</span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-2">Motion 14+ Ready</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Built on motion/react with automatic reduced-motion accessibility.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">Styling</span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-2">Tailwind v4 Native</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              High-performance CSS variables and unified color spaces.
            </p>
          </div>

          <div className="md:col-span-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">Performance</span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-2">Server Components First</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Only interactive widgets include the client directive, preserving Next.js streaming and minimal bundle sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
