import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from './style'

export default function Sidebar() {
  return (
    <Container>
        <Container.Title>
          S31 Admin Panel
        </Container.Title>
        <Menu className='menu'>
          <Menu.Item>
            <NavLink to={'/dashboard'}><i className="bi bi-play-fill me-3"></i><i class="bi bi-database-fill-dash"></i>Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/appointment'}><i className="bi bi-play-fill me-3"></i><i class="bi bi-database-fill-dash"></i>Appointment List</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/doctor'}><i className="bi bi-play-fill me-3"></i><i class="bi bi-database-fill-dash"></i>Doctor List</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/patient'}><i className="bi bi-play-fill me-3"></i><i class="bi bi-database-fill-dash"></i>Patient List</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/transcations'}><i className="bi bi-play-fill me-3"></i><i class="bi bi-database-fill-dash"></i>Transcations</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/teachers'}><i className="bi bi-play-fill me-3"></i><i class="bi bi-database-fill-dash"></i>Teachers</NavLink>
          </Menu.Item>
        </Menu>
    </Container>
  )
}
