import { Box, Checkbox, CheckboxProps, Text } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

type Story = StoryObj<CheckboxProps>

export const Default: Story = {}
