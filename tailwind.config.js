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
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
    extend: {
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
      },
      backgroundImage: {
        "hero-pattern": "url('/others/topography.svg')",
      },
      gridTemplateColumns: {
        root: "auto auto auto",
      },
    },
  },
  plugins: [require("tailwindcss-ripple")(), require("tailwind-scrollbar")],
};
