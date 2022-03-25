const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Inter'", "ui-sans-serif", "sans-serif"],
      mono: ["'Source Code Pro'", "monospace"],
    },
    extend: {
      boxShadow: {
        btmbar:
          "0 -1px 6px 0 rgb(0 0 0 / 0.05), 0 -1px 3px -1px rgb(0 0 0 / 0.05)",
      },
      colors: {
        nord: {
          dark: {
            bg: "#232731",
            nav: "hsl(222, 17%, 24%)",
            rip: "hsl(222, 17%, 32%)",
            fttext: "hsl(222, 17%, 60%)",
            sb: "#272C37",
            sbtp: "#272C37CC",
            text: "#E5E9F0",
            accent: "#88C0D0",
            borders: "#434C5E",
            highlight: "#EBCB8B",
          },
          light: {
            bg: "#E5E9F0",
            nav: "hsl(220, 27%, 95%)",
            rip: "hsl(220, 27%, 97%)",
            fttext: "hsl(222, 17%, 32%)",
            sb: "hsl(220, 27%, 93%)",
            sbtp: "hsla(220, 27%, 93%, 0.8)",
            text: "#232731",
            accent: "#5E81AC",
            borders: "hsl(220, 27%, 85%)",
            highlight: "#BF616A",
          },
        },
        token: {
          dark: {
            comment: "hsl(221, 16%, 46%)",
            defaultacc: "hsl(210, 34%, 63%)",
            num: "hsl(311, 20%, 63%)",
            selector: "hsl(92, 28%, 65%)",
            function: "hsl(193, 43%, 67%)",
            important: "hsl(40, 71%, 73%)",
            unstyled: "hsl(60, 30%, 96%)",
          },
          light: {
            comment: "hsl(221, 16%, 21%)",
            defaultacc: "hsl(210, 34%, 33%)",
            num: "hsl(311, 20%, 33%)",
            selector: "hsl(92, 28%, 35%)",
            function: "hsl(193, 43%, 37%)",
            important: "hsl(40, 71%, 43%)",
            unstyled: "#272C37",
          },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/others/topography.svg')",
        "hero-pattern-light": "url('/others/topography-light.svg')",
        "hero-logo": "url('/others/hero-logo.svg')",
        "hero-logo-light": "url('/others/hero-logo-light.svg')",
      },
      gridTemplateColumns: {
        root: "min-content min-content auto",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addVariant }) {
      addVariant(
        "support-blur",
        "@supports ((-webkit-backdrop-filter: blur(4px)) or (backdrop-filter: blur(4px)))"
      );
    }),
  ],
};
