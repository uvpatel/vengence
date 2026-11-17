"use client";

import { useState } from "react";
import {
  IconTerminal2,
  IconBrandReact,
  IconEye,
  IconPalette,
  IconCode,
  IconCheck,
  IconCopy,
  IconSparkles,
} from "@tabler/icons-react";

export function DeveloperExperience() {
  const [motionReduced, setMotionReduced] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopyCli = async () => {
    try {
      await navigator.clipboard.writeText("bunx shadcn@latest add @vengence/spotlight-card");
      setCopiedCli(true);
      setTimeout(() => setCopiedCli(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-20 md:py-28 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0075DE]/20 bg-[#0075DE]/10 px-3 py-1 text-xs font-medium text-[#62AEF0] mb-3">
            <IconSparkles className="h-3.5 w-3.5" />
            <span>Developer Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Designed for developers. Built for ownership.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-[24px]">
            No bloated npm dependencies. No locked black boxes. You get clean, typed source code that lives directly inside your repository.
          </p>
        </div>

        {/* Bento Grid (16px card radius as per design.md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Direct CLI Installation (Large 2-column card) */}
          <div className="lg:col-span-2 flex flex-col justify-between rounded-[16px] border border-border bg-surface p-6 sm:p-8 shadow-sm transition-all hover:border-[#0075DE]/40">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#62AEF0]">
                <IconTerminal2 className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  shadcn CLI Registry
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Direct CLI Installation
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                Add components directly to your workspace using your favorite package manager. The source code is placed into your components directory ready for immediate customization.
              </p>
            </div>

            {/* Interactive Terminal Demonstration */}
            <div className="mt-6 rounded-[12px] border border-border bg-surface-elevated p-4 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F77463]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B18164]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2A9D99]" />
                  <span className="text-[11px] text-muted-foreground ml-2">bash</span>
                </div>
                <button
                  onClick={handleCopyCli}
                  className="flex items-center gap-1 rounded-[6px] bg-surface px-2 py-0.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors border border-border"
                >
                  {copiedCli ? (
                    <>
                      <IconCheck className="h-3 w-3 text-[#2A9D99]" />
                      <span className="text-[#2A9D99]">Copied</span>
                    </>
                  ) : (
                    <>
                      <IconCopy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1.5 text-[11px] sm:text-xs text-foreground/90 leading-relaxed">
                <p className="flex items-center gap-2">
                  <span className="text-[#62AEF0] select-none">$</span>
                  <span>bunx shadcn@latest add @vengence/spotlight-card</span>
                </p>
                <p className="text-muted-foreground">
                  ✔ Resolving component from https://vengence-rho.vercel.app/r...
                </p>
                <p className="text-[#2A9D99]">
                  ✔ Installed @vengence/spotlight-card → src/components/ui/spotlight-card.tsx
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: React 19 & Next.js 16 Compatibility */}
          <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface p-6 sm:p-8 shadow-sm transition-all hover:border-[#0075DE]/40">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#62AEF0]">
                <IconBrandReact className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Modern Runtime
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                React 19 & Next.js 16
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Tested against modern React 19 primitives, Server Components by default, and Turbopack builds.
              </p>
            </div>

            {/* Visual Architecture Badge Stack */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center justify-between rounded-[8px] border border-border bg-surface-elevated px-3.5 py-2 text-xs">
                <span className="font-medium text-foreground">Server Components</span>
                <span className="rounded-[4px] bg-[#2A9D99]/10 px-2 py-0.5 text-[10px] font-mono text-[#2A9D99] border border-[#2A9D99]/20">
                  Zero Bundle Cost
                </span>
              </div>
              <div className="flex items-center justify-between rounded-[8px] border border-border bg-surface-elevated px-3.5 py-2 text-xs">
                <span className="font-medium text-foreground">Turbopack Verified</span>
                <span className="rounded-[4px] bg-[#455DD3]/15 px-2 py-0.5 text-[10px] font-mono text-[#62AEF0] border border-[#455DD3]/30">
                  Sub-second HMR
                </span>
              </div>
              <div className="flex items-center justify-between rounded-[8px] border border-border bg-surface-elevated px-3.5 py-2 text-xs">
                <span className="font-medium text-foreground">Partial Prerendering</span>
                <span className="rounded-[4px] bg-[#0075DE]/10 px-2 py-0.5 text-[10px] font-mono text-[#0075DE] border border-[#0075DE]/20">
                  Ready
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Accessible Animations with Reduced-Motion Fallback */}
          <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface p-6 sm:p-8 shadow-sm transition-all hover:border-[#0075DE]/40">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#2A9D99]">
                <IconEye className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Accessibility
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Accessible Motion
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Every animated component observes user accessibility settings via <code className="text-[#62AEF0] font-mono">useReducedMotion()</code>.
              </p>
            </div>

            {/* Interactive Toggle Demo */}
            <div className="mt-6 rounded-[12px] border border-border bg-surface-elevated p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">
                  Reduced Motion Mode
                </span>
                <button
                  onClick={() => setMotionReduced(!motionReduced)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    motionReduced ? "bg-[#455DD3]" : "bg-border"
                  }`}
                  aria-label="Toggle reduced motion simulation"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      motionReduced ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-3.5 flex items-center justify-center p-3 rounded-[8px] border border-border bg-surface text-center">
                <span
                  className={`text-xs font-mono transition-all ${
                    motionReduced
                      ? "text-[#F77463] font-semibold"
                      : "text-[#62AEF0] animate-pulse"
                  }`}
                >
                  {motionReduced
                    ? "✓ Animations gracefully settled"
                    : "⚡ Full 60fps spring transitions"}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Tailwind CSS v4 Native Tokens (Notion palette) */}
          <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface p-6 sm:p-8 shadow-sm transition-all hover:border-[#0075DE]/40">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#F77463]">
                <IconPalette className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  CSS Engine
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Tailwind CSS v4
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Modern CSS variables and <code className="text-[#62AEF0] font-mono">@theme inline</code> with zero configuration file bloat.
              </p>
            </div>

            {/* Visual Token Swatches from DESIGN.md */}
            <div className="mt-6 space-y-2 rounded-[12px] border border-border bg-surface-elevated p-4 font-mono text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">--background</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded border border-border bg-[#191918]" />
                  <span className="text-foreground">#191918</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">--primary-btn</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded border border-[#455DD3]/50 bg-[#455DD3]" />
                  <span className="text-[#62AEF0]">#455DD3</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">--secondary-btn</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded border border-[#213183]/50 bg-[#213183]" />
                  <span className="text-foreground">#213183</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Customizable Source Code */}
          <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface p-6 sm:p-8 shadow-sm transition-all hover:border-[#0075DE]/40">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#B18164]">
                <IconCode className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Zero Lock-in
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                100% Code Ownership
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                The code is copied into your project. Tweak the markup, change the spring curves, or edit styles without restriction.
              </p>
            </div>

            {/* Visual File Tree Mockup */}
            <div className="mt-6 rounded-[12px] border border-border bg-surface-elevated p-3.5 font-mono text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1.5 text-foreground mb-1.5">
                <span className="text-[#62AEF0]">📁</span>
                <span>src/components/ui/</span>
              </div>
              <div className="pl-4 space-y-1 text-[10px]">
                <p className="text-[#62AEF0] flex items-center justify-between">
                  <span>📄 spotlight-card.tsx</span>
                  <span className="text-[9px] bg-[#455DD3]/15 text-[#62AEF0] px-1 rounded">you own</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>📄 magnetic-button.tsx</span>
                  <span className="text-[9px] bg-surface px-1 rounded">you own</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>📄 card-3d.tsx</span>
                  <span className="text-[9px] bg-surface px-1 rounded">you own</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
