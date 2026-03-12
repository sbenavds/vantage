import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl"
  contained?: boolean
  as?: "section" | "div" | "article"
}

function Section({
  spacing = "lg",
  contained = true,
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        spacing === "sm" && "py-10",
        spacing === "md" && "py-16",
        spacing === "lg" && "py-24",
        spacing === "xl" && "py-32",
        className
      )}
      {...props}
    >
      {contained ? (
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  )
}

export { Section }
