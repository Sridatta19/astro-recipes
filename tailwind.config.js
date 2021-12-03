const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const themes = {
  skin: {
    primary: "var(--color-background)",
    "primary-muted": "var(--color-background-muted)",
    secondary: "var(--color-text)",
    "secondary-muted": "var(--color-text-muted)",
    accent: "var(--color-accent)",
    "accent-hover": "var(--color-accent-hover)",
    "accent-muted": "var(--color-accent-muted)",
  },
};

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...themes,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      yellow: colors.yellow,
      indigo: colors.indigo,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.skin.secondary"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
