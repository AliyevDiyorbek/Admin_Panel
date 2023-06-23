import React from 'react'
import Layout from '../Layout'

import Dashboard from '../pages/Dashboard'
import Appointment from '../pages/Appointment'
import Doctor from '../pages/Doctor'
import Patient from '../pages/Patient'
import Transcations from '../pages/Transcations'
import { Route, Routes } from 'react-router-dom'
import Teachers from '../pages/Teacher'
import Error from '../components/Error'
import AddStudent from '../components/AddStudent'
import Edit from '../components/Edit'

export default function Root() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/patient' element={<Patient />} />
        <Route path='/transcations' element={<Transcations />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/addTeacher' element={<AddStudent />} />
        <Route path='/teachers/edit/:id' element={<Edit />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  )
}
