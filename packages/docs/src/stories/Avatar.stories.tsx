import { Avatar, AvatarProps } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/netoudi.png',
    alt: 'John Doe',
  },
} as Meta<AvatarProps>

type Story = StoryObj<AvatarProps>

export const Default: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
