import Link from "next/link";
import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { IconSparkles, IconBolt } from "@tabler/icons-react";

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex">
      <DocsSidebar />

      <main className="flex-1 py-8 md:pl-8 max-w-4xl min-w-0">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Getting Started
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            Introduction
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
            An open-source React component library providing both standard primitives and Aceternity-inspired animated interactions.
          </p>
        </div>

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">What is Vengence UI?</h2>
            <p>
              Vengence UI is not an npm package or bundled runtime framework that bloats your dependencies. Instead, it follows the revolutionary code distribution model popularized by <strong className="text-neutral-950 dark:text-white">shadcn/ui</strong>.
            </p>
            <p>
              You select the exact components you need, copy them into your project with the shadcn CLI or direct registry URL, and retain 100% control over the source code, styling, and animations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Core Pillars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 shadow-sm">
                <h3 className="font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <IconSparkles className="h-4 w-4 text-indigo-500" />
                  <span>Expressive Motion</span>
                </h3>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Magnetic buttons, spotlight cards, continuous border beams, and fluid docks powered by <code className="font-mono text-indigo-400">motion/react</code>.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 shadow-sm">
                <h3 className="font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <IconBolt className="h-4 w-4 text-purple-500" />
                  <span>Zero Vendor Lock-in</span>
                </h3>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Pure TypeScript files copied directly into your codebase. No runtime SDKs or mandatory theme providers required.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Next Steps</h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/docs/installation"
                className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-sm"
              >
                <span className="text-xs font-semibold text-indigo-500">Guide</span>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mt-1">Installation Guide</h3>
                <p className="text-xs text-neutral-500 mt-1">Step-by-step instructions to configure your project.</p>
              </Link>

              <Link
                href="/components"
                className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-sm"
              >
                <span className="text-xs font-semibold text-purple-500">Directory</span>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mt-1">Browse Components</h3>
                <p className="text-xs text-neutral-500 mt-1">Explore all 20 standard and animated components.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
