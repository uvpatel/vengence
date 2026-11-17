import Link from "next/link";
import {
  IconArrowRight,
  IconBrandGithub,
  IconLayersSubtract,
  IconBolt,
  IconTerminal,
} from "@tabler/icons-react";
import { ComponentPreviewRenderer } from "@/components/previews/component-preview-renderer";
import { getAllComponents } from "@/lib/registry";

export default function Home() {
  const components = getAllComponents();
  const featured = components.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-[100%] bg-indigo-500/10 blur-[130px] dark:bg-purple-600/15" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3.5 py-1 text-xs font-medium text-neutral-800 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>v1.0 is here — shadcn registry enabled</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl sm:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            Build with{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              expressive motion
            </span>{" "}
            and zero lock-in.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            A production-ready React component library uniting the modular distribution of{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-semibold">shadcn/ui</span>{" "}
            with the visual creativity of{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-semibold">Aceternity</span>.
          </p>

          {/* Quick CLI Installation Snippet */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-neutral-200 p-2 shadow-xl flex items-center justify-between font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-3 overflow-x-auto">
              <span className="text-neutral-600 select-none">$</span>
              <span className="text-neutral-300">bunx shadcn@latest add @vengence/spotlight-card</span>
            </div>
            <Link
              href="/docs/cli"
              className="shrink-0 rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 text-xs text-white transition-colors"
            >
              Registry
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 transition-colors"
            >
              <span>Explore 20+ Components</span>
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>Documentation</span>
            </Link>
            <Link
              href="https://github.com/urvilpatel/vengence-ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-4 py-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>

        {/* Live Interactive Showcase Showcase Grid */}
        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 block">
                  Interactive Spotlight
                </span>
                <ComponentPreviewRenderer slug="spotlight-card" />
              </div>

              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 block">
                  Magnetic Physics
                </span>
                <ComponentPreviewRenderer slug="magnetic-button" />
              </div>

              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 block">
                  3D Tilt Interaction
                </span>
                <ComponentPreviewRenderer slug="card-3d" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components Grid */}
      <section className="py-20 bg-neutral-50/30 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                Component Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
                Handcrafted for modern apps
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Discover spotlight cards, magnetic triggers, fluid docks, and atmospheric backgrounds.
              </p>
            </div>
            <Link
              href="/components"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <span>View all 20+ components</span>
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <Link
                key={item.slug}
                href={`/components/${item.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      View docs →
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono">@vengence/{item.slug}</span>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Install</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Architectural Features */}
      <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Built on battle-tested standards
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Designed for performance, developer autonomy, and smooth integration into any React or Next.js 16 project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 mb-4">
                <IconTerminal className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Direct CLI Distribution</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Install components directly via standard shadcn commands or direct URLs. You own the code in your repository.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 mb-4">
                <IconBolt className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">React 19 & Next.js 16</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Tested with modern React 19 primitives, Server Components by default, and Tailwind CSS v4 design variables.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 mb-4">
                <IconLayersSubtract className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Accessible & Reduced Motion</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Every animated component automatically checks user motion preferences and degrades gracefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Quickstart Section */}
      <section className="py-20 bg-neutral-50/50 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Fast Setup</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">Get up and running in seconds</h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-500">Step 1</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Initialize shadcn in your project</h3>
                <p className="text-xs text-neutral-500">Configure your project with Tailwind CSS and path aliases.</p>
              </div>
              <div className="w-full sm:w-auto rounded-xl bg-neutral-950 px-4 py-2 font-mono text-xs text-neutral-300">
                bunx shadcn@latest init
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-500">Step 2</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Add the Vengence UI registry</h3>
                <p className="text-xs text-neutral-500">Register the remote namespace for automatic discovery.</p>
              </div>
              <div className="w-full sm:w-auto rounded-xl bg-neutral-950 px-4 py-2 font-mono text-xs text-neutral-300">
                bunx shadcn@latest add @vengence/spotlight-card
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-500">Step 3</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Import and customize</h3>
                <p className="text-xs text-neutral-500">Import component directly from your own components folder.</p>
              </div>
              <div className="w-full sm:w-auto rounded-xl bg-neutral-950 px-4 py-2 font-mono text-xs text-neutral-300">
                {"import { SpotlightCard } from '@/components/ui/spotlight-card'"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
