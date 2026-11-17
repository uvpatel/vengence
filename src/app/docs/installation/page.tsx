import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { CodeBlock } from "@/components/docs/code-block";

export default function InstallationDocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex">
      <DocsSidebar />

      <main className="flex-1 py-8 md:pl-8 max-w-4xl min-w-0">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Setup
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            Installation
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
            How to configure and install Vengence UI components in your Next.js or React application.
          </p>
        </div>

        <div className="space-y-10 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {/* Step 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-xs">
                1
              </span>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                Initialize shadcn in your project
              </h2>
            </div>
            <p>
              If your project doesn&apos;t have shadcn configured yet, run the official initialization command:
            </p>
            <CodeBlock code="bunx shadcn@latest init" language="bash" />
          </section>

          {/* Step 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-xs">
                2
              </span>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                Install Motion and Icon dependencies
              </h2>
            </div>
            <p>
              Vengence UI uses <code className="font-mono text-indigo-400">motion</code> and <code className="font-mono text-indigo-400">@tabler/icons-react</code> for animation physics and icons:
            </p>
            <CodeBlock
              code="bun add motion @tabler/icons-react clsx tailwind-merge"
              language="bash"
            />
          </section>

          {/* Step 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-xs">
                3
              </span>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                Install any Vengence UI component
              </h2>
            </div>
            <p>
              Use the official registry namespace or direct URL to add any component to your project:
            </p>
            <CodeBlock
              code={`# Using namespace\nbunx shadcn@latest add @vengence/spotlight-card\n\n# Or using direct registry URL\nbunx shadcn@latest add https://vengence-rho.vercel.app/r/spotlight-card.json`}
              language="bash"
            />
          </section>

          {/* Step 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-xs">
                4
              </span>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                Import and use in your page
              </h2>
            </div>
            <CodeBlock
              code={`import { SpotlightCard } from "@/components/ui/spotlight-card";\n\nexport default function Page() {\n  return (\n    <SpotlightCard className="max-w-md p-6">\n      <h3 className="font-bold text-lg">Hello Vengence UI</h3>\n      <p className="text-sm text-neutral-400">Interactive mouse illumination.</p>\n    </SpotlightCard>\n  );\n}`}
              language="tsx"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
