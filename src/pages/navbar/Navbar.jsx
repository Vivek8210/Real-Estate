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
                
                <button className='btn'>Sign In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li> <Link to="/">Home</Link> </li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar