/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0A1929',
        'navy': '#1A2F4A',
        'green-dark': '#1B4332',
        'green': '#2D6A4F',
        'green-light': '#52B788',
      },
      fontFamily: {
        'heading': ['Khand', 'sans-serif'],
        'body': ['Switzer', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

