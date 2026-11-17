"use client";

import React, { useState } from "react";
import { ComponentPreviewRenderer } from "@/components/previews/component-preview-renderer";
import { CodeBlock } from "@/components/docs/code-block";
import { IconReload, IconEye, IconCode } from "@tabler/icons-react";

export function ComponentPreviewBox({
  slug,
  sourceCode,
  usageCode,
}: {
  slug: string;
  title?: string;
  sourceCode: string;
  usageCode?: string;
}) {
  const [tab, setTab] = useState<"preview" | "code" | "usage">("preview");
  const [key, setKey] = useState(0);

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden shadow-sm my-6">
      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-2 bg-neutral-50/50 dark:bg-neutral-900/40">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTab("preview")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === "preview"
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <IconEye className="h-3.5 w-3.5" />
            <span>Preview</span>
          </button>
          {usageCode && (
            <button
              onClick={() => setTab("usage")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                tab === "usage"
                  ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <IconCode className="h-3.5 w-3.5" />
              <span>Usage</span>
            </button>
          )}
          <button
            onClick={() => setTab("code")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === "code"
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <IconCode className="h-3.5 w-3.5" />
            <span>Source</span>
          </button>
        </div>

        {tab === "preview" && (
          <button
            onClick={() => setKey((prev) => prev + 1)}
            className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1 rounded transition-colors"
            title="Reload preview"
          >
            <IconReload className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      <div>
        {tab === "preview" && (
          <div
            key={key}
            className="min-h-[300px] flex items-center justify-center p-8 bg-neutral-100/40 dark:bg-neutral-900/20"
          >
            <ComponentPreviewRenderer slug={slug} />
          </div>
        )}

        {tab === "usage" && usageCode && (
          <div className="p-4">
            <CodeBlock code={usageCode} fileName="demo.tsx" />
          </div>
        )}

        {tab === "code" && (
          <div className="p-4">
            <CodeBlock code={sourceCode} fileName={`${slug}.tsx`} />
          </div>
        )}
      </div>
    </div>
  );
}
