module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      "heading": ["Outfit", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
