import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { Button } from "./Button"
import { withAnchorTheme, withVeroTheme, withRippleTheme } from "../../storybook/decorators"

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Get a Quote",
  },
}

export default meta
type Story = StoryObj<typeof Button>

// --- Default ---

export const Default: Story = {}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

// --- States ---

export const Disabled: Story = {
  args: { isDisabled: true, children: "Unavailable" },
}

// --- Themes ---
// These override the global theme switcher to pin a specific theme per story.

export const AnchorTheme: Story = {
  decorators: [withAnchorTheme],
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button>Get a Quote</Button>
      <Button variant="outline">Learn More</Button>
      <Button variant="secondary">Compare Plans</Button>
    </div>
  ),
}

export const VeroTheme: Story = {
  decorators: [withVeroTheme],
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button>View Trial</Button>
      <Button variant="outline">Read Publication</Button>
      <Button variant="secondary">Patient Resources</Button>
    </div>
  ),
}

export const RippleTheme: Story = {
  decorators: [withRippleTheme],
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button>Donate Now</Button>
      <Button variant="outline">See Campaigns</Button>
      <Button variant="secondary">Share</Button>
    </div>
  ),
}

// --- Interactive (play function) ---

export const Interactive: Story = {
  args: { children: "Click me" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /click me/i })
    await expect(button).toBeInTheDocument()
    await expect(button).not.toHaveAttribute("disabled")
    await userEvent.click(button)
  },
}
