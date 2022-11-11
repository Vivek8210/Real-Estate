import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Rent from '../pages/rent/Rent'
import Sell from '../pages/sell/Sell'

const AllRoute = () => {
  return (
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/rent" element={<Rent/>}/>
<Route path="/sell" element={<Sell/>}/>
   </Routes>
  )
}

export default AllRoute