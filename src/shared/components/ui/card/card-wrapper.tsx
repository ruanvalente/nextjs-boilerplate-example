'use client'

import { HTMLProps, PropsWithChildren } from 'react'
import { CardStyledWrapper } from './styled/card-styled'

type CardWrapperType = {} & PropsWithChildren<HTMLProps<HTMLDivElement>>

export function CardWrapper({ children, ...props }: CardWrapperType) {
  return <CardStyledWrapper {...props}>{children}</CardStyledWrapper>
}
