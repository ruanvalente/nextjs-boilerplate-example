import { Sidebar } from 'react-pro-sidebar'
import styled from 'styled-components'

export const SidebarStyledWrapper = styled(Sidebar)`
  .ps-sidebar-container {
    background: #222;
    color: white;
    padding: 1rem;
    .ps-menu-root {
      height: 100vh;
    }
    .ps-menuitem-root .ps-menu-button {
      &:hover {
        background: #fbc02d;
      }
    }
  }
`
