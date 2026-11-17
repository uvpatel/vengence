"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { REGISTRY_COMPONENTS } from "@/lib/registry";

export function DocsSidebar() {
  const pathname = usePathname();

  const categories = [
    {
      title: "Getting Started",
      items: [
        { href: "/docs", label: "Introduction" },
        { href: "/docs/installation", label: "Installation" },
        { href: "/docs/cli", label: "CLI & Registry" },
        { href: "/docs/theming", label: "Theming" },
      ],
    },
    {
      title: "Standard UI",
      items: REGISTRY_COMPONENTS.filter((c) => c.category === "ui").map((c) => ({
        href: `/components/${c.slug}`,
        label: c.title,
      })),
    },
    {
      title: "Animated UI",
      items: REGISTRY_COMPONENTS.filter((c) => c.category === "animated").map((c) => ({
        href: `/components/${c.slug}`,
        label: c.title,
      })),
    },
    {
      title: "Backgrounds",
      items: REGISTRY_COMPONENTS.filter((c) => c.category === "backgrounds").map((c) => ({
        href: `/components/${c.slug}`,
        label: c.title,
      })),
    },
    {
      title: "Text Effects",
      items: REGISTRY_COMPONENTS.filter((c) => c.category === "text").map((c) => ({
        href: `/components/${c.slug}`,
        label: c.title,
      })),
    },
    {
      title: "Blocks",
      items: REGISTRY_COMPONENTS.filter((c) => c.category === "blocks").map((c) => ({
        href: `/blocks/${c.slug}`,
        label: c.title,
      })),
    },
  ];

  return (
    <aside className="w-64 shrink-0 hidden md:block py-6 pr-6 border-r border-neutral-200 dark:border-neutral-800 text-sm">
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h4 className="font-semibold text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-2 px-3">
              {cat.title}
            </h4>
            <ul className="space-y-0.5">
              {cat.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-950 dark:text-white"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
