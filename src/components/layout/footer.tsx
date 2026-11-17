"use client";

import Link from "next/link";
import { useState } from "react";
import {
  IconBrandGithub,
  IconSparkles,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const registryEndpoint = "https://vengence-rho.vercel.app/r";

  const handleCopyEndpoint = async () => {
    try {
      await navigator.clipboard.writeText(registryEndpoint);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <footer className="w-full border-t border-border bg-background mt-auto py-16 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold tracking-tight text-foreground"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-border bg-surface text-foreground shadow-xs">
                <IconSparkles className="h-4 w-4 text-[#62AEF0]" />
              </div>
              <span className="text-base font-bold tracking-tight">
                Vengence UI
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              An open-source React component library combining shadcn-compatible
              component distribution with expressive animations. Built for
              developers who care about the details.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2A9D99]" />
                <span>Next.js 16 & React 19 Compatible</span>
              </span>
            </div>
          </div>

          {/* Links: Component Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  href="/components?category=ui"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Standard UI
                </Link>
              </li>
              <li>
                <Link
                  href="/components?category=animated"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Animated UI
                </Link>
              </li>
              <li>
                <Link
                  href="/components?category=backgrounds"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Atmospheric Backdrops
                </Link>
              </li>
              <li>
                <Link
                  href="/components?category=text"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Text Effects
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Documentation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs/installation"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/cli"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Registry & CLI Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/theming"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Tailwind v4 Theming
                </Link>
              </li>
              <li>
                <Link
                  href="/blocks"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Prebuilt Blocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Ecosystem & GitHub */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/urvilpatel/vengence-ui"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#62AEF0]"
                >
                  <IconBrandGithub className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </Link>
              </li>
              <li>
                <span className="text-xs text-muted-foreground/80">
                  Released under MIT License
                </span>
              </li>
              <li>
                <Link
                  href="/themes"
                  className="transition-colors hover:text-[#62AEF0]"
                >
                  Theme Palettes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Public Registry Endpoint & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-muted-foreground">
          <p>© 2026 Vengence UI. Designed for modern React and full code ownership.</p>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground">
              Public Registry:
            </span>
            <button
              onClick={handleCopyEndpoint}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-foreground transition-colors hover:border-[#0075DE]/50 hover:bg-surface-elevated"
              title="Click to copy registry URL"
            >
              <span>{registryEndpoint}</span>
              {copied ? (
                <IconCheck className="h-3 w-3 text-[#2A9D99]" />
              ) : (
                <IconCopy className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
