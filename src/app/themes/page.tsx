"use client";

import { useTheme } from "@/components/layout/theme-provider";

export default function ThemesPage() {
  const { resolvedTheme, setTheme } = useTheme();

  const colorTokens = [
    { name: "Background", token: "bg-background", border: "border-border", desc: "Main app background" },
    { name: "Foreground", token: "bg-foreground text-background", border: "border-border", desc: "Primary text and icons" },
    { name: "Card", token: "bg-card text-card-foreground", border: "border-border", desc: "Surface containers & cards" },
    { name: "Muted", token: "bg-muted text-muted-foreground", border: "border-border", desc: "Secondary tags & subtle areas" },
    { name: "Accent", token: "bg-accent text-accent-foreground", border: "border-border", desc: "Interactive hover highlights" },
    { name: "Destructive", token: "bg-destructive text-white", border: "border-destructive", desc: "Danger states and alerts" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Design Tokens
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            Themes & Color Palettes
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Preview the unified OKLCH color system, typography hierarchies, and radius tokens powering Vengence UI.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              resolvedTheme === "light"
                ? "bg-neutral-900 text-white border-neutral-900"
                : "border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-black"
            }`}
          >
            Light Theme
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              resolvedTheme === "dark"
                ? "bg-white text-neutral-950 border-white"
                : "border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            Dark Theme
          </button>
        </div>
      </div>

      {/* Colors Swatches Grid */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
          System Colors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {colorTokens.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 shadow-sm"
            >
              <div
                className={`h-20 w-full rounded-xl border flex items-center justify-center font-mono text-xs font-semibold shadow-inner ${c.token} ${c.border}`}
              >
                {c.name}
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-sm text-neutral-900 dark:text-white">{c.name}</h3>
                <p className="text-xs text-neutral-500 mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Radius System */}
      <section className="my-12 border-t border-neutral-200 dark:border-neutral-800 pt-10">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
          Border Radius Scale
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="rounded-sm border border-neutral-300 dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-900 text-center">
            <span className="text-xs font-mono font-bold">rounded-sm</span>
          </div>
          <div className="rounded-md border border-neutral-300 dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-900 text-center">
            <span className="text-xs font-mono font-bold">rounded-md</span>
          </div>
          <div className="rounded-xl border border-neutral-300 dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-900 text-center">
            <span className="text-xs font-mono font-bold">rounded-xl</span>
          </div>
          <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-900 text-center">
            <span className="text-xs font-mono font-bold">rounded-3xl</span>
          </div>
        </div>
      </section>
    </div>
  );
}
