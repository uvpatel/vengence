"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ExpandableCardItem {
  id?: string;
  title: string;
  description: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
}

export function ExpandableCard({
  items,
  className,
}: {
  items: ExpandableCardItem[];
  className?: string;
}) {
  const [active, setActive] = useState<ExpandableCardItem | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              layoutId={prefersReducedMotion ? undefined : `card-${active.title}-${id}`}
              ref={ref}
              className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between pb-4">
                <div>
                  <motion.h3
                    layoutId={prefersReducedMotion ? undefined : `title-${active.title}-${id}`}
                    className="text-lg font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={prefersReducedMotion ? undefined : `description-${active.description}-${id}`}
                    className="text-sm text-neutral-500 dark:text-neutral-400"
                  >
                    {active.description}
                  </motion.p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                >
                  ✕
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                {active.content}
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 w-full", className)}>
        {items.map((item) => (
          <motion.div
            layoutId={prefersReducedMotion ? undefined : `card-${item.title}-${id}`}
            key={item.title}
            onClick={() => setActive(item)}
            className="flex cursor-pointer flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
          >
            <div>
              <motion.h3
                layoutId={prefersReducedMotion ? undefined : `title-${item.title}-${id}`}
                className="font-semibold text-neutral-900 dark:text-neutral-100"
              >
                {item.title}
              </motion.h3>
              <motion.p
                layoutId={prefersReducedMotion ? undefined : `description-${item.description}-${id}`}
                className="mt-1 text-sm text-neutral-500 dark:text-neutral-400"
              >
                {item.description}
              </motion.p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-medium text-neutral-900 dark:text-white">
              <span>Expand details</span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
