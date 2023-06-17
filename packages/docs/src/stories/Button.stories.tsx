import { Button } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    size: 'small',
  },
}

export const Big: Story = {
  args: {
    size: 'big',
  },
}
