/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        golden: "#E58411",
        "lite-black": "#1E1E1E",
        "product-text-color": "#0D1B39",
        "search-bg": "rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        "Gilroy-Bold": ["Gilroy-Bold", "sans-sarif"],
        "Gilroy-Medium": ["Gilroy-Medium", "sans-sarif"],
        "Gilroy-Regular": ["Gilroy-Regular", "sans-sarif"],
        "Inter-Regular": ["Inter-Regular", "sans-sarif"],
        "Inter-Medium": ["Inter-Medium", "sans-sarif"],
        "DMSans-Regular": ["DMSans-Regular", "sans-sarif"],
      },
      backgroundImage: {
        "hero-sec":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 86.13%, #FFFFFF 100%),  url('/src/assets/image/hero/herobg.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
