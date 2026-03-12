import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import "../src/styles/globals.css"
import "../src/themes/anchor.css"
import "../src/themes/veros.css"
import "../src/themes/ripple.css"

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        "Anchor (Insurance)": "theme-anchor",
        "Veros (Biotech)": "theme-veros",
        "Ripple (Charity)": "theme-ripple",
        "Default (Neutral)": "",
      },
      defaultTheme: "Anchor (Insurance)",
    }),
  ],
  parameters: {
    a11y: {
      // axe-core runs automatically on every story
      config: {},
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
