import { HTMLProps, ReactNode } from 'react'
import { CardStyledWrapper } from './styled/card-styled'

type CardWrapperType = {
  children: ReactNode
} & HTMLProps<HTMLDivElement>

export function CardWrapper({ children }: CardWrapperType) {
  return <CardStyledWrapper>{children}</CardStyledWrapper>
}
