"use client";

import Link from "next/link";
import {
  IconSparkles,
  IconMagnet,
  IconPerspective,
  IconArrowRight,
  IconBolt,
  IconCode,
} from "@tabler/icons-react";
import { SpotlightCard } from "../../../registry/default/ui/spotlight-card";
import { MagneticButton } from "../../../registry/default/animated/magnetic-button";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../../registry/default/animated/card-3d";

export function InteractivePlayground() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0075DE]/20 bg-[#0075DE]/10 px-3 py-1 text-xs font-medium text-[#62AEF0] mb-3">
            <IconSparkles className="h-3.5 w-3.5" />
            <span>Interactive Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Touch, hover, and feel the physics.
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-[24px]">
            Components aren’t just static UI — they respond to intent with purposeful physics, cursor tracking, and fluid transitions.
          </p>
        </div>

        {/* Large Bordered Showcase Container (16px radius as per design.md) */}
        <div className="relative rounded-[16px] border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* Top Inspector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F77463]" />
              <span className="h-3 w-3 rounded-full bg-[#B18164]" />
              <span className="h-3 w-3 rounded-full bg-[#2A9D99]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                playground.vengence.ui — live instances
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#62AEF0] animate-pulse" />
                <span>motion/react spring</span>
              </span>
            </div>
          </div>

          {/* Three Interactive Component Demonstrations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Demo 1: Spotlight Card */}
            <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface-elevated p-5 sm:p-6 transition-all hover:border-[#0075DE]/40">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-[4px] bg-[#0075DE]/10 px-2 py-0.5 text-[11px] font-mono font-medium text-[#62AEF0] border border-[#0075DE]/20">
                    Standard UI
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <IconBolt className="h-3 w-3 text-[#62AEF0]" />
                    <span>Pointer Radial</span>
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  Spotlight Card
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Calculates continuous cursor coordinates to project an ambient radial highlight across the surface.
                </p>
              </div>

              {/* Interactive Demo Area */}
              <div className="mt-6 flex-1 flex flex-col justify-center">
                <SpotlightCard
                  spotlightColor="rgba(69, 93, 211, 0.25)"
                  spotlightSize={280}
                  className="w-full bg-surface border-border p-5 rounded-[12px] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#455DD3]/15 text-[#62AEF0]">
                      <IconSparkles className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded-[4px] border border-border">
                      r: 280px
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    Ambient Illuminator
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Move your mouse across this card to trace the dynamic light cone.
                  </p>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px]">
                    <span className="text-[#62AEF0] font-medium">@vengence/spotlight-card</span>
                    <span className="text-muted-foreground font-mono">Radial 80%</span>
                  </div>
                </SpotlightCard>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href="/components/spotlight-card"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#62AEF0] hover:underline transition-colors"
                >
                  <span>Component Docs</span>
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-muted-foreground">
                  $ bunx ... add spotlight-card
                </span>
              </div>
            </div>

            {/* Demo 2: Magnetic Button */}
            <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface-elevated p-5 sm:p-6 transition-all hover:border-[#0075DE]/40">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-[4px] bg-[#2A9D99]/10 px-2 py-0.5 text-[11px] font-mono font-medium text-[#2A9D99] border border-[#2A9D99]/20">
                    Animated UI
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <IconMagnet className="h-3 w-3 text-[#2A9D99]" />
                    <span>Spring Physics</span>
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  Magnetic Button
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Smooth cursor attraction powered by spring velocity damping. Automatically respects reduced-motion.
                </p>
              </div>

              {/* Interactive Demo Area */}
              <div className="mt-6 flex-1 flex flex-col items-center justify-center rounded-[12px] border border-dashed border-border bg-surface p-6 min-h-[220px]">
                <div className="text-center mb-4">
                  <span className="text-[11px] text-muted-foreground font-mono">
                    [ Move pointer near the trigger ]
                  </span>
                </div>

                <MagneticButton
                  strength={45}
                  className="group relative rounded-[8px] bg-[#455DD3] hover:bg-[#3B50BD] px-6 py-3 text-xs font-medium text-white shadow-md shadow-[#455DD3]/20 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <IconMagnet className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    <span>Magnetic Pull</span>
                  </span>
                </MagneticButton>

                <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                  <span>stiffness: 200</span>
                  <span>•</span>
                  <span>damping: 15</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href="/components/magnetic-button"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#62AEF0] hover:underline transition-colors"
                >
                  <span>Component Docs</span>
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-muted-foreground">
                  $ bunx ... add magnetic-button
                </span>
              </div>
            </div>

            {/* Demo 3: 3D Tilt Card */}
            <div className="flex flex-col justify-between rounded-[16px] border border-border bg-surface-elevated p-5 sm:p-6 transition-all hover:border-[#0075DE]/40">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-[4px] bg-[#F77463]/10 px-2 py-0.5 text-[11px] font-mono font-medium text-[#F77463] border border-[#F77463]/20">
                    Animated UI
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <IconPerspective className="h-3 w-3 text-[#F77463]" />
                    <span>Perspective 3D</span>
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  3D Tilt Card
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Pointer-driven 3D perspective rotation with multi-tier Z-axis parallax and instant return physics.
                </p>
              </div>

              {/* Interactive Demo Area */}
              <div className="mt-6 flex-1 flex items-center justify-center min-h-[220px]">
                <CardContainer className="w-full">
                  <CardBody className="w-full h-auto rounded-[12px] border border-border bg-surface p-5 shadow-xl transition-all">
                    <CardItem
                      translateZ={30}
                      className="flex items-center justify-between w-full"
                    >
                      <span className="rounded-[4px] bg-surface-elevated px-2 py-0.5 text-[10px] font-mono text-[#62AEF0] border border-border">
                        translateZ: 60px
                      </span>
                      <IconCode className="h-3.5 w-3.5 text-muted-foreground" />
                    </CardItem>

                    <CardItem
                      translateZ={50}
                      className="mt-3 text-sm font-bold text-foreground"
                    >
                      True Spatial Parallax
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ={35}
                      className="mt-1.5 text-xs text-muted-foreground"
                    >
                      Tilt your cursor around the perimeter to inspect realistic 3D depth.
                    </CardItem>

                    <CardItem
                      translateZ={60}
                      className="mt-4 pt-3 border-t border-border flex items-center justify-between w-full text-[11px]"
                    >
                      <span className="font-mono text-foreground font-semibold">
                        perspective: 1000px
                      </span>
                      <span className="text-[#62AEF0] font-medium font-mono">3D Tilt</span>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href="/components/card-3d"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#62AEF0] hover:underline transition-colors"
                >
                  <span>Component Docs</span>
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-muted-foreground">
                  $ bunx ... add card-3d
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
