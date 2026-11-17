import * as React from "react";
import { cn } from "@/lib/utils";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  className?: string;
  background?: React.ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = "Learn more",
  children,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-100">
        {background}
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100/80 text-neutral-900 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-100">
            <Icon className="h-5 w-5" />
          </div>
        )}
        {name && (
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {name}
          </h3>
        )}
        {description && (
          <p className="max-w-lg text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
        {children}
      </div>

      {cta && (
        <div className="relative z-10 mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
          {href ? (
            <a href={href} className="inline-flex items-center gap-1">
              <span>{cta}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          ) : (
            <>
              <span>{cta}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
