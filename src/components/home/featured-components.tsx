"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconLayersSubtract,
  IconTypography,
  IconSunHigh,
  IconFlame,
} from "@tabler/icons-react";
import { ComponentPreviewRenderer } from "@/components/previews/component-preview-renderer";

interface ComponentItem {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: "ui" | "animated" | "backgrounds" | "text";
  categoryLabel: string;
}

const FEATURED_SLUGS = [
  "border-beam",
  "floating-dock",
  "animated-button",
  "aurora-background",
  "flip-words",
  "gradient-button",
];

const ALL_COMPONENTS: ComponentItem[] = [
  {
    slug: "border-beam",
    name: "border-beam",
    title: "Border Beam",
    description: "An animated gradient laser beam traveling seamlessly around any container perimeter.",
    category: "animated",
    categoryLabel: "Animated UI",
  },
  {
    slug: "floating-dock",
    name: "floating-dock",
    title: "Floating Dock",
    description: "Fluid macOS-inspired navigation dock with spring icon magnification on hover.",
    category: "animated",
    categoryLabel: "Animated UI",
  },
  {
    slug: "animated-button",
    name: "animated-button",
    title: "Animated Button",
    description: "Interactive button with continuous light shimmer and subtle outer ambient glow.",
    category: "ui",
    categoryLabel: "Standard UI",
  },
  {
    slug: "aurora-background",
    name: "aurora-background",
    title: "Aurora Background",
    description: "Atmospheric Northern lights wave pattern with fluid radial color vignette.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
  },
  {
    slug: "flip-words",
    name: "flip-words",
    title: "Flip Words",
    description: "Dynamic typographic cycling with 3D flip stagger and optical defocus motion.",
    category: "text",
    categoryLabel: "Text Effects",
  },
  {
    slug: "gradient-button",
    name: "gradient-button",
    title: "Gradient Button",
    description: "Eye-catching button featuring glowing multi-stop gradient border and solid fills.",
    category: "ui",
    categoryLabel: "Standard UI",
  },
  {
    slug: "spotlight-card",
    name: "spotlight-card",
    title: "Spotlight Card",
    description: "Pointer-tracking card with radial light illumination and reactive sheen.",
    category: "ui",
    categoryLabel: "Standard UI",
  },
  {
    slug: "card-3d",
    name: "card-3d",
    title: "3D Card",
    description: "True 3D perspective tilt card that responds smoothly to mouse hover movements.",
    category: "animated",
    categoryLabel: "Animated UI",
  },
  {
    slug: "magnetic-button",
    name: "magnetic-button",
    title: "Magnetic Button",
    description: "Cursor attraction button powered by smooth spring velocity damping.",
    category: "animated",
    categoryLabel: "Animated UI",
  },
  {
    slug: "grid-background",
    name: "grid-background",
    title: "Grid Background",
    description: "Clean geometric grid backdrop with subtle radial mask opacity falloff.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
  },
  {
    slug: "text-reveal",
    name: "text-reveal",
    title: "Text Reveal",
    description: "Smooth cascading word-by-word entrance animation with spring easing.",
    category: "text",
    categoryLabel: "Text Effects",
  },
  {
    slug: "typewriter-text",
    name: "typewriter-text",
    title: "Typewriter Text",
    description: "Retro-modern terminal typewriter effect with pulsing cursor and phrase cycling.",
    category: "text",
    categoryLabel: "Text Effects",
  },
];

type CategoryFilter = "featured" | "ui" | "animated" | "backgrounds" | "text";

export function FeaturedComponents() {
  const [filter, setFilter] = useState<CategoryFilter>("featured");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const displayedComponents =
    filter === "featured"
      ? ALL_COMPONENTS.filter((c) => FEATURED_SLUGS.includes(c.slug))
      : ALL_COMPONENTS.filter((c) => c.category === filter).slice(0, 6);

  const handleCopy = async (slug: string) => {
    try {
      await navigator.clipboard.writeText(`bunx shadcn@latest add @vengence/${slug}`);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0075DE]/20 bg-[#0075DE]/10 px-3 py-1 text-xs font-medium text-[#62AEF0] mb-3">
              <IconSparkles className="h-3.5 w-3.5" />
              <span>Component Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Everything you need to build beautifully.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-[24px]">
              Explore a growing collection of handcrafted React components designed for modern interfaces.
            </p>
          </div>

          <Link
            href="/components"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#62AEF0] hover:underline transition-colors"
          >
            <span>View all 20+ components</span>
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Filter Tabs (8px radius) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setFilter("featured")}
            className={`inline-flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === "featured"
                ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
            }`}
          >
            <IconFlame className="h-3.5 w-3.5" />
            <span>Featured</span>
          </button>

          <button
            onClick={() => setFilter("ui")}
            className={`inline-flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === "ui"
                ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
            }`}
          >
            <IconLayersSubtract className="h-3.5 w-3.5" />
            <span>Standard UI</span>
          </button>

          <button
            onClick={() => setFilter("animated")}
            className={`inline-flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === "animated"
                ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
            }`}
          >
            <IconSparkles className="h-3.5 w-3.5" />
            <span>Animated UI</span>
          </button>

          <button
            onClick={() => setFilter("backgrounds")}
            className={`inline-flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === "backgrounds"
                ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
            }`}
          >
            <IconSunHigh className="h-3.5 w-3.5" />
            <span>Backgrounds</span>
          </button>

          <button
            onClick={() => setFilter("text")}
            className={`inline-flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === "text"
                ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
            }`}
          >
            <IconTypography className="h-3.5 w-3.5" />
            <span>Text Effects</span>
          </button>
        </div>

        {/* 6 Component Cards Grid (16px radius as per design.md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedComponents.map((item) => (
            <div
              key={item.slug}
              className="group flex flex-col justify-between rounded-[16px] border border-border bg-surface p-5 shadow-xs transition-all hover:border-[#0075DE]/40 hover:bg-surface hover:shadow-xl"
            >
              {/* Card Header: Category & Docs Link */}
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-[4px] bg-surface-elevated px-2 py-0.5 text-[11px] font-mono font-medium text-[#62AEF0] border border-border">
                  {item.categoryLabel}
                </span>
                <Link
                  href={`/components/${item.slug}`}
                  className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <span>Docs</span>
                  <IconArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Primary Visual Element: Actual Live Component Preview */}
              <div className="relative flex flex-col items-center justify-center rounded-[12px] border border-border bg-surface-elevated p-4 min-h-[170px] overflow-hidden">
                <ComponentPreviewRenderer slug={item.slug} />
              </div>

              {/* Title & Short Description */}
              <div className="mt-4">
                <h3 className="text-base font-bold text-foreground group-hover:text-[#62AEF0] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Installation Command Bar with Copy Button */}
              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-1.5 overflow-hidden font-mono text-[11px] text-muted-foreground">
                  <span className="text-[#62AEF0] select-none">$</span>
                  <span className="truncate">@vengence/{item.slug}</span>
                </div>
                <button
                  onClick={() => handleCopy(item.slug)}
                  className="shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface-elevated px-2 py-1 text-[11px] font-mono text-muted-foreground transition-colors hover:border-[#0075DE]/40 hover:text-foreground hover:bg-surface"
                  title="Copy install command"
                >
                  {copiedSlug === item.slug ? (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
