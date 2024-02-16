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
      transition: all 0.3s;
      &:hover {
        outline: 1px solid orange;
        border-radius: 8px;
        background: #222;
      }
    }
    .active {
      background: orange;
      border-radius: 8px;
    }
  }
`
