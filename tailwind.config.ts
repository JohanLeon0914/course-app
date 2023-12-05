import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#141227",
        bgLight: "#28264e",
        bgDark: "#0d0a17",
        darkText: "#242424",
        lightText: "#7f79a8",
      },
    },
  },
  plugins: [],
}
export default config
