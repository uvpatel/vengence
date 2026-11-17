import React from "react";
import { cn } from "@/lib/utils";

export function FeatureSection({ className }: { className?: string }) {
  const features = [
    {
      title: "One-line CLI Installation",
      description: "Directly import into your projects with bunx shadcn@latest add @vengence/spotlight-card.",
    },
    {
      title: "Pure TypeScript & React 19",
      description: "Strict typings and interfaces with full prop intellisense out of the box.",
    },
    {
      title: "Reduced Motion Respected",
      description: "Gracefully falls back to calm, static states whenever users request reduced motion.",
    },
  ];

  return (
    <section className={cn("py-20 border-t border-neutral-200 dark:border-neutral-800", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Why choose Vengence UI
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            A developer-first component experience crafted for maximum velocity and visual polish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 font-bold text-neutral-900 dark:text-white mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
