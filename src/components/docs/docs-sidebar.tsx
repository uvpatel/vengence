"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IconSparkles, IconX } from "@tabler/icons-react";
import { DocsSearch } from "./docs-search";
import { DOCS_NAVIGATION } from "./docs-navigation";
import { DocsSidebarGroup } from "./docs-sidebar-group";

interface DocsSidebarProps {
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
}

export function DocsSidebar({
  mobileOpen = false,
  onMobileOpenChange,
}: DocsSidebarProps) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      DOCS_NAVIGATION.map((group) => [
        group.id,
        group.items.some((item) => item.href === pathname),
      ])
    )
  );

  useEffect(() => {
    if (!mobileOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onMobileOpenChange?.(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen, onMobileOpenChange]);

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return DOCS_NAVIGATION;

    return DOCS_NAVIGATION.map((group) => {
      const groupMatches = group.label.toLowerCase().includes(normalizedQuery);
      return {
        ...group,
        items: groupMatches
          ? group.items
          : group.items.filter((item) =>
              `${item.label} ${item.description ?? ""}`
                .toLowerCase()
                .includes(normalizedQuery)
            ),
      };
    }).filter((group) => group.items.length > 0);
  }, [query]);
  const activeGroupIds = useMemo(
    () =>
      new Set(
        DOCS_NAVIGATION.filter((group) =>
          group.items.some((item) => item.href === pathname)
        ).map((group) => group.id)
      ),
    [pathname]
  );

  const sidebarContent = (
    <>
      <div className="border-b border-border px-4 py-4">
        <Link
          href="/docs"
          onClick={() => onMobileOpenChange?.(false)}
          className="group mb-4 flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-elevated shadow-sm transition-transform group-hover:scale-105">
            <IconSparkles aria-hidden="true" className="h-4 w-4 text-[#62AEF0]" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-tight text-foreground">
              Vengence UI
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              v0.1 · docs
            </span>
          </span>
        </Link>
        <DocsSearch
          value={query}
          onChange={setQuery}
          onEscape={() => onMobileOpenChange?.(false)}
        />
      </div>

      <nav aria-label="Documentation navigation" className="space-y-3 px-3 py-4">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <DocsSidebarGroup
              key={group.id}
              group={group}
              pathname={pathname}
              expanded={
                Boolean(query) ||
                Boolean(expanded[group.id]) ||
                activeGroupIds.has(group.id)
              }
              onToggle={() =>
                setExpanded((current) => ({
                  ...current,
                  [group.id]: !current[group.id],
                }))
              }
              onNavigate={() => onMobileOpenChange?.(false)}
            />
          ))
        ) : (
          <p className="px-2 py-8 text-center text-xs leading-5 text-muted-foreground">
            No docs match &quot;{query}&quot;.
          </p>
        )}
      </nav>
    </>
  );

  return (
    <>
      <aside className="fixed bottom-0 left-0 top-[var(--docs-header-height)] z-40 hidden w-[280px] overflow-y-auto border-r border-border bg-background md:block">
        {sidebarContent}
      </aside>

      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 top-14 z-[60] bg-black/50 backdrop-blur-[2px] transition-opacity duration-200 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => onMobileOpenChange?.(false)}
      >
        <aside
          aria-label="Mobile documentation navigation"
          className={`h-full w-[min(88vw,320px)] overflow-y-auto border-r border-border bg-background shadow-2xl transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-end px-3 pt-3">
            <button
              type="button"
              onClick={() => onMobileOpenChange?.(false)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
              aria-label="Close documentation navigation"
            >
              <IconX aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          {sidebarContent}
        </aside>
      </div>
    </>
  );
}
