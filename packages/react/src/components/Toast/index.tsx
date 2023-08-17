import { X } from '@phosphor-icons/react'
import * as S from './styles'

export interface ToastProps {
  title: string
  description: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Toast({ title, description, open, onOpenChange }: ToastProps) {
  return (
    <S.Provider>
      <S.Root open={open} onOpenChange={onOpenChange}>
        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>

        <S.Close>
          <X size={24} />
        </S.Close>
      </S.Root>

      <S.Viewport />
    </S.Provider>
  )
}

Toast.displayName = 'Toast'
