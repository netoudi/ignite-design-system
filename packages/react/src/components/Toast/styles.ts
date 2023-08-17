import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Provider = Toast.Provider

export const Root = styled(Toast.Root, {
  position: 'relative',
  display: 'flex',
  width: '360px',
  padding: '12px 20px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  borderRadius: '6px',
  border: '1px solid $gray600',
  background: '$gray800',
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  margin: 0,
})

export const Close = styled(Toast.Close, {
  position: 'absolute',
  top: '0.8rem',
  right: '0.8rem',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  color: '$gray100',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  right: '1rem',
  bottom: '1rem',
})
