import React from 'react'
import Navbar from './components/Navbar'
import "./index.css"
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupForm from './components/SignupForm'

const App = () => {
  return (
    
      <BrowserRouter>
        <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App