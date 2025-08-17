/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        heading: ['var(--font-urbanist)', 'sans-serif'],
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 1.0s ease-in-out infinite',
        'ring': 'ring 0.8s ease-in-out',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'ring': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 90%': { transform: 'rotate(-10deg)' },
          '20%, 80%': { transform: 'rotate(10deg)' },
          '30%, 50%, 70%': { transform: 'rotate(-10deg)' },
          '40%, 60%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
}