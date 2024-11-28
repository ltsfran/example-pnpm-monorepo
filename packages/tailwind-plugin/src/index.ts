import type { Config } from 'tailwindcss'

export const defaultConfig: Config = {
  content: [],
  theme: {
    extend: {
      height: {
        viewport: 'calc(var(--vh, 1vh) * 100)'
      },
      minHeight: {
        viewport: 'calc(var(--vh, 1vh) * 100)'
      }
    }
  }
}
