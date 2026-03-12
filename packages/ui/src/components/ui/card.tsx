import * as React from "react"
import { cn } from "@/lib/utils"

function Card({
  className,
  marked = false,
  as: Tag = "div",
  ...props
}: React.ComponentProps<"div"> & {
  /** Adds the left-border mark — signature element for trust signals */
  marked?: boolean
  as?: "div" | "article" | "section"
}) {
  return (
    <Tag
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-lg border border-border bg-card py-6 text-card-foreground",
        marked && "border-l-[3px] border-l-[var(--mark-border,var(--primary))]",
        className
      )}
      {...(props as React.ComponentProps<"div">)}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("grid auto-rows-min items-start gap-2 px-6", className)}
      {...props}
    />
  )
}

// Semantic heading — defaults to h3, override level via `as` prop
function CardTitle({
  className,
  as: Tag = "h3",
  ...props
}: React.ComponentProps<"h3"> & { as?: "h2" | "h3" | "h4" }) {
  return (
    <Tag
      data-slot="card-title"
      className={cn("font-semibold leading-snug", className)}
      {...(props as React.ComponentProps<"h3">)}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
