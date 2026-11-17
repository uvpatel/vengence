import type { RegistryItemMeta } from "@/lib/registry";
import { REGISTRY_COMPONENTS } from "@/lib/registry";

export interface DocsNavItem {
  href: string;
  label: string;
  description?: string;
}

export interface DocsNavGroup {
  id: string;
  label: string;
  items: DocsNavItem[];
}

const staticGroups: DocsNavGroup[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/cli", label: "CLI & Registry" },
      { href: "/docs/theming", label: "Theming" },
    ],
  },
];

function registryGroup(
  id: string,
  label: string,
  category: RegistryItemMeta["category"],
  basePath: string
): DocsNavGroup {
  return {
    id,
    label,
    items: REGISTRY_COMPONENTS.filter((item) => item.category === category).map(
      (item) => ({
        href: `${basePath}/${item.slug}`,
        label: item.title,
        description: item.description,
      })
    ),
  };
}

export const DOCS_NAVIGATION: DocsNavGroup[] = [
  ...staticGroups,
  registryGroup("standard-ui", "Standard UI", "ui", "/components"),
  registryGroup("animated-ui", "Animated UI", "animated", "/components"),
  registryGroup("backgrounds", "Backgrounds", "backgrounds", "/components"),
  registryGroup("text-effects", "Text Effects", "text", "/components"),
  registryGroup("blocks", "Blocks", "blocks", "/blocks"),
];
