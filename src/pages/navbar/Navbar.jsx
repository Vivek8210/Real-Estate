import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import { FaRegTimesCircle } from 'react-icons/fa';

import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li> <Link to="/">Home</Link> </li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/favourite">Favourite</Link></li>
                    <li><Link >Contact </Link></li>
                </ul>
                <button className='btn'>Sign In</button>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
