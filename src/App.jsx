import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import LayoutTeacher from './Component/LayoutTeacher.jsx'
import StudentsManagement from './Component/StudentsManagement.jsx'
import AddNewStudent from './Component/AddNewStudent.jsx'
import Event from './Component/Event.jsx'
import TeacherTimeline from './Component/TeacherTimeline.jsx'
import StudentGrades from './Component/StudentGrades.jsx'
import UserTeacher from './Component/UserTeacher.jsx'
import Login from './Component/Login.jsx'
import Dashboard from './Component/Dashboard.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/u' element={<LayoutTeacher />}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='event' element={<Event />} />
        <Route path='students' element={<StudentsManagement />} />
        <Route path='students/add' element={<AddNewStudent />} />
        <Route path='latest-activity' element={<TeacherTimeline />} />
        <Route path='grades' element={<StudentGrades />} />
        <Route path='userTeacher' element={<UserTeacher />} />
      </Route>
    </Routes>
  )
}

export default App
