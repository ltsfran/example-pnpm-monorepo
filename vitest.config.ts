import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      clean: true,
      include: [
        '**/*.{ts,tsx}',
        '!**/*.stories.{ts,tsx}',
        '!**/examples/*',
        '!**/__mocks__/*',
        '!**/packages/tailwind-utils/**/*',
        '!**/packages/tailwind-plugin/**/*',
        '!**/packages/icons/**/*'
      ],
      reporter: ['lcov', 'json']
    }
  }
})
