'use client'

import { HTMLProps, PropsWithChildren } from 'react'
import { CardStyledContent } from './styled/card-styled'

type CardContentType = {} & PropsWithChildren<HTMLProps<HTMLDivElement>>

export function CardContent({ children, ...props }: CardContentType) {
  return <CardStyledContent {...props}>{children}</CardStyledContent>
}
