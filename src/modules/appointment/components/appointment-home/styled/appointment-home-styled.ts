import { Button as PrimeButton } from 'primereact/button'
import styled from 'styled-components'

export const AppointmentHomeStyled = styled.div`
  width: 100%;
  height: 100%;
`
export const AppointmentHomeStyledTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const AppointmentHomeStyledContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(450px, 1fr) 1fr;
  gap: 4rem;
`
export const AppointmentHomeStyledCard = styled.div`
  padding: 1.5rem 2rem;

  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`

export const AppointmentHomeStyledCardHeader = styled.div`
  display: flex;
  align-items: center;
`

export const AppointmentHomeStyledCardHeaderTitle = styled.h2`
  flex: 1;
`

export const AppointmentHomeStyledCardHeaderActionButton = styled(PrimeButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #222;
  background-color: #ffb106;
  transition: all 0.5s;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    color: white;
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .p-button.p-button-text:not(:disabled):active {
    background: #ffb106;
    color: #ffb106;
    border-color: transparent;
  }
`
