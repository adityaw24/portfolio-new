/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
  darkMode: "class",
};
