"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconBrandGithub, IconMenu2, IconX, IconSparkles } from "@tabler/icons-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/docs", label: "Documentation" },
  { href: "/themes", label: "Themes" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900 dark:text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm">
              <IconSparkles className="h-4 w-4" />
            </span>
            <span className="font-bold tracking-tight text-base">
              Vengence <span className="text-neutral-400 font-normal text-xs uppercase px-1.5 py-0.5 ml-1 rounded border border-neutral-200 dark:border-neutral-800">UI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "text-neutral-900 dark:text-white font-medium bg-neutral-100 dark:bg-neutral-900"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/urvilpatel/vengence-ui"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <IconBrandGithub className="h-4 w-4" />
          </Link>

          <ThemeToggle />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <Link
              href="https://github.com/urvilpatel/vengence-ui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
