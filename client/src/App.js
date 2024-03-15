import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Shows from './Pages/Shows'
import About from './Pages/About'

function App() {
  return (
    <div>             
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App