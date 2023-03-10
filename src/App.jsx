import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TaskPages from './pages/TaskPages';
import { TaskForm } from './pages/TaskForm';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPages />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
