import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
        strylio: {
          purple: {
            light: '#8B5CF6',
            DEFAULT: '#6D28D9',
            dark: '#5B21B6',
          },
          gray: {
            light: '#F9FAFB',
            DEFAULT: '#4B5563',
            dark: '#1F2937',
          }
        },
        'strylio-purple': '#6B46C1',
        'strylio-purple-dark': '#553C9A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
