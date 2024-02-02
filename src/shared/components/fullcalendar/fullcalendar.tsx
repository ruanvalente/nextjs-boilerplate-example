'use client'

import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import ptBRLocale from '@fullcalendar/core/locales/pt-br'

import { EventContentArg } from '@fullcalendar/core/index.js'
import { FullCalendarWrapper } from '@/shared/styles/fullcalendar/fullcalendar-styled'
import FullCalendar from '@fullcalendar/react'
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

const events = [
  { title: 'All-day event', start: todayStr },
  { title: 'Timed event', start: todayStr + 'T12:00:00' },
]

export function FullCalendarComponent() {
  return (
    <FullCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView="dayGridMonth"
        events={events}
        initialEvents={events}
        locales={[ptBRLocale]}
        locale="pt-br"
      />
    </FullCalendarWrapper>
  )
}

export function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
