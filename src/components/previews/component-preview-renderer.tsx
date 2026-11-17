"use client";

import React from "react";
import { Button } from "../../../registry/default/ui/button";
import { AnimatedButton } from "../../../registry/default/ui/animated-button";
import { GradientButton } from "../../../registry/default/ui/gradient-button";
import { SpotlightCard } from "../../../registry/default/ui/spotlight-card";
import { BentoCard } from "../../../registry/default/ui/bento-card";
import { MagneticButton } from "../../../registry/default/animated/magnetic-button";
import { BorderBeam } from "../../../registry/default/animated/border-beam";
import { CardContainer, CardBody, CardItem } from "../../../registry/default/animated/card-3d";
import { ExpandableCard } from "../../../registry/default/animated/expandable-card";
import { FloatingDock } from "../../../registry/default/animated/floating-dock";
import { AuroraBackground } from "../../../registry/default/backgrounds/aurora-background";
import { GridBackground } from "../../../registry/default/backgrounds/grid-background";
import { DotBackground } from "../../../registry/default/backgrounds/dot-background";
import { SpotlightBackground } from "../../../registry/default/backgrounds/spotlight-background";
import { GradientMesh } from "../../../registry/default/backgrounds/gradient-mesh";
import { TextReveal } from "../../../registry/default/text/text-reveal";
import { TypewriterText } from "../../../registry/default/text/typewriter-text";
import { GradientText } from "../../../registry/default/text/gradient-text";
import { FlipWords } from "../../../registry/default/text/flip-words";
import { BlurReveal } from "../../../registry/default/text/blur-reveal";
import { HeroSection } from "../../../registry/default/blocks/hero-section";
import { BentoGridSection } from "../../../registry/default/blocks/bento-grid-section";
import { FeatureSection } from "../../../registry/default/blocks/feature-section";
import { PricingSection } from "../../../registry/default/blocks/pricing-section";
import { TestimonialSection } from "../../../registry/default/blocks/testimonial-section";
import {
  IconHome,
  IconTerminal2,
  IconComponents,
  IconPalette,
  IconBrandGithub,
  IconSparkles,
} from "@tabler/icons-react";

