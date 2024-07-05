/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,vue}"],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: "white",
      primary: "var(--primary-color)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        sm: "100%",
        md: "544px",
      },
    },
    extend: {
      width: {
        header: "calc(100vw - 32px)",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "mocha",
    }),
  ],
};
