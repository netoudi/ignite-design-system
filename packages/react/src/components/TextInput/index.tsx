import React from 'react'
import * as S from './styles'

export interface TextInputProps extends React.ComponentProps<typeof S.Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <S.Container>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.Container>
  )
}

TextInput.displayName = 'TextInput'
