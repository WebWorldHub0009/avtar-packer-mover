import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'
import NotFound from "./pages/NotFound"


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Navbar/>
    <Routes>
          <Route path="*" element={<NotFound />} />
      <Route path='/' element={<Home/>}/>
    </Routes>
     <FloatingButtons/>
    <Footer/>
  </BrowserRouter>
  )
}

export default App