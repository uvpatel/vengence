"use client";

import { useCallback, useState } from "react";
import { DocsHeader } from "./docs-header";
import { DocsSidebar } from "./docs-sidebar";

export function DocsContentLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback((open: boolean) => setMobileOpen(open), []);

  return (
    <div className="relative min-h-0 flex-1">
      <DocsSidebar
        mobileOpen={mobileOpen}
        onMobileOpenChange={closeMobile}
      />
      <div className="h-[calc(100dvh-var(--docs-header-height))] overflow-y-auto md:ml-[280px]">
        <DocsHeader onMenuClick={() => setMobileOpen(true)} />
        {children}
      </div>
    </div>
  );
}
