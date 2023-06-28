import { User } from '@phosphor-icons/react'
import { AvatarImageProps } from '@radix-ui/react-avatar'
import * as S from './styles'

export interface AvatarProps extends AvatarImageProps {}

export function Avatar(props: AvatarProps) {
  return (
    <S.Container>
      <S.Image {...props} />

      <S.Fallback delayMs={600}>
        <User />
      </S.Fallback>
    </S.Container>
  )
}

Avatar.displayName = 'Avatar'
