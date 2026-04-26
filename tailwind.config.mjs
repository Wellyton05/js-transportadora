/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002D5C',
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B5D7',
          300: '#6690C3',
          400: '#336BAF',
          500: '#002D5C',
          600: '#00244A',
          700: '#001A3A',
          800: '#001229',
          900: '#000A18',
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
          DEFAULT: '#E30613',
          light: '#FF4D58',
          dark: '#A6040E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'diagonal-lines': "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(192,192,192,0.1) 10px, rgba(192,192,192,0.1) 11px)",
        'hero-gradient': 'linear-gradient(135deg, #002D5C 0%, #001A3A 50%, #002D5C 100%)',
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
