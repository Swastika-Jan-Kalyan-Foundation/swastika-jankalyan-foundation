import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Projects } from './routes/Projects'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
     <Footer /> 
    </>
  )
}

export default App
