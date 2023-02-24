/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          neutral: "#000000",
          "base-100": "#ffffff",
        },
        light: {
          neutral: "#ffffff",
          "base-100": "#000000",
        },
      },
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["ProductSans"],
        serif: ["ProductSans"],
        mono: ["ProductSans"],
        display: ["ProductSans"],
        body: ["ProductSans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
