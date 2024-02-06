'use client'

import { HTMLProps, PropsWithChildren } from 'react'
import { CardStyledActionWrapper } from './styled/card-styled'

type CardActionWrapperTypeProps = {} & PropsWithChildren<
  HTMLProps<HTMLDivElement>
>

export function CardActionWrapper({
  children,
  ...props
}: CardActionWrapperTypeProps) {
  return (
    <CardStyledActionWrapper {...props}>{children}</CardStyledActionWrapper>
  )
}
