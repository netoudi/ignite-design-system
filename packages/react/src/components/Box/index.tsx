import React from 'react'
import { styled } from '../../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends React.ComponentProps<typeof Box> {
  as?: React.ElementType
}

Box.displayName = 'Box'
