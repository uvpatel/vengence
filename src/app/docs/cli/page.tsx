import { DocsContentLayout } from "@/components/docs/docs-content-layout";
import { CodeBlock } from "@/components/docs/code-block";

export default function CliDocsPage() {
  return (
    <DocsContentLayout>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Distribution
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            CLI & Registry Architecture
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
            How the shadcn-compatible custom registry distributes components directly into developer projects.
          </p>
        </div>

        <div className="space-y-8 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Registry Endpoint</h2>
            <p>
              Vengence UI serves its official shadcn-compatible registry manifests from the following root endpoint:
            </p>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-indigo-400">
              https://vengence-rho.vercel.app/r
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Adding the Remote Namespace</h2>
            <p>
              To configure your project to resolve all <code className="font-mono text-xs text-indigo-400">@vengence</code> components seamlessly, add the registry namespace to your project:
            </p>
            <CodeBlock
              code='bunx shadcn@latest registry add "@vengence=https://vengence-rho.vercel.app/r/{name}.json"'
              language="bash"
            />
            <p className="text-xs text-neutral-500">
              Once added, you can install any component using the shorthand namespace:
            </p>
            <CodeBlock
              code="bunx shadcn@latest add @vengence/magnetic-button"
              language="bash"
            />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Direct URL Installation</h2>
            <p>
              You don&apos;t need to configure a namespace if you prefer direct URLs. The shadcn CLI accepts full JSON manifest URLs directly:
            </p>
            <CodeBlock
              code="bunx shadcn@latest add https://vengence-rho.vercel.app/r/border-beam.json"
              language="bash"
            />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Automated Registry Build</h2>
            <p>
              Vengence UI automatically compiles all registry files during build:
            </p>
            <CodeBlock
              code={`bun run registry:build\n# Compiles registry.json and individual items into /public/r/`}
              language="bash"
            />
          </section>
        </div>
      </main>
    </DocsContentLayout>
  );
}
