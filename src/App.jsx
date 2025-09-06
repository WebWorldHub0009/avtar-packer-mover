import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'
import NotFound from "./pages/NotFound"
import About from './pages/About'
import Contact from './pages/Contact'
import Certificate from './pages/Certificate'
import Services from './pages/Services'
import ServicePage from './pages/Servicepage'


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/:slug' element={<ServicePage/>}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
     <FloatingButtons/>
    <Footer/>
  </BrowserRouter>
  )
}

export default App