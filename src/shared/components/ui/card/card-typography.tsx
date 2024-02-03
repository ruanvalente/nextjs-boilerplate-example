import { PropsWithChildren, HTMLProps } from 'react'
import { CardStyledTypography } from './styled/card-styled'

type CardTypographyTypeAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

type CardStyledTypographyTypeProps = {
  as?: CardTypographyTypeAs
} & PropsWithChildren<HTMLProps<HTMLElement>>

export function CardTypography({
  as = 'p',
  children,
}: CardStyledTypographyTypeProps) {
  return <CardStyledTypography as={as}>{children}</CardStyledTypography>
}
