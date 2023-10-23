import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

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
      </BrowserRouter>
    </>
  )
}

export default App
