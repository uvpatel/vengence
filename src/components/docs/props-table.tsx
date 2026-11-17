import { ComponentPropDoc } from "@/lib/registry";

export function PropsTable({ props }: { props?: ComponentPropDoc[] }) {
  if (!props || props.length === 0) {
    return (
      <div className="py-4 text-sm text-neutral-500">
        This component extends standard HTML element attributes without mandatory custom props.
      </div>
    );
  }

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-xs uppercase text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono text-xs">
          {props.map((p) => (
            <tr key={p.name} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30">
              <td className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">{p.name}</td>
              <td className="px-4 py-3 text-indigo-500 dark:text-indigo-400">{p.type}</td>
              <td className="px-4 py-3 text-neutral-500">{p.default || "-"}</td>
              <td className="px-4 py-3 font-sans text-xs text-neutral-600 dark:text-neutral-400">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
