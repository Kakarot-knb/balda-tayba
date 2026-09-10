import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F4F1EA',
        'surface': '#EAE5D9',
        'primary-text': '#2C2C2A',
        'deep-bg': '#1A1D1C',
        'deep-green': '#1E2B22',
        'text-secondary': '#545450',
        'accent-red': '#9B2226',
        'accent-gold': '#B59A6D',
        'accent-silver': '#A9AFB2',
      },
      boxShadow: {
        'editorial': '0 20px 40px -10px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0,0,0,0.02)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        heading: ['var(--font-mandisa)', 'sans-serif'],
        body: ['var(--font-mandisa)', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
export default config
