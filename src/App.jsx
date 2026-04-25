import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Projects } from './routes/Projects'
import { Donate } from './routes/Donate'
import { Volunteer } from './routes/Volunteer'
import { ContactUs } from './routes/Contact'
import { TrackImpact } from './routes/TrackImpact'
import { AnnualReport } from './routes/AnualReport'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SwastikaChatbot from './components/Swastika'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/donatetous' element={<Donate />} />
        <Route path='/beapartofus' element={<Volunteer />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/trackyourimpact' element={<TrackImpact />} />
        <Route path='/annualreport' element={<AnnualReport />} />
    
      </Routes>
      <SwastikaChatbot/>
     <Footer /> 
    </>
  )
}

export default App
