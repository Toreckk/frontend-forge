import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        primary: ["var(--font-primary)", "sans-serif"],
      },
      colors: {
        skin: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          tertiary: "var(--color-tertiary)",
          white: "var(--color-white)",
        },
      },

      spacing: {
        "500": "var(--spacing-500)",
        "300": "var(--spacing-300)",
        "200": "var(--spacing-200)",
      },

      fontSize: {
        "preset-1": [
          "var(--text-size-p1)",
          {
            lineHeight: "var(--text-line-height-p1)",
          },
        ],
        "preset-2": [
          "var(--text-size-p2)",
          {
            lineHeight: "var(--text-line-height-p2)",
          },
        ],
      },

      letterSpacing: {
        p2: "var(--text-spacing-p2)",
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
