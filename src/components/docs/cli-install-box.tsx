"use client";

import { useState } from "react";
import { IconCheck, IconCopy, IconTerminal2 } from "@tabler/icons-react";

export function CliInstallBox({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<"bun" | "npm" | "url">("bun");

  const commands = {
    bun: `bunx shadcn@latest add @vengence/${slug}`,
    npm: `npx shadcn@latest add @vengence/${slug}`,
    url: `bunx shadcn@latest add https://vengence-rho.vercel.app/r/${slug}.json`,
  };

  const activeCommand = commands[tab];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(activeCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white overflow-hidden my-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-xs">
        <div className="flex items-center gap-1">
          <IconTerminal2 className="h-3.5 w-3.5 text-neutral-400 mr-1" />
          <button
            onClick={() => setTab("bun")}
            className={`rounded px-2 py-0.5 transition-colors ${
              tab === "bun" ? "bg-neutral-800 text-white font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            bun
          </button>
          <button
            onClick={() => setTab("npm")}
            className={`rounded px-2 py-0.5 transition-colors ${
              tab === "npm" ? "bg-neutral-800 text-white font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            npm
          </button>
          <button
            onClick={() => setTab("url")}
            className={`rounded px-2 py-0.5 transition-colors ${
              tab === "url" ? "bg-neutral-800 text-white font-medium" : "text-neutral-400 hover:text-white"
            }`}
          >
            direct url
          </button>
        </div>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <IconCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <IconCopy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between px-4 py-3 font-mono text-xs sm:text-sm overflow-x-auto">
        <span className="text-neutral-300">
          <span className="text-neutral-600 select-none mr-2">$</span>
          {activeCommand}
        </span>
      </div>
    </div>
  );
}
