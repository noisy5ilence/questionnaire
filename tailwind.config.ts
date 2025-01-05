import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--clr-bg)',
        fg: 'var(--clr-fg)',
        'fg-alt': 'var(--clr-fg-alt)',
        'bg-btn': 'var(--clr-bg-btn)',
        'fg-btn-alt': 'var(--clr-fg-btn-alt)',
        'bg-btn-alt': 'var(--clr-bg-btn-alt)',
        brd: 'var(--clr-brd)'
      },
      backgroundImage: {
        'bg-alt': 'var(--clr-bg-alt)'
      },
      boxShadow: {
        btn: 'var(--bs-btn)',
        'btn-alt': 'var(--bs-btn-alt)'
      }
    }
  },
  plugins: []
} satisfies Config;
