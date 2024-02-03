import styled, { css } from 'styled-components'

const fontSizeStyles = {
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

interface CardStyledHeadingProps {
  as?: keyof typeof fontSizeStyles
}

const getFontSize = (props: CardStyledHeadingProps) => {
  if (props.as && fontSizeStyles[props.as]) {
    return fontSizeStyles[props.as]
  }
  return fontSizeStyles.p
}

export const CardStyledWrapper = styled.div`
  padding: 1.5rem 2rem;

  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`
export const CardStyledContent = styled.div``
export const CardStyledTypography = styled.div<CardStyledHeadingProps>`
  ${(props) => getFontSize(props)}
`

export const CardStyledAction = styled.div``
