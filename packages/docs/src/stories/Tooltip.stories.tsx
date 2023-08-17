import { Tooltip, TooltipProps, Text, Box } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    title: 'Hello world!',
    children: <Text size="lg">Tooltip</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

type Story = StoryObj<TooltipProps>

export const Default: Story = {}
