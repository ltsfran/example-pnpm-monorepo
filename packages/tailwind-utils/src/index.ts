import { defaultConfig as tailwindDefaultConfig } from '@pnpmmono/tailwind-plugin'
import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import resolveConfig from 'tailwindcss/resolveConfig'

const {
  theme: { colors, fontSize }
} = resolveConfig(tailwindDefaultConfig)

const textColorClasses = Object.getOwnPropertyNames(colors).map(
  (color) => `text-${color}`
)
const fontSizeClasses = Object.getOwnPropertyNames(fontSize).map(
  (size) => `text-${size}`
)

export const cn = (...args: ClassValue[]): string => {
  const twMerge = extendTailwindMerge({
    override: {
      classGroups: {
        'text-color': textColorClasses,
        'font-size': fontSizeClasses
      }
    }
  })

  return twMerge(clsx(args))
}
