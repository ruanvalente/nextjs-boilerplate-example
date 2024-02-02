'use client'

import { FullCalendarComponent } from '@/shared/components/fullcalendar'
import {
  AppointmentHomeStyled,
  AppointmentHomeStyledCard,
  AppointmentHomeStyledCardHeader,
  AppointmentHomeStyledCardHeaderActionButton,
  AppointmentHomeStyledCardHeaderTitle,
  AppointmentHomeStyledContainer,
  AppointmentHomeStyledTitle,
} from '@/modules/appointment/components/appointment-home/styled/appointment-home-styled'

export default function AppointmentHome() {
  return (
    <AppointmentHomeStyled>
      <AppointmentHomeStyledTitle>Agendamentos</AppointmentHomeStyledTitle>
      <AppointmentHomeStyledContainer>
        <FullCalendarComponent />
        <AppointmentHomeStyledCard>
          <AppointmentHomeStyledCardHeader>
            <AppointmentHomeStyledCardHeaderTitle>
              Card title
            </AppointmentHomeStyledCardHeaderTitle>
            <AppointmentHomeStyledCardHeaderActionButton
              icon="pi pi-replay"
              iconPos="right"
              rounded
              text
            />
            <AppointmentHomeStyledCardHeaderActionButton
              icon="pi pi-trash"
              iconPos="right"
              rounded
              text
            />
          </AppointmentHomeStyledCardHeader>
          <div>Card content</div>
        </AppointmentHomeStyledCard>
      </AppointmentHomeStyledContainer>
    </AppointmentHomeStyled>
  )
}
