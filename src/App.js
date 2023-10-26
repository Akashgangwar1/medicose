import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
        <Route path='' element={<Home />} />
        <Route path='Contact' element={ <Contact/>} />
        <Route path='About' element={<About/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
