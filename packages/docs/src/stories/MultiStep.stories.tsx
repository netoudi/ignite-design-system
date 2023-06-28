import { Box, MultiStep, MultiStepProps } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

type Story = StoryObj<MultiStepProps>

export const Default: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
