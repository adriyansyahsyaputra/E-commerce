import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
