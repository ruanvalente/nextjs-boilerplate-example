'use client'

import {
  ErrorPageStyledParagraph,
  ErrorPageStyledWrapper,
} from '@/shared/styles/error-page/error-page-styled'

export default function Error() {
  return (
    <ErrorPageStyledWrapper>
      <h1>Ops, algo de errado aconteceu 🚧</h1>

      <ErrorPageStyledParagraph>
        Infelizmente não conseguimos carregar a informação desejada.
        <br />
        Por favor{' '}
        <strong>
          {' '}
          entre em contato com o suporte pelos nossos canais de atendimento.
        </strong>
      </ErrorPageStyledParagraph>
    </ErrorPageStyledWrapper>
  )
}
