import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Favourite from '../pages/favourite/Favourite'
import Home from '../pages/home/Home'
import Rent from '../pages/rent/Rent'
import Sell from '../pages/sell/Sell'

const AllRoute = () => {
  return (
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/rent" element={<Rent/>}/>
<Route path="/sell" element={<Sell/>}/>
<Route path="/favourite" element={<Favourite/>}/>
   </Routes>
  )
}

export default AllRoute