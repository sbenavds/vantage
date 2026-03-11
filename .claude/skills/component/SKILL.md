# Skill: component

## Trigger
Use when creating a new UI component in `packages/ui/src/components/`.
Always run `/gh-workflow` first to create the issue and branch.

## Decision: @vantage/ui vs local component

Before creating, confirm where the component belongs:

**@vantage/ui** — if a recruiter could reasonably expect this in a design system used by
an insurance company, a biotech company, AND a charity. Pure semantics, no domain logic.

**apps/[site]/src/components/** — if it contains domain logic, domain copy, or only makes
sense in one vertical (e.g. QuoteForm, ClinicalTrialCard, DonationCheckout).

## File structure

```
packages/ui/src/components/[ComponentName]/
├── [ComponentName].tsx
├── [ComponentName].stories.tsx
├── [ComponentName].test.tsx
└── index.ts
```

## [ComponentName].tsx — implementation rules

```tsx
// Server Component by default — add "use client" only if needed
import type { ReactNode } from "react"

export interface [ComponentName]Props {
  // document every prop with JSDoc
  /** Visual variant of the component */
  variant?: "default" | "outline" | "ghost"
  /** Size preset */
  size?: "sm" | "md" | "lg"
  children?: ReactNode
  className?: string
}

export function [ComponentName]({ variant = "default", size = "md", children, className }: [ComponentName]Props) {
  return (
    // use semantic HTML
    // use CSS variables only (no hardcoded colors)
    // use React Aria for interactive primitives
    // use cn() for class merging
  )
}
```

Rules:
- Semantic HTML first (`<button>`, `<nav>`, `<article>`, not `<div>` everything)
- CSS variables for all colors — never hardcoded
- React Aria for interactive components (Button, Dialog, Select, etc.)
- `cn()` utility for conditional class merging
- Export named, not default

## [ComponentName].stories.tsx — required stories

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { [ComponentName] } from "./[ComponentName]"
import { withAnchorTheme, withVeroTheme, withRippleTheme } from "../../storybook/decorators"

const meta: Meta<typeof [ComponentName]> = {
  component: [ComponentName],
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof [ComponentName]>

export const Default: Story = { args: { /* default props */ } }
export const Variants: Story = { /* all variant combinations */ }
export const AnchorTheme: Story = { decorators: [withAnchorTheme], args: { /* ... */ } }
export const VeroTheme: Story = { decorators: [withVeroTheme], args: { /* ... */ } }
export const RippleTheme: Story = { decorators: [withRippleTheme], args: { /* ... */ } }
export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    // simulate user interaction, verify accessible state
  },
}
```

## [ComponentName].test.tsx — required tests

```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { [ComponentName] } from "./[ComponentName]"

describe("[ComponentName]", () => {
  it("renders children", () => { /* ... */ })
  it("applies variant class", () => { /* ... */ })
  it("is keyboard accessible", async () => { /* ... */ })
  it("meets a11y requirements", async () => { /* use axe or manual checks */ })
})
```

## index.ts

```ts
export { [ComponentName] } from "./[ComponentName]"
export type { [ComponentName]Props } from "./[ComponentName]"
```

## After creating the component

1. Export from `packages/ui/src/index.ts`
2. Run `pnpm --filter=ui build` to verify no TS errors
3. Run `pnpm --filter=ui storybook` to verify stories render
4. Run `pnpm --filter=ui test` to verify tests pass
5. Commit, push, open PR via `/gh-workflow`

## Output

Report:
- Component name and location
- Props interface summary
- Stories created (list)
- Tests created (list)
- Any a11y decisions made (e.g. why React Aria was used for this)
