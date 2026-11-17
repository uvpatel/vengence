import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection({ className }: { className?: string }) {
  return (
    <section className={cn("relative overflow-hidden py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Vengence UI 1.0 is now live</span>
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Elevate your interface with{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            expressive motion
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          The shadcn-compatible React component library combining clean distribution with Aceternity-inspired visual craft.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/components"
            className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 transition-colors"
          >
            Explore Components
          </Link>
          <Link
            href="/docs"
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
