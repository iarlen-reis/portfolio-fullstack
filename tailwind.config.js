/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: 'var(--font-title)',
        itim: 'var(--font-subtitle)',
        poppins: 'var(--font-body)',
      },
    },
  },
  plugins: [],
}
