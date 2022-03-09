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
        textnav: "#E5E9F0",
        accent: "#88C0D0",
        borders: "#434C5E",
        yellnord: "#EBCB8B",
        bglight: "#E5E9F0",
        navlight: "hsl(220, 27%, 95%)",
        riplight: "hsl(220, 27%, 97%)",
        fttextl: "hsl(222, 17%, 32%)",
        sblight: "hsl(220, 27%, 93%)",
        textlight: "#232731",
        accentlight: "#5E81AC",
        borderslight: "hsl(220, 27%, 85%)",
        rednord: "#BF616A",
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
  plugins: [require("tailwind-scrollbar")],
};
