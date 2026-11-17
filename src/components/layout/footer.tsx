import Link from "next/link";
import { IconBrandGithub, IconSparkles } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/50 mt-auto py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2 max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-neutral-900 dark:text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950">
                <IconSparkles className="h-3.5 w-3.5" />
              </span>
              <span>Vengence UI</span>
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Modern, open-source React component library combining shadcn component distribution with expressive animations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Components</h4>
              <ul className="space-y-2 text-neutral-500 dark:text-neutral-400">
                <li><Link href="/components?category=ui" className="hover:text-black dark:hover:text-white transition-colors">Standard UI</Link></li>
                <li><Link href="/components?category=animated" className="hover:text-black dark:hover:text-white transition-colors">Animated UI</Link></li>
                <li><Link href="/components?category=backgrounds" className="hover:text-black dark:hover:text-white transition-colors">Backgrounds</Link></li>
                <li><Link href="/components?category=text" className="hover:text-black dark:hover:text-white transition-colors">Text Effects</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Explore</h4>
              <ul className="space-y-2 text-neutral-500 dark:text-neutral-400">
                <li><Link href="/blocks" className="hover:text-black dark:hover:text-white transition-colors">Blocks</Link></li>
                <li><Link href="/docs" className="hover:text-black dark:hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/themes" className="hover:text-black dark:hover:text-white transition-colors">Themes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Community</h4>
              <ul className="space-y-2 text-neutral-500 dark:text-neutral-400">
                <li>
                  <Link
                    href="https://github.com/urvilpatel/vengence-ui"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <IconBrandGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </li>
                <li><span className="text-neutral-400 dark:text-neutral-600 text-xs">MIT License</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-neutral-500 dark:text-neutral-500">
          <p>© 2026 Vengence UI. Open-source component system.</p>
          <p>
            Registry endpoint:{" "}
            <code className="rounded bg-neutral-200/50 dark:bg-neutral-900 px-1.5 py-0.5 text-neutral-700 dark:text-neutral-300 font-mono text-[11px]">
              https://vengence-rho.vercel.app/r
            </code>
          </p>
        </div>
      </div>
    </footer>
  );
}
