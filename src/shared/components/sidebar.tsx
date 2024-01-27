'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

export default function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(true)

  const handleMouseEnter = () => {
    setCollapsed(false)
  }

  const handleMouseLeave = () => {
    setCollapsed(true)
  }

  const handleMenuItemClick = () => {
    setCollapsed(false)
  }

  return (
    <Sidebar
      style={{ height: '100vh' }}
      collapsedWidth="5vw"
      collapsed={collapsed}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Menu>
        <MenuItem component={<Link href="/service-test" />}>
          <i className="pi pi-wrench"></i>
          {!collapsed && (
            <span style={{ marginLeft: '1rem' }}>Diágnostico</span>
          )}
        </MenuItem>
        <MenuItem component={<Link href="/service-test/chamado-tecnico" />}>
          <i className="pi pi-users"></i>
          {!collapsed && (
            <span style={{ marginLeft: '1rem' }}>Chamado Técnico</span>
          )}
        </MenuItem>
        <MenuItem
          component={<Link href="/service-test/chamado-tecnico/agendamentos" />}
          onClick={handleMenuItemClick}
        >
          <i className="pi pi-calendar"></i>
          {!collapsed && (
            <span style={{ marginLeft: '1rem' }}>Agendamentos</span>
          )}
        </MenuItem>
        <MenuItem onClick={handleMenuItemClick}>
          <i className="pi pi-sign-out"></i>
          {!collapsed && <span style={{ marginLeft: '1rem' }}>Sair</span>}
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}
