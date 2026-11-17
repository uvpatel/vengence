"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconBrandGithub,
  IconMenu2,
  IconX,
  IconSparkles,
} from "@tabler/icons-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Main Nav */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-[8px] border border-border bg-surface text-foreground shadow-xs transition-transform duration-200 group-hover:scale-105">
              <IconSparkles className="h-4 w-4 text-[#62AEF0]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-foreground text-sm sm:text-base">
                Vengence
              </span>
              <span className="rounded-[4px] border border-[#0075DE]/40 bg-[#0075DE]/10 px-1.5 py-0.5 text-[10px] font-mono font-medium text-[#62AEF0]">
                UI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-[8px] px-3 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "text-foreground bg-surface-elevated font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#0075DE]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action Icons & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <Link
            href="https://github.com/urvilpatel/vengence-ui"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-[8px] border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-[#0075DE]/50 hover:text-foreground hover:bg-surface-elevated"
            aria-label="GitHub Repository"
          >
            <IconBrandGithub className="h-4 w-4" />
            <span className="font-mono text-[11px]">GitHub</span>
          </Link>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-[8px] border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <IconX className="h-4 w-4" />
            ) : (
              <IconMenu2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-surface px-4 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-[8px] px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-surface-elevated text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0075DE]" />
                )}
              </Link>
            );
          })}
          <div className="pt-2 mt-2 border-t border-border flex items-center justify-between px-3 py-2 text-xs text-muted-foreground">
            <Link
              href="https://github.com/urvilpatel/vengence-ui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span>GitHub Repository</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
