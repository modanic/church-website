import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router'

// PAGES
import Home from './pages/Home'
import About from './pages/about'
import Testemones from './pages/testemonis'
import GiveOnline from './pages/gaveOnline'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/testemones'  element={<Testemones/>} />
      <Route path='/gaveOnline'  element={<GiveOnline />} />

    </Routes>
  )
}

export default App
