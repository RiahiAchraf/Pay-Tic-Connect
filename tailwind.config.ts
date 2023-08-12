import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          // DEFAULT: '',
          g1: '#111827',
          g2: '#545454',
          g3: '#7F7E7E',
          g4: '#B3B2B2',
          g5: '#F4F1EE',
          g6: '#FAF7F6',
          g7: '#FBF8F6',
          g8: '#F8F9FB',
          g9: '#E1E1E1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
