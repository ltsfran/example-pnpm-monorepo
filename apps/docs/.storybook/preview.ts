import type { Preview } from '@storybook/react'
import '../global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        method: '',
        order: ['Components', 'Features', 'TailwindCSS'],
        locales: ''
      }
    }
  }
}

export default preview
