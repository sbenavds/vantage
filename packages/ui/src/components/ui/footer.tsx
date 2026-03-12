import * as React from "react"
import { cn } from "@/lib/utils"

export interface FooterLinkGroup {
  heading: string
  links: { label: string; href: string }[]
}

export interface FooterProps {
  logo: React.ReactNode
  tagline?: string
  groups?: FooterLinkGroup[]
  legal?: string
  className?: string
}

function Footer({ logo, tagline, groups = [], legal, className }: FooterProps) {
  return (
    <footer className={cn("border-t border-border bg-background", className)}>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            {logo}
            {tagline && (
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {tagline}
              </p>
            )}
          </div>

          {groups.length > 0 && (
            <nav aria-label="Footer navigation">
              <ul
                className="grid grid-cols-2 gap-8 sm:grid-cols-3"
                role="list"
              >
                {groups.map((group) => (
                  <li key={group.heading}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                      {group.heading}
                    </h3>
                    <ul className="mt-4 space-y-3" role="list">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {legal && (
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">{legal}</p>
          </div>
        )}
      </div>
    </footer>
  )
}

export { Footer }
