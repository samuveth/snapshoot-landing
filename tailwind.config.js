module.exports = {
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(243 176 78)",
        secondary: "#FF6347",
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
