import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: 'var(--font-roboto)',
    },
    colors: {
      gray1: '#121214',
      gray2: '#202024',
      gray3: '#8D8D99',
      gray4: '#C4C4CC',
      gray5: '#E1E1E6',
      white: '#FFFFFF',
      principal: '#00875F',
      light: '#00B37E',
    },
  },
  plugins: [],
}
export default config
