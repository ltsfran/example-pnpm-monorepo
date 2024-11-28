import { Button } from '@pnpmmono/button'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    onClick: fn()
  },
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['isFullWidth', 'type', 'width']
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
