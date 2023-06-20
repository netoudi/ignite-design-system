import { Text, TextProps } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nobis vero sed culpa, accusantium ducimus, repellendus aut architecto velit nam fugiat tenetur deserunt quis aliquam aperiam inventore dicta? Maiores, non?',
  },
} as Meta<TextProps>

type Story = StoryObj<TextProps>

export const Default: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text...',
    as: 'strong',
  },
}
