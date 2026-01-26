import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "heading-1": ["61px", { lineHeight: "1.2", letterSpacing: "0" }],
        "heading-2": ["49px", { lineHeight: "1.2", letterSpacing: "0" }],
        "heading-3": ["39px", { lineHeight: "1.2", letterSpacing: "0" }],
        "heading-4": ["31px", { lineHeight: "1.2", letterSpacing: "0" }],
        "heading-5": ["25px", { lineHeight: "1.2", letterSpacing: "0" }],
        "heading-6": ["20px", { lineHeight: "1.2", letterSpacing: "0" }],
        "body-1": ["16px", { lineHeight: "1.2", letterSpacing: "0" }],
        "body-2": ["13px", { lineHeight: "1.2", letterSpacing: "0" }],
        "caption-1": ["10px", { lineHeight: "1.2", letterSpacing: "0" }],
      },
      colors: {
        neutral: {
          0: "var(--neutral-0)",
          50: "var(--neutral-50)",
          70: "var(--neutral-70)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        destructive: "hsl(var(--destructive))",
        ring: "hsl(var(--ring))",
        radius: {
          sm: "var(--radius-sm)",
          md: "var(--radius-md)",
          lg: "var(--radius-lg)",
        },
      },
      spacing: {
        "3": "0.75rem",
        "2": "0.5rem",
        "1": "0.25rem",
      },
      borderRadius: {
        "4px": "4px",
      },
    },
  },
  plugins: [],
};

export default config;
