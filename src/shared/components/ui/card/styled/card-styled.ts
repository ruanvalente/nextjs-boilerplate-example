import styled from 'styled-components'
import {
  CardStyledActionButtonTypesProps,
  CardStyledHeadingTypeProps,
  getFontSize,
  getVariantButtonStyled,
} from './themes/card-themes'

export const CardStyledWrapper = styled.div`
  padding: 1.5rem 2rem;

  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`
export const CardStyledContent = styled.div``
export const CardStyledTypography = styled.div<CardStyledHeadingTypeProps>`
  flex: 1;

  ${(props) => getFontSize(props)}
`
export const CardStyledActionWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const CardStyledActionButton = styled.button<CardStyledActionButtonTypesProps>`
  padding: 0.75rem 1rem;
  border: none;
  background: none;

  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  ${(props) => getVariantButtonStyled(props)}
`
