import { defaultConfig } from '@pnpmmono/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [defaultConfig],
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    './node_modules/@pnpmmono/**/*.js'
  ],
  theme: {}
}

export default config
