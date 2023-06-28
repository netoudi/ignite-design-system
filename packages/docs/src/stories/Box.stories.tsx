import { Box, BoxProps, Text } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box content...</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

type Story = StoryObj<BoxProps>

export const Default: Story = {}
