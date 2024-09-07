import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import LayoutTeacher from './Component/LayoutTeacher.jsx'
import StudentsManagement from './Component/StudentsManagement.jsx'
import AddNewStudent from './Component/AddNewStudent.jsx'
import Dashboard from './Component/Dashboard.jsx'
import TeacherTimeline from './Component/TeacherTimeline.jsx'
import StudentGrades from './Component/StudentGrades.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutTeacher />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/students' element={<StudentsManagement />} />
        <Route path='/students/add' element={<AddNewStudent />} />
        <Route path='/latest-activity' element={<TeacherTimeline />} />
        <Route path='/grades' element={<StudentGrades />} />
      </Route>
    </Routes>
  )
}

export default App
