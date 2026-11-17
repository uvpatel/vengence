"use client";

import { useTheme } from "./theme-provider";
import { IconSun, IconMoon } from "@tabler/icons-react";
import * as React from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`h-9 w-9 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 transition-colors ${className}`}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`h-9 w-9 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors ${className}`}
    >
      {isDark ? (
        <IconSun className="h-4 w-4 transition-transform hover:rotate-45" />
      ) : (
        <IconMoon className="h-4 w-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
