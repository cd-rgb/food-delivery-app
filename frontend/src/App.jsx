import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import Order from './pages/placeorder/placeorder.jsx'
import Footer from './components/footer/footer.jsx'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order' element={<Order />}></Route>

      </Routes>

    </div>
    <Footer></Footer>

    </>
  )
}

export default App

