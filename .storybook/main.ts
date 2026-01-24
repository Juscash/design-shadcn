import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: [
    "../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/ui/src/**/*.stories.@(mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  typescript: {
    reactDocgen: false
  }
}

export default config
