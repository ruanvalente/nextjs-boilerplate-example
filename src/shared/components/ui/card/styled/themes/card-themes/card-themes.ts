import { css } from 'styled-components'

export type CardStyledHeadingTypeProps = {
  as?: keyof typeof fontSizeStyles
}

export type CardStyledActionButtonTypesProps = {
  variant?: keyof typeof variantButtonStyled
}

export const fontSizeStyles = {
  h1: css`
    font-size: 5rem;
  `,
  h2: css`
    font-size: 4.5rem;
  `,
  h3: css`
    font-size: 4rem;
  `,
  h4: css`
    font-size: 3.5rem;
  `,
  h5: css`
    font-size: 3rem;
  `,
  h6: css`
    font-size: 2.5rem;
  `,
  p: css`
    font-size: 1rem;
  `,
}

const variantButtonStyled = {
  default: css`
    background-color: #ffb106;
    color: #fff;
    transition: all 0.5s ease;

    &:hover {
      background-color: #fff;
      color: #ffb106;
      outline: 2px solid #ffb106;
    }
  `,
  outline: css`
    background-color: transparent;
    outline: 2px solid #222;
    color: #222;
    transition: all 0.5s ease;

    &:hover {
      background-color: transparent;
      color: #ffb106;
      outline: 2px solid #ffb106;
    }
  `,
  rounded: css`
    background-color: #ffb106;
    color: #fff;
    transition: all 0.5s ease;
    border-radius: 50px;
  `,
}

export const getFontSize = (props: CardStyledHeadingTypeProps) => {
  if (props.as && fontSizeStyles[props.as]) {
    return fontSizeStyles[props.as]
  }
  return fontSizeStyles.p
}

export const getVariantButtonStyled = (
  props: CardStyledActionButtonTypesProps,
) => {
  if (props.variant && variantButtonStyled[props.variant]) {
    return variantButtonStyled[props.variant]
  }
  return variantButtonStyled.default
}
