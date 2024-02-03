import { HTMLProps, PropsWithChildren } from 'react'
import { CardStyledActionButton } from './styled/card-styled'

type CardActionButtonTypeProps = {
  variant?: 'default' | 'outline' | 'rounded'
  rounded: boolean
} & PropsWithChildren<HTMLProps<HTMLButtonElement>>

export function CardActionButton({
  variant = 'default',
  children,
  rounded = false,

}: CardActionButtonTypeProps) {
  return (
    <CardStyledActionButton
      variant={variant}
      style={{ borderRadius: rounded ? '50px' : '8px' }}
    >
      {children}
    </CardStyledActionButton>
  )
}
