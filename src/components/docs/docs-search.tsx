"use client";

import { useEffect, useRef } from "react";
import { IconCommand, IconSearch } from "@tabler/icons-react";

interface DocsSearchProps {
  value: string;
  onChange: (value: string) => void;
  onEscape?: () => void;
}

export function DocsSearch({ value, onChange, onEscape }: DocsSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <label className="relative block">
      <IconSearch
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            onChange("");
            onEscape?.();
            inputRef.current?.blur();
          }
        }}
        placeholder="Search docs..."
        aria-label="Search documentation"
        className="h-9 w-full rounded-lg border border-border bg-surface pl-9 pr-16 text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[#0075DE] focus:ring-2 focus:ring-[#0075DE]/20"
      />
      <span className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 items-center gap-0.5 rounded border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
        <IconCommand aria-hidden="true" className="h-3 w-3" /> K
      </span>
    </label>
  );
}
