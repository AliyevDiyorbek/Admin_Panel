import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { Wrapper } from './style'

export default function Layout() {
  return (
    <Wrapper>
        <Sidebar />
        <Main />
    </Wrapper>
  )
}
