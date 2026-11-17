import Link from "next/link";
import { getAllBlocks } from "@/lib/registry";
import { ComponentPreviewRenderer } from "@/components/previews/component-preview-renderer";
import { IconArrowRight } from "@tabler/icons-react";

export default function BlocksDirectoryPage() {
  const blocks = getAllBlocks();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
          Ready-to-use Layouts
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
          Website Blocks
        </h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Complete, production-ready website sections crafted for high-converting landing pages and SaaS applications.
        </p>
      </div>

      <div className="space-y-16 mt-12">
        {blocks.map((block) => (
          <div key={block.slug} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {block.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {block.description}
                </p>
              </div>
              <Link
                href={`/blocks/${block.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <span>View block & code</span>
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 overflow-hidden shadow-sm">
              <ComponentPreviewRenderer slug={block.slug} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
