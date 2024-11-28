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
        '!**/packages/icons/**/*'
      ],
      reporter: ['lcov', 'json']
    }
  }
})
