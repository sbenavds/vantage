import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
}

export interface NavBarProps {
  logo: React.ReactNode
  items?: NavItem[]
  cta?: React.ReactNode
  className?: string
}

function NavBar({ logo, items = [], cta, className }: NavBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <div className="flex-shrink-0">{logo}</div>

        {items.length > 0 && (
          <nav aria-label="Main navigation">
            <ul className="hidden items-center gap-8 md:flex" role="list">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {cta && <div className="flex-shrink-0">{cta}</div>}
      </div>
    </header>
  )
}

export { NavBar }
