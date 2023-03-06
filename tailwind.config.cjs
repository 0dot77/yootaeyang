/** @type {import('tailwindcss').Config} */
/* Baisc Fonts (kr / en) */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-image": "url('/imgs/look.jpg')",
      },
    },
  },
  plugins: [],
};
