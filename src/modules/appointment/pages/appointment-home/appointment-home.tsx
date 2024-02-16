'use client'

import { FullCalendarComponent } from '@/shared/components/fullcalendar'
import {
  AppointmentHomeStyled,
  AppointmentHomeStyledContainer,
} from '@/modules/appointment/components/appointment-home/styled/appointment-home-styled'
import Card from '@/shared/components/ui/card/card'

export default function AppointmentHome() {
  return (
    <AppointmentHomeStyled>
      <h1 className="my-4 text-3xl font-bold">Agendamentos</h1>
      <AppointmentHomeStyledContainer>
        <FullCalendarComponent />
        <Card.Wrapper>
          <Card.Content>
            <Card.ActionWrapper>
              <Card.Typography as="h6">Card title</Card.Typography>
              <Card.ActionButton rounded variant="outline">
                <i className="pi pi-replay"></i>
              </Card.ActionButton>
              <Card.ActionButton rounded variant="outline">
                <i className="pi pi-trash"></i>
              </Card.ActionButton>
            </Card.ActionWrapper>
            <Card.Typography as="p">Card paragraph</Card.Typography>
          </Card.Content>
        </Card.Wrapper>
      </AppointmentHomeStyledContainer>
    </AppointmentHomeStyled>
  )
}
