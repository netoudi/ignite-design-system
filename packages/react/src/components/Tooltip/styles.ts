import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const Provider = Tooltip.Provider
export const Root = Tooltip.Root
export const Trigger = Tooltip.Trigger
export const Portal = Tooltip.Portal

export const Content = styled(Tooltip.Content, {
  padding: '0.75rem 1rem',
  background: '$gray900',
  borderRadius: 5,
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
