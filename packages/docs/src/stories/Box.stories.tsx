import { Box } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <span>Box content...</span>,
  },
} as Meta<typeof Box>

type Story = StoryObj<typeof Box>

export const Default: Story = {}
