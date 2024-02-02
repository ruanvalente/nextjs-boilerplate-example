import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react'

export const FullCalendarWrapper = styled.div`
  > .fc .fc-button {
    border: none;
  }
  > .fc .fc-button-primary:focus {
    outline: 2px solid #222;
    box-shadow: none;
  }
  > .fc .fc-button-primary:not(:disabled).fc-button-active:focus,
  .fc .fc-button-primary:not(:disabled):active:focus {
    outline: 2px solid #222;
    box-shadow: none;
  }
  > .fc .fc-button-primary {
    color: white;
    background-color: #ffb106;
    border-color: #ffb106;
  }

  > .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:not(:disabled):active {
    color: white;
    background-color: #ffb106;
  }
`
