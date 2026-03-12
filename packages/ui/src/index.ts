// @vantage/ui — shared design system
// Components are theme-agnostic — they read CSS variables from the active theme.
// Import a theme in each app: import "@vantage/ui/themes/anchor"

// Primitives (Shadcn)
export { Button, buttonVariants } from "./components/ui/button"
export { Badge, badgeVariants } from "./components/ui/badge"

// Card system
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./components/ui/card"

// Layout
export { NavBar } from "./components/ui/nav-bar"
export type { NavBarProps, NavItem } from "./components/ui/nav-bar"

export { Section } from "./components/ui/section"
export type { SectionProps } from "./components/ui/section"

export { Footer } from "./components/ui/footer"
export type { FooterProps, FooterLinkGroup } from "./components/ui/footer"

// Utilities
export { cn } from "./lib/utils"
