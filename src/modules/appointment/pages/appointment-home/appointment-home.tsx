'use client'

import { FullCalendarComponent } from '@/shared/components/fullcalendar'
import {
  AppointmentHomeStyled,
  AppointmentHomeStyledContainer,
  AppointmentHomeStyledTitle,
} from '@/modules/appointment/components/appointment-home/styled/appointment-home-styled'
import Card from '@/shared/components/ui/card/card'

export default function AppointmentHome() {
  return (
    <AppointmentHomeStyled>
      <AppointmentHomeStyledTitle>Agendamentos</AppointmentHomeStyledTitle>
      <AppointmentHomeStyledContainer>
        <FullCalendarComponent />
        <Card.Wrapper>
          <Card.Content>
            <Card.Typography as="h6">Card title</Card.Typography>
            <Card.Typography as="p">Card paragraph</Card.Typography>
          </Card.Content>
        </Card.Wrapper>
      </AppointmentHomeStyledContainer>
    </AppointmentHomeStyled>
  )
}
