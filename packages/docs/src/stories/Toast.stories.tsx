import { Toast, ToastProps } from '@ignite/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
} as Meta<ToastProps>

type Story = StoryObj<ToastProps>

export const Default: Story = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
    onOpenChange: (open) => console.log(open),
  },
}
