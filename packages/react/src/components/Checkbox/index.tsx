import React from 'react'
import { Check } from '@phosphor-icons/react'
import * as S from './styles'

export interface CheckboxProps
  extends React.ComponentProps<typeof S.Container> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <S.Container {...props}>
      <S.Indicator>
        <Check weight="bold" />
      </S.Indicator>
    </S.Container>
  )
}

Checkbox.displayName = 'Checkbox'
