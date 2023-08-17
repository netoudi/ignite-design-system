import React from 'react'
import { Text } from '../Text'
import * as S from './styles'

export interface TooltipProps {
  title: string
  children: React.ReactNode
}

export function Tooltip({ title, children }: TooltipProps) {
  return (
    <S.Provider>
      <S.Root>
        <S.Trigger asChild>{children}</S.Trigger>
        <S.Portal>
          <S.Content sideOffset={5}>
            <Text size="sm">{title}</Text>
            <S.Arrow />
          </S.Content>
        </S.Portal>
      </S.Root>
    </S.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
