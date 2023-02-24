module.exports = {
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(78 144 243)",
        secondary: "rgb(243 176 78)",
        "primary-dark": "#1E90FF",
        "secondary-dark": "#FF6347",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
  ],
};
