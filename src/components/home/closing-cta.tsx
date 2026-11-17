"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconBrandGithub,
  IconSparkles,
} from "@tabler/icons-react";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 border-t border-border">
      {/* Subtle Atmospheric Glow using Notion Accents */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#455DD3]/15 via-[#213183]/10 to-transparent blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0075DE]/20 bg-[#0075DE]/10 px-3 py-1 text-xs font-medium text-[#62AEF0] mb-6">
          <IconSparkles className="h-3.5 w-3.5" />
          <span>Open Source & shadcn-Compatible</span>
        </div>

        {/* Headline: NotionInter bold 700 with letter-spacing */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Your next interface starts{" "}
          <span className="bg-gradient-to-r from-[#62AEF0] via-[#455DD3] to-[#F77463] bg-clip-text text-transparent">
            here.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-[24px]">
          Explore expressive components, customize the source, and build something exceptional.
        </p>

        {/* Buttons: Primary #455DD3 & Secondary #213183 with 8px radius */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/components"
            className="btn-primary h-10 px-6 text-sm font-medium shadow-sm transition-all hover:bg-[#3B50BD]"
          >
            <span>Explore Components</span>
            <IconArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/urvilpatel/vengence-ui"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary h-10 px-6 text-sm font-medium transition-all hover:bg-[#1A2768]"
          >
            <IconBrandGithub className="h-4 w-4" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
