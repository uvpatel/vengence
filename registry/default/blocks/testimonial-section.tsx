import React from "react";
import { cn } from "@/lib/utils";

export function TestimonialSection({ className }: { className?: string }) {
  const testimonials = [
    {
      quote:
        "Vengence UI provides the sweetest spot between shadcn's code ownership and Aceternity's creative visual delight. We dropped 4 components straight into production.",
      author: "Alex Rivera",
      role: "Lead Frontend Engineer",
    },
    {
      quote:
        "Finally a modern component library that works seamlessly with Tailwind v4 and React 19 without version headaches. The magnetic button and spotlight cards are pure art.",
      author: "Sarah Chen",
      role: "Design Engineer",
    },
    {
      quote:
        "Direct CLI installation via bunx shadcn@latest add is so smooth. No bloated packages, just clean, readable TypeScript files.",
      author: "Marcus Vance",
      role: "Fullstack Architect",
    },
  ];

  return (
    <section className={cn("py-20 border-t border-neutral-200 dark:border-neutral-800", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Loved by product teams
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Engineers and designers building standout experiences with Vengence UI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm"
            >
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                <div className="font-semibold text-sm text-neutral-900 dark:text-white">{t.author}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
