import { DocsContentLayout } from "@/components/docs/docs-content-layout";
import { CodeBlock } from "@/components/docs/code-block";

export default function ThemingDocsPage() {
  return (
    <DocsContentLayout>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Styling
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            Theming & Tokens
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
            Learn how Vengence UI leverages Tailwind CSS v4 variables and OKLCH color spaces.
          </p>
        </div>

        <div className="space-y-8 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Tailwind CSS v4 Tokens</h2>
            <p>
              Vengence UI uses modern CSS custom properties declared directly in your global stylesheet without messy JavaScript theme config files:
            </p>
            <CodeBlock
              code={`:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --border: oklch(0.922 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --border: oklch(1 0 0 / 10%);
}`}
              language="css"
            />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Dark Mode Class Strategy</h2>
            <p>
              Dark mode is toggled using the standard <code className="font-mono text-xs text-indigo-400">.dark</code> class selector on the <code className="font-mono text-xs text-indigo-400">&lt;html&gt;</code> element.
            </p>
          </section>
        </div>
      </main>
    </DocsContentLayout>
  );
}
