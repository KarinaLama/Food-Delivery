import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './compoments/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Fotter from './compoments/Footer/Footer'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './compoments/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>} />
        < Route path='/order' element={<PlaceOrder/>} />

      </Routes>
    </div>
    <Fotter/>
    
    </>
    
  )
}

export default App
