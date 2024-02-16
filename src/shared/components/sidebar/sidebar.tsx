'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, MenuItem } from 'react-pro-sidebar'
import { SidebarStyledWrapper } from '../../styles/sidebar/sidebar-styled'

export default function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(true)
  const [collapsedWidth,setCollapsedWidth] = useState('15vw')
  const [activeMenuItem, setActiveMenuItem] = useState("/service-test");
  const menuItems = [
    { path: '/service-test', icon: 'pi pi-wrench', label: 'Diagnóstico' },
    { path: '/service-test/chamado-tecnico', icon: 'pi pi-users', label: 'Chamado Técnico' },
    { path: '/service-test/chamado-tecnico/agendamentos', icon: 'pi pi-calendar', label: 'Agendamentos' },
    { path: '/service-test/logout', icon: 'pi pi-sign-out', label: 'Sair' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCollapsedWidth('25vw');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setCollapsed(false)
  }

  const handleMenuItemClick = (path: string) => {
    setCollapsed(false)
    setActiveMenuItem(path);
  }

  return (
    <SidebarStyledWrapper
      collapsedWidth={collapsedWidth}
      collapsed={collapsed}
      onMouseEnter={handleMouseEnter}
    >
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem
            className={activeMenuItem === item.path ? 'active' : ''}
            key={index}
            component={<Link href={item.path}/>}
            onClick={() => handleMenuItemClick(item.path)}
          >
            <i className={`text-xl ${item.icon}`}></i>
            <span style={{marginLeft: '1rem'}}>{item.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </SidebarStyledWrapper>
  )
}
