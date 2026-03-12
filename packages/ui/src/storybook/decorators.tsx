import type { Decorator } from "@storybook/react"

// Apply a theme class to the html element for individual story overrides.
// Usage: export const AnchorTheme: Story = { decorators: [withAnchorTheme] }
const withThemeClass =
  (themeClass: string): Decorator =>
  (Story) => {
    document.documentElement.className = themeClass
    return <Story />
  }

export const withAnchorTheme = withThemeClass("theme-anchor")
export const withVeroTheme = withThemeClass("theme-veros")
export const withRippleTheme = withThemeClass("theme-ripple")
