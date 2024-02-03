import { ReactNode } from 'react'
import { CardStyledTypography } from './styled/card-styled'

type CardTypographyTypeAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export function CardTypography({
  children,
  as = 'p',
  ...props
}: {
  children: ReactNode
  as?: CardTypographyTypeAs
}) {
  return (
    <CardStyledTypography as={as} {...props}>
      {children}
    </CardStyledTypography>
  )
}
