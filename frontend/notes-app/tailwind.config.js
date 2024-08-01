/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E",
        pink: "#FF8AAE",
        pinkHover: "#FF7BA9",
        lightPink: "rgb(255, 211, 224)",
      },
    },
  },
  plugins: [],
};
