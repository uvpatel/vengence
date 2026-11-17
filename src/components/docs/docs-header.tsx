"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBrandGithub, IconMenu2 } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function DocsHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const current = segments.at(-1) ?? "docs";
  const label = current
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <div className="flex min-h-14 items-center justify-between gap-4 border-b border-border px-4 py-2 sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label="Open documentation navigation"
        >
          <IconMenu2 aria-hidden="true" className="h-5 w-5" />
        </button>
        <Link href="/docs" className="hidden transition-colors hover:text-foreground sm:inline">
          Docs
        </Link>
        <span aria-hidden="true" className="hidden text-border sm:inline">
          /
        </span>
        <span className="truncate text-foreground">{label}</span>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="https://github.com/urvilpatel/vengence-ui"
          target="_blank"
          rel="noreferrer"
          className="hidden h-9 items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          <IconBrandGithub aria-hidden="true" className="h-4 w-4" />
          <span>GitHub</span>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
