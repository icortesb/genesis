/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de colores definitiva
        'brand-orange': '#FF9F19',
        'brand-olive': '#535205',
        'brand-brown': '#5F330A',
        'brand-gold': '#96803A',
      },
    },
  },
  plugins: [],
};
