import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlocks, getItemBySlug } from "@/lib/registry";
import { getFileSource } from "@/lib/source-loader";
import { ComponentPreviewBox } from "@/components/docs/component-preview-box";
import { CliInstallBox } from "@/components/docs/cli-install-box";
import { DocsContentLayout } from "@/components/docs/docs-content-layout";
import { IconArrowLeft } from "@tabler/icons-react";

export const instant = false;

export async function generateStaticParams() {
  const blocks = getAllBlocks();
  return blocks.map((b) => ({ slug: b.slug }));
}

export default async function BlockDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item || item.category !== "blocks") {
    notFound();
  }

  const sourceCode = getFileSource(item.filePath);

  return (
    <DocsContentLayout>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-10">
        <Link
          href="/blocks"
          className="mb-6 inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-black dark:hover:text-white"
        >
          <IconArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Blocks</span>
        </Link>

      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {item.title}
        </h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
      </div>

      <section className="my-8">
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
          Interactive Preview & Source Code
        </h2>
        <ComponentPreviewBox
          slug={item.slug}
          title={item.title}
          sourceCode={sourceCode}
          usageCode={item.usageExample}
        />
      </section>

      <section className="my-10">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          Installation Command
        </h2>
        <CliInstallBox slug={item.slug} />
      </section>
      </main>
    </DocsContentLayout>
  );
}
