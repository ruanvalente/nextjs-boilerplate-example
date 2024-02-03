import { HTMLProps, ReactNode } from 'react'
import { CardStyledContent } from './styled/card-styled'

type CardContentType = {
  children: ReactNode
} & HTMLProps<HTMLDivElement>

export function CardContent({ children, ...props }: CardContentType) {
  return <CardStyledContent {...props}>{children}</CardStyledContent>
}
