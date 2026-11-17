import React from "react";
import { cn } from "@/lib/utils";

export function PricingSection({ className }: { className?: string }) {
  const plans = [
    {
      name: "Open Source",
      price: "$0",
      description: "Everything you need to build top-tier modern web interfaces.",
      features: [
        "All 20+ base and animated components",
        "Direct shadcn CLI registry support",
        "Lifetime updates and improvements",
        "Community GitHub support",
      ],
      popular: true,
      buttonText: "Start Building Free",
      buttonLink: "/components",
    },
    {
      name: "Sponsor",
      price: "$29",
      description: "Support open source development and back upcoming component releases.",
      features: [
        "Priority component requests",
        "Early access to beta templates",
        "Direct creator Discord channel",
        "Backer badge on GitHub",
      ],
      popular: false,
      buttonText: "Sponsor Project",
      buttonLink: "https://github.com/urvilpatel/vengence-ui",
    },
  ];

  return (
    <section className={cn("py-20 border-t border-neutral-200 dark:border-neutral-800", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            100% Free & Open Source
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            No subscriptions. No artificial lock-in. Just clean, installable React components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-8 shadow-sm transition-all",
                plan.popular
                  ? "border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 ring-2 ring-neutral-900 dark:ring-white"
                  : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 dark:bg-white px-3 py-0.5 text-xs font-semibold text-white dark:text-neutral-950 uppercase tracking-wider">
                  Community Choice
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-neutral-500">/forever</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href={plan.buttonLink}
                  className={cn(
                    "block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors shadow-sm",
                    plan.popular
                      ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100"
                      : "border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  )}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