export function ComponentPreviewRenderer({ slug }: { slug: string }) {
  switch (slug) {
    case "button":
      return (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      );

    case "animated-button":
      return (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <AnimatedButton>
            <IconSparkles className="h-4 w-4" />
            <span>Interactive Shimmer</span>
          </AnimatedButton>
        </div>
      );

    case "gradient-button":
      return (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <GradientButton variant="bordered">Bordered Glow</GradientButton>
          <GradientButton variant="solid">Solid Gradient</GradientButton>
        </div>
      );

    case "spotlight-card":
      return (
        <SpotlightCard className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
              <IconSparkles className="h-4 w-4" />
            </span>
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Spotlight Effect</h4>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Hover cursor around this card surface to see continuous, dynamic light following your pointer.
          </p>
        </SpotlightCard>
      );

    case "bento-card":
      return (
        <div className="w-full max-w-sm">
          <BentoCard
            Icon={IconComponents}
            name="Developer Experience"
            description="Type-safe primitives crafted for effortless integration."
            cta="Explore primitives"
          />
        </div>
      );

    case "magnetic-button":
      return (
        <div className="flex flex-col items-center justify-center gap-2 py-6">
          <MagneticButton strength={40}>
            <span>Magnetic Pull</span>
          </MagneticButton>
          <span className="text-xs text-neutral-500">Move cursor close to button</span>
        </div>
      );

    case "border-beam":
      return (
        <div className="relative flex h-44 w-72 flex-col justify-center items-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 text-center shadow-sm">
          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Border Beam</h4>
          <p className="text-xs text-neutral-500 mt-1">Continuous perimeter gradient ray</p>
          <BorderBeam size={160} duration={8} />
        </div>
      );

    case "card-3d":
      return (
        <CardContainer className="py-2">
          <CardBody className="h-auto w-72 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-xl">
            <CardItem translateZ={50} className="text-lg font-bold text-neutral-900 dark:text-white">
              Interactive 3D Card
            </CardItem>
            <CardItem translateZ={30} as="p" className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
              Hover cursor over this card to witness genuine perspective depth and parallax translation.
            </CardItem>
            <CardItem translateZ={20} className="mt-4">
              <span className="inline-block rounded-md bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-[11px] font-mono text-neutral-700 dark:text-neutral-300">
                perspective: 1000px
              </span>
            </CardItem>
          </CardBody>
        </CardContainer>
      );

    case "expandable-card":
      return (
        <div className="w-full max-w-md">
          <ExpandableCard
            items={[
              {
                title: "Next.js 16",
                description: "Turbopack & App Router",
                content:
                  "Next.js 16 introduces blazingly fast Turbopack compilation, Cache Components, and deep React 19 compatibility.",
              },
              {
                title: "Tailwind CSS v4",
                description: "Unified CSS theme tokens",
                content:
                  "Tailwind CSS v4 removes config bloat with native CSS variables, lightning build speeds, and automatic container queries.",
              },
            ]}
          />
        </div>
      );

    case "floating-dock":
      return (
        <div className="flex flex-col items-center justify-center py-6">
          <FloatingDock
            items={[
              { title: "Home", icon: <IconHome className="h-5 w-5" />, href: "#" },
              { title: "Terminal", icon: <IconTerminal2 className="h-5 w-5" />, href: "#" },
              { title: "Components", icon: <IconComponents className="h-5 w-5" />, href: "#" },
              { title: "Themes", icon: <IconPalette className="h-5 w-5" />, href: "#" },
              { title: "GitHub", icon: <IconBrandGithub className="h-5 w-5" />, href: "#" },
            ]}
          />
        </div>
      );

    case "aurora-background":
      return (
        <AuroraBackground className="h-56 w-full rounded-2xl overflow-hidden">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white">Aurora Borealis</h3>
            <p className="text-xs text-neutral-400 mt-1">Hypnotic atmospheric color waves</p>
          </div>
        </AuroraBackground>
      );

    case "grid-background":
      return (
        <GridBackground className="h-56 w-full rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="text-center">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Precision Grid</h3>
            <p className="text-xs text-neutral-500 mt-1">Radial fade geometric backdrop</p>
          </div>
        </GridBackground>
      );

    case "dot-background":
      return (
        <DotBackground className="h-56 w-full rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="text-center">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Dot Pattern</h3>
            <p className="text-xs text-neutral-500 mt-1">Sleek dotted halftone matrix</p>
          </div>
        </DotBackground>
      );

    case "spotlight-background":
      return (
        <SpotlightBackground className="h-56 w-full rounded-2xl border border-neutral-800">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">Stage Spotlight</h3>
            <p className="text-xs text-neutral-400 mt-1">Top-down volumetric gradient cone</p>
          </div>
        </SpotlightBackground>
      );

    case "gradient-mesh":
      return (
        <GradientMesh className="h-56 w-full rounded-2xl border border-neutral-800">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">Fluid Gradient Mesh</h3>
            <p className="text-xs text-neutral-400 mt-1">Floating blurred color bodies</p>
          </div>
        </GradientMesh>
      );

    case "text-reveal":
      return (
        <div className="text-center py-4">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
            <TextReveal text="Craft unforgettable developer products with expressive motion." />
          </h3>
        </div>
      );

    case "typewriter-text":
      return (
        <div className="text-center py-6">
          <p className="text-xl font-semibold text-neutral-900 dark:text-white font-mono">
            Ship products that are{" "}
            <TypewriterText
              words={["faster", "accessible", "beautiful", "responsive"]}
              className="text-indigo-500 dark:text-indigo-400 font-bold"
            />
          </p>
        </div>
      );

    case "gradient-text":
      return (
        <div className="text-center py-4">
          <h2 className="text-3xl font-extrabold">
            <GradientText gradient="from-purple-500 via-pink-500 to-amber-500">
              Vengence Design System
            </GradientText>
          </h2>
        </div>
      );

    case "flip-words":
      return (
        <div className="text-center py-6">
          <div className="text-2xl font-bold text-neutral-900 dark:text-white">
            Create interfaces with
            <FlipWords
              words={["pure velocity", "fluid motion", "zero lock-in", "pixel craft"]}
              className="text-purple-600 dark:text-purple-400 font-extrabold"
            />
          </div>
        </div>
      );

    case "blur-reveal":
      return (
        <div className="text-center py-4">
          <BlurReveal duration={0.8}>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Optical blur into razor sharpness.
            </h3>
            <p className="text-sm text-neutral-500 mt-2">Smooth transition from defocus blur to clear visibility.</p>
          </BlurReveal>
        </div>
      );

    case "hero-section":
      return <HeroSection className="py-12" />;

    case "bento-grid-section":
      return <BentoGridSection className="py-8" />;

    case "feature-section":
      return <FeatureSection className="py-8" />;

    case "pricing-section":
      return <PricingSection className="py-8" />;

    case "testimonial-section":
      return <TestimonialSection className="py-8" />;

    default:
      return (
        <div className="text-sm text-neutral-500">Preview not found for {slug}</div>
      );
  }
}
