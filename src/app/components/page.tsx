"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import { REGISTRY_COMPONENTS } from "@/lib/registry";
import { ComponentPreviewRenderer } from "@/components/previews/component-preview-renderer";

const CATEGORIES = [
  { id: "all", label: "All Components" },
  { id: "ui", label: "Standard UI" },
  { id: "animated", label: "Animated UI" },
  { id: "backgrounds", label: "Backgrounds" },
  { id: "text", label: "Text Effects" },
];

export default function ComponentsDirectoryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const components = useMemo(() => {
    return REGISTRY_COMPONENTS.filter((item) => {
      if (item.category === "blocks") return false;
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.slug.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Registry Index
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            Components
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Explore 20+ customizable, animated, and accessible React components ready to install via shadcn CLI.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <IconSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 pl-10 pr-4 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 py-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
        <span className="ml-auto text-xs text-neutral-500">
          Showing {components.length} components
        </span>
      </div>

      {/* Components Grid */}
      {components.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-500 text-sm">No components match your search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all hover:shadow-md"
            >
              {/* Preview Thumbnail Box */}
              <div className="h-44 flex items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-100 dark:border-neutral-800/80 overflow-hidden">
                <div className="pointer-events-none transform scale-90 w-full flex items-center justify-center">
                  <ComponentPreviewRenderer slug={item.slug} />
                </div>
              </div>

              {/* Information */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      @vengence/{item.slug}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                  <Link
                    href={`/components/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <span>View Component & Code</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
