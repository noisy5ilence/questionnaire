import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'nebula-background': 'var(--nebula-background)',
        'nebula-foreground': 'var(--nebula-foreground)',
        'nebula-foreground-alt': 'var(--nebula-foreground-alt)',
        'nebula-button-background': 'var(--nebula-button-background)',
        'nebula-button-foreground': 'var(--nebula-button-foreground)',
        'nebula-button-background-alt': 'var(--nebula-button-background-alt)',
        'nebula-button-border': 'var(--nebula-button-border-color)'
      },
      backgroundImage: {
        'nebula-gradient': 'var(--nebula-gradient)'
      },
      boxShadow: {
        'nebula-button': 'var(--nebula-button-box-shadow)',
        'nebula-button-alt': 'var(--nebula-button-box-shadow-alt)'
      }
    }
  },
  plugins: []
} satisfies Config;
