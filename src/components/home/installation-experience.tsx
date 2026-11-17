"use client";

import { useState } from "react";
import {
  IconCopy,
  IconCheck,
  IconTerminal2,
  IconLink,
  IconFiles,
  IconSparkles,
} from "@tabler/icons-react";

type InstallTab = "cli" | "url" | "manual";

export function InstallationExperience() {
  const [activeTab, setActiveTab] = useState<InstallTab>("cli");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0075DE]/20 bg-[#0075DE]/10 px-3 py-1 text-xs font-medium text-[#62AEF0] mb-3">
            <IconSparkles className="h-3.5 w-3.5" />
            <span>Seamless Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Start building in seconds.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-[24px]">
            Choose how you want to install components. Use our verified remote registry namespace, direct JSON URLs, or manual copy-paste.
          </p>
        </div>

        {/* Polished Installation Card (16px radius as per design.md) */}
        <div className="rounded-[16px] border border-border bg-surface p-6 sm:p-8 shadow-xl backdrop-blur-md">
          {/* Installation Method Tabs (8px radius) */}
          <div className="flex items-center gap-2 pb-6 border-b border-border overflow-x-auto">
            <button
              onClick={() => setActiveTab("cli")}
              className={`flex items-center gap-2 rounded-[8px] px-4 py-2 text-xs font-medium transition-all ${
                activeTab === "cli"
                  ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
              }`}
            >
              <IconTerminal2 className="h-4 w-4" />
              <span>CLI Namespace</span>
            </button>

            <button
              onClick={() => setActiveTab("url")}
              className={`flex items-center gap-2 rounded-[8px] px-4 py-2 text-xs font-medium transition-all ${
                activeTab === "url"
                  ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
              }`}
            >
              <IconLink className="h-4 w-4" />
              <span>Direct URL</span>
            </button>

            <button
              onClick={() => setActiveTab("manual")}
              className={`flex items-center gap-2 rounded-[8px] px-4 py-2 text-xs font-medium transition-all ${
                activeTab === "manual"
                  ? "bg-[#455DD3] text-white font-semibold shadow-xs"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
              }`}
            >
              <IconFiles className="h-4 w-4" />
              <span>Manual Installation</span>
            </button>
          </div>

          {/* Tab 1: CLI Namespace */}
          {activeTab === "cli" && (
            <div className="mt-8 space-y-6">
              {/* Step 1 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#455DD3]/20 text-[11px] font-bold text-[#62AEF0]">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-foreground">
                    Register the @vengence namespace
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3 pl-7">
                  Add the remote registry into your project’s shadcn configuration.
                </p>
                <div className="relative rounded-[8px] border border-border bg-surface-elevated p-4 font-mono text-xs flex items-center justify-between">
                  <div className="overflow-x-auto text-foreground pr-4">
                    <span className="text-[#62AEF0] select-none mr-2">$</span>
                    <span>bunx shadcn@latest registry add &quot;@vengence=https://vengence-rho.vercel.app/r/&#123;name&#125;.json&quot;</span>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'bunx shadcn@latest registry add "@vengence=https://vengence-rho.vercel.app/r/{name}.json"',
                        1
                      )
                    }
                    className="shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedIndex === 1 ? (
                      <IconCheck className="h-3.5 w-3.5 text-[#2A9D99]" />
                    ) : (
                      <IconCopy className="h-3.5 w-3.5" />
                    )}
                    <span className="text-[11px]">
                      {copiedIndex === 1 ? "Copied" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#455DD3]/20 text-[11px] font-bold text-[#62AEF0]">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-foreground">
                    Add any component to your project
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3 pl-7">
                  Install components via the registered namespace with automated dependency resolution.
                </p>
                <div className="relative rounded-[8px] border border-border bg-surface-elevated p-4 font-mono text-xs flex items-center justify-between">
                  <div className="overflow-x-auto text-foreground pr-4">
                    <span className="text-[#62AEF0] select-none mr-2">$</span>
                    <span>bunx shadcn@latest add @vengence/spotlight-card</span>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        "bunx shadcn@latest add @vengence/spotlight-card",
                        2
                      )
                    }
                    className="shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedIndex === 2 ? (
                      <IconCheck className="h-3.5 w-3.5 text-[#2A9D99]" />
                    ) : (
                      <IconCopy className="h-3.5 w-3.5" />
                    )}
                    <span className="text-[11px]">
                      {copiedIndex === 2 ? "Copied" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#455DD3]/20 text-[11px] font-bold text-[#62AEF0]">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-foreground">
                    Import and customize
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3 pl-7">
                  Use the component in your application with full source-code access.
                </p>
                <div className="relative rounded-[8px] border border-border bg-surface-elevated p-4 font-mono text-xs flex items-center justify-between">
                  <div className="overflow-x-auto text-foreground pr-4">
                    <span className="text-[#62AEF0]">import</span> &#123; SpotlightCard &#125; <span className="text-[#62AEF0]">from</span> <span className="text-[#2A9D99]">&quot;@/components/ui/spotlight-card&quot;</span>;
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'import { SpotlightCard } from "@/components/ui/spotlight-card";',
                        3
                      )
                    }
                    className="shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedIndex === 3 ? (
                      <IconCheck className="h-3.5 w-3.5 text-[#2A9D99]" />
                    ) : (
                      <IconCopy className="h-3.5 w-3.5" />
                    )}
                    <span className="text-[11px]">
                      {copiedIndex === 3 ? "Copied" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Direct URL */}
          {activeTab === "url" && (
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  Install directly via component schema URL
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  No registry setup required. Pass the direct JSON endpoint directly to the shadcn CLI.
                </p>
                <div className="relative rounded-[8px] border border-border bg-surface-elevated p-4 font-mono text-xs flex items-center justify-between">
                  <div className="overflow-x-auto text-foreground pr-4">
                    <span className="text-[#62AEF0] select-none mr-2">$</span>
                    <span>bunx shadcn@latest add &quot;https://vengence-rho.vercel.app/r/spotlight-card.json&quot;</span>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        'bunx shadcn@latest add "https://vengence-rho.vercel.app/r/spotlight-card.json"',
                        4
                      )
                    }
                    className="shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedIndex === 4 ? (
                      <IconCheck className="h-3.5 w-3.5 text-[#2A9D99]" />
                    ) : (
                      <IconCopy className="h-3.5 w-3.5" />
                    )}
                    <span className="text-[11px]">
                      {copiedIndex === 4 ? "Copied" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="rounded-[8px] border border-border bg-surface-elevated p-4 text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Tip: </span>
                You can replace <code className="text-[#62AEF0] font-mono">spotlight-card.json</code> with any component slug such as <code className="text-[#62AEF0] font-mono">magnetic-button.json</code>, <code className="text-[#62AEF0] font-mono">card-3d.json</code>, or <code className="text-[#62AEF0] font-mono">border-beam.json</code>.
              </div>
            </div>
          )}

          {/* Tab 3: Manual Installation */}
          {activeTab === "manual" && (
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  1. Install required dependencies
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Ensure the core peer packages for motion and style merging are installed in your workspace.
                </p>
                <div className="relative rounded-[8px] border border-border bg-surface-elevated p-4 font-mono text-xs flex items-center justify-between">
                  <div className="overflow-x-auto text-foreground pr-4">
                    <span className="text-[#62AEF0] select-none mr-2">$</span>
                    <span>bun add motion clsx tailwind-merge @tabler/icons-react</span>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        "bun add motion clsx tailwind-merge @tabler/icons-react",
                        5
                      )
                    }
                    className="shrink-0 flex items-center gap-1 rounded-[6px] border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedIndex === 5 ? (
                      <IconCheck className="h-3.5 w-3.5 text-[#2A9D99]" />
                    ) : (
                      <IconCopy className="h-3.5 w-3.5" />
                    )}
                    <span className="text-[11px]">
                      {copiedIndex === 5 ? "Copied" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  2. Copy the component source
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Navigate to any component page in the documentation, click the <span className="text-foreground font-medium">Code</span> tab, copy the raw implementation into your project at <code className="text-[#62AEF0] font-mono">src/components/ui/[name].tsx</code>, and enjoy zero dependencies on our servers.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
