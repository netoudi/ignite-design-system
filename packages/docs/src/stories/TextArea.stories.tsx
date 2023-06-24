import { Box, Text, TextArea, TextAreaProps } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

type Story = StoryObj<TextAreaProps>

export const Default: Story = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
