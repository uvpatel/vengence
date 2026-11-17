"use client";

import Link from "next/link";
import { useState } from "react";
import {
  IconArrowRight,
  IconBrandGithub,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconBook,
  IconTerminal2,
  IconBolt,
  IconBrandReact,
  IconLayersSubtract,
  IconCursorText,
} from "@tabler/icons-react";
import { SpotlightCard } from "../../../registry/default/ui/spotlight-card";
import { BorderBeam } from "../../../registry/default/animated/border-beam";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const command = "bunx shadcn@latest add @vengence/spotlight-card";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Subtle Atmospheric Illumination */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#455DD3]/15 via-[#213183]/10 to-transparent blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Registry Status Badge (Notion Teal #2A9D99) */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-foreground shadow-xs mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#2A9D99] animate-pulse" />
          <span className="text-muted-foreground">v1.0 is live</span>
          <span className="text-border">•</span>
          <span className="font-medium text-foreground">shadcn registry enabled</span>
          <IconSparkles className="h-3.5 w-3.5 text-[#62AEF0]" />
        </div>

        {/* Headline: NotionInter weight 700 with letter-spacing -2.125px */}
        <h1 className="mx-auto max-w-4xl text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-[-2.125px] text-foreground leading-[1.05]">
          Build interfaces that{" "}
          <span className="bg-gradient-to-r from-[#62AEF0] via-[#455DD3] to-[#F77463] bg-clip-text text-transparent">
            move.
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-[24px]">
          Expressive React components, thoughtful interactions, and complete source-code ownership.
        </p>

        {/* Action CTAs: Styled with Notion Primary (#455DD3) and Secondary (#213183) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/components"
            className="btn-primary group h-10 px-5 text-sm font-medium shadow-sm transition-all hover:bg-[#3B50BD]"
          >
            <span>Explore Components</span>
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/docs"
            className="btn-secondary h-10 px-5 text-sm font-medium transition-all hover:bg-[#1A2768]"
          >
            <IconBook className="h-4 w-4" />
            <span>Documentation</span>
          </Link>

          <Link
            href="https://github.com/urvilpatel/vengence-ui"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-10 rounded-[8px] border border-border bg-surface px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-elevated"
          >
            <IconBrandGithub className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </div>

        {/* One-Click Copy Installation Command (4px grid, 8px radius) */}
        <div className="mx-auto mt-8 max-w-lg">
          <div className="group relative flex items-center justify-between rounded-[8px] border border-border bg-surface px-4 py-2.5 shadow-sm transition-all hover:border-[#0075DE]/40">
            <div className="flex items-center gap-2.5 overflow-x-auto text-left font-mono text-xs sm:text-sm">
              <IconTerminal2 className="h-4 w-4 shrink-0 text-[#62AEF0]" />
              <span className="text-muted-foreground select-none">$</span>
              <span className="text-foreground tracking-tight whitespace-nowrap">
                {command}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="ml-3 shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-foreground transition-all hover:border-[#0075DE]/50 hover:bg-surface active:scale-95"
              aria-label="Copy installation command"
            >
              {copied ? (
                <>
                  <IconCheck className="h-3.5 w-3.5 text-[#2A9D99]" />
                  <span className="text-[#2A9D99] text-[11px] font-mono">Copied</span>
                </>
              ) : (
                <>
                  <IconCopy className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground text-[11px] font-mono">Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="mt-2.5 flex items-center justify-center gap-3 text-[11px] text-muted-foreground">
            <span>Compatible with bun, npm, pnpm & yarn</span>
            <span>•</span>
            <Link
              href="/docs/cli"
              className="text-[#62AEF0] hover:underline underline-offset-2 transition-colors"
            >
              CLI Registry docs
            </Link>
          </div>
        </div>

        {/* Distinctive Visual Composition: 16px radius cards on #191918 canvas */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-[16px] border border-border bg-surface p-4 sm:p-6 shadow-2xl overflow-hidden">
            <BorderBeam size={220} duration={12} colorFrom="#455DD3" colorTo="#62AEF0" />

            {/* Inner Stage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Left Column: Tech Pillars */}
              <div className="md:col-span-4 flex flex-col gap-3 text-left">
                <div className="rounded-[8px] border border-border bg-surface-elevated p-3.5 transition-all hover:border-[#0075DE]/30">
                  <div className="flex items-center gap-2 text-[#62AEF0] mb-1">
                    <IconBrandReact className="h-4 w-4" />
                    <span className="text-xs font-bold text-foreground">React 19 & Next.js 16</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Native Server Component distribution with zero unnecessary client hydration.
                  </p>
                </div>

                <div className="rounded-[8px] border border-border bg-surface-elevated p-3.5 transition-all hover:border-[#0075DE]/30">
                  <div className="flex items-center gap-2 text-[#2A9D99] mb-1">
                    <IconBolt className="h-4 w-4" />
                    <span className="text-xs font-bold text-foreground">motion/react Engine</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Butter-smooth 60fps springs with automatic reduced-motion accessibility.
                  </p>
                </div>
              </div>

              {/* Center Column: Live Interactive Spotlight Showcase Card */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <SpotlightCard
                  spotlightColor="rgba(69, 93, 211, 0.25)"
                  spotlightSize={300}
                  className="rounded-[16px] border border-border bg-surface-elevated p-5 text-left shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#0075DE]/10 px-2 py-0.5 text-[10px] font-mono font-medium text-[#62AEF0] border border-[#0075DE]/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#62AEF0] animate-ping" />
                      Live Stage
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      v1.0.0
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    Spotlight Card Surface
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Pointer-tracked radial lighting gradient responds continuously to cursor movement.
                  </p>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#62AEF0]">@vengence/spotlight-card</span>
                    <span className="text-muted-foreground font-mono">r: 300px</span>
                  </div>
                </SpotlightCard>
              </div>

              {/* Right Column: Code Ownership & CSS Tokens */}
              <div className="md:col-span-3 flex flex-col gap-3 text-left">
                <div className="rounded-[8px] border border-border bg-surface-elevated p-3.5 transition-all hover:border-[#0075DE]/30">
                  <div className="flex items-center gap-2 text-[#F77463] mb-1">
                    <IconLayersSubtract className="h-4 w-4" />
                    <span className="text-xs font-bold text-foreground">100% Code Ownership</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Files live in your project. No locked npm black box.
                  </p>
                </div>

                <div className="rounded-[8px] border border-border bg-surface-elevated p-3.5 transition-all hover:border-[#0075DE]/30">
                  <div className="flex items-center gap-2 text-[#B18164] mb-1">
                    <IconCursorText className="h-4 w-4" />
                    <span className="text-xs font-bold text-foreground">Tailwind CSS v4</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Pure CSS theme tokens with zero config file bloat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
