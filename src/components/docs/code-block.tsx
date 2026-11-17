"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export function CodeBlock({
  code,
  language = "tsx",
  fileName,
}: {
  code: string;
  language?: string;
  fileName?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-neutral-100 overflow-hidden font-mono text-xs sm:text-sm">
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/60 px-4 py-2 text-neutral-400">
        <span className="text-xs font-mono">{fileName || language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs hover:bg-neutral-800 hover:text-white transition-colors"
          aria-label="Copy code"
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

      <div className="overflow-x-auto p-4 max-h-[500px]">
        <pre className="leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
