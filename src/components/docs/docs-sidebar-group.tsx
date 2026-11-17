"use client";

import Link from "next/link";
import { IconChevronDown, IconPoint } from "@tabler/icons-react";
import type { DocsNavGroup } from "./docs-navigation";

interface DocsSidebarGroupProps {
  group: DocsNavGroup;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

export function DocsSidebarGroup({
  group,
  pathname,
  expanded,
  onToggle,
  onNavigate,
}: DocsSidebarGroupProps) {
  return (
    <section>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex min-h-9 w-full items-center justify-between rounded-lg px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
      >
        <span>{group.label}</span>
        <IconChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            expanded ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          expanded
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 overflow-hidden border-l border-border ml-3 pl-2">
          {group.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex min-h-9 items-center gap-2 rounded-md px-2.5 text-[13px] transition-colors ${
                    isActive
                      ? "bg-[#455DD3]/12 font-medium text-foreground"
                      : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                  }`}
                >
                  <IconPoint
                    aria-hidden="true"
                    className={`h-3 w-3 shrink-0 transition-colors ${
                      isActive
                        ? "fill-[#62AEF0] text-[#62AEF0]"
                        : "text-muted-foreground/50 group-hover:text-muted-foreground"
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <span className="absolute -left-[13px] h-5 w-0.5 rounded-full bg-[#62AEF0]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
