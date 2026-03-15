import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * highlight (default) — warm gold background behind the text, like a marker.
   * underline           — colored underline only, no background.
   */
  variant?: "highlight" | "underline"
  /**
   * Use on dark/primary-colored backgrounds (hero, CTA band).
   * Only applies to the underline variant.
   */
  invert?: boolean
}

/**
 * Small-caps eyebrow label.
 * "highlight": reads --gold-subtle for the background; dark --primary text.
 * "underline": reads --label-accent for color + text-decoration.
 */
function SectionLabel({
  variant = "highlight",
  invert = false,
  className,
  children,
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 inline-block text-xs font-bold uppercase tracking-[0.15em]",
        variant === "highlight" && [
          // Marker underline: gradient colors only the bottom 35% — like a physical highlighter stroke
          "bg-[linear-gradient(transparent_65%,var(--gold-subtle,oklch(0.93_0.04_80))_65%)]",
          "text-[var(--primary,oklch(0.22_0.07_255))]",
        ],
        variant === "underline" && [
          "[text-decoration:underline] [text-underline-offset:4px]",
          invert
            ? "text-[var(--accent-vivid,var(--primary-foreground))] [text-decoration-color:var(--accent-vivid,var(--primary-foreground))]"
            : "text-[var(--label-accent,var(--primary))] [text-decoration-color:var(--label-accent,var(--primary))]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export { SectionLabel }
