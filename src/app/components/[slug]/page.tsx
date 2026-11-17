import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllComponents,
  getItemBySlug,
} from "@/lib/registry";
import { getFileSource } from "@/lib/source-loader";
import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { ComponentPreviewBox } from "@/components/docs/component-preview-box";
import { CliInstallBox } from "@/components/docs/cli-install-box";
import { PropsTable } from "@/components/docs/props-table";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((c) => ({ slug: c.slug }));
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const sourceCode = getFileSource(item.filePath);
  const allComponents = getAllComponents();
  const currentIndex = allComponents.findIndex((c) => c.slug === slug);
  const prevComponent = currentIndex > 0 ? allComponents[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < allComponents.length - 1
      ? allComponents[currentIndex + 1]
      : null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex">
      {/* Sidebar */}
      <DocsSidebar />

      {/* Main Content Area */}
      <main className="flex-1 py-8 md:pl-8 max-w-4xl min-w-0">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/components" className="hover:text-black dark:hover:text-white">
            Components
          </Link>
          <span>/</span>
          <span className="text-neutral-400">{item.categoryLabel}</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">
            {item.title}
          </span>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {item.categoryLabel}
            </span>
            <span className="rounded-md border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 text-xs font-mono text-neutral-500">
              @vengence/{item.slug}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {item.title}
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Live Interactive Preview Box */}
        <section className="my-8">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            Interactive Preview
          </h2>
          <ComponentPreviewBox
            slug={item.slug}
            title={item.title}
            sourceCode={sourceCode}
            usageCode={item.usageExample}
          />
        </section>

        {/* Installation */}
        <section className="my-10">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Installation
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Install this component directly using the shadcn CLI or by fetching from the registry URL:
          </p>
          <CliInstallBox slug={item.slug} />
        </section>

        {/* Props & API */}
        <section className="my-10">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Props & API Reference
          </h2>
          <PropsTable props={item.props} />
        </section>

        {/* Dependencies */}
        <section className="my-10 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Dependencies
          </h2>
          {item.dependencies && item.dependencies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {item.dependencies.map((dep) => (
                <span
                  key={dep}
                  className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1 font-mono text-xs text-neutral-700 dark:text-neutral-300"
                >
                  {dep}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-neutral-500">
              No extra runtime dependencies required.
            </p>
          )}
        </section>

        {/* Navigation Pagination */}
        <div className="my-12 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-6">
          {prevComponent ? (
            <Link
              href={`/components/${prevComponent.slug}`}
              className="group flex flex-col items-start gap-1"
            >
              <span className="flex items-center gap-1 text-xs text-neutral-400 group-hover:text-black dark:group-hover:text-white">
                <IconArrowLeft className="h-3.5 w-3.5" />
                <span>Previous</span>
              </span>
              <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-500">
                {prevComponent.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextComponent ? (
            <Link
              href={`/components/${nextComponent.slug}`}
              className="group flex flex-col items-end gap-1 ml-auto"
            >
              <span className="flex items-center gap-1 text-xs text-neutral-400 group-hover:text-black dark:group-hover:text-white">
                <span>Next</span>
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-500">
                {nextComponent.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}
