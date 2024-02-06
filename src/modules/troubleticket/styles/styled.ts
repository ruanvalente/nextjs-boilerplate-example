'use client'

import styled from 'styled-components'

export const TroubletTicketTableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  div:first-of-type {
    max-width: 60vw;
    width: 100%;
  }
`

export const TroubletTicketTableHeading = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
`
