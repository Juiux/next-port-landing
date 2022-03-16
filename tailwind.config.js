const plugin = require('tailwindcss/plugin');

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
        bgdark: "#232731",
        navdark: "hsl(222, 17%, 24%)",
        ripdark: "hsl(222, 17%, 32%)",
        fttext: "hsl(222, 17%, 60%)",
        sbdark: "#272C37",
        sbdarktp: "#272C37CC",
        textnav: "#E5E9F0",
        accent: "#88C0D0",
        borders: "#434C5E",
        yellnord: "#EBCB8B",
        bglight: "#E5E9F0",
        navlight: "hsl(220, 27%, 95%)",
        riplight: "hsl(220, 27%, 97%)",
        fttextl: "hsl(222, 17%, 32%)",
        sblight: "hsl(220, 27%, 93%)",
        sblighttp: "hsla(220, 27%, 93%, 0.8)",
        textlight: "#232731",
        accentlight: "#5E81AC",
        borderslight: "hsl(220, 27%, 85%)",
        rednord: "#BF616A",
        token: {
          comment: "hsl(221, 16%, 46%)",
          defaultacc: "hsl(210, 34%, 63%)",
          num: "hsl(311, 20%, 63%)",
          selector: "hsl(92, 28%, 65%)",
          function: "hsl(193, 43%, 67%)",
          important: "hsl(40, 71%, 73%)",
          unstyled: "hsl(60, 30%, 96%)",
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
    plugin(function({ addVariant }) {
      addVariant("support-blur", "@supports ((-webkit-backdrop-filter: blur(4px)) or (backdrop-filter: blur(4px)))");
    })
  ],
};
