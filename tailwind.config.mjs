/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#030d6a',
          50: '#e6e7f0',
          100: '#cccedf',
          200: '#999dbe',
          300: '#666b9e',
          400: '#333a7d',
          500: '#030d6a',
          600: '#020a55',
          700: '#020840',
          800: '#01052b',
          900: '#010315',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          50: '#F4F6F8',
          100: '#E8EAED',
          200: '#D4D6D9',
          300: '#C0C0C0',
          400: '#A0A0A0',
          500: '#808080',
        },
        accent: {
          DEFAULT: '#a10000',
          light: '#d43333',
          dark: '#7a0000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'diagonal-lines': "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(192,192,192,0.1) 10px, rgba(192,192,192,0.1) 11px)",
        'hero-gradient': 'linear-gradient(135deg, #030d6a 0%, #01052b 50%, #030d6a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
