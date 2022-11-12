import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-icon'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='column'>
                    <h3>About</h3>
                    <p>Rent</p>
                    <p>Villa</p>
                    <p>Sell</p>
                    <p>About Us</p>
                </div>
                <div className='column'>
                    <h3>Rent</h3>
                    <p>Rent</p>
                    <p>Villa</p>
                    <p>Sell</p>
                    <p>About Us</p>
                </div>
                <div className='column'>
                    <h3>Sell</h3>
                    <p>Rent</p>
                    <p>Villa</p>
                    <p>Sell</p>
                    <p>About Us</p>
                </div>
                <div className='column'>
                    <h3>Favourite</h3>
                    <p>Rent</p>
                    <p>Villa</p>
                    <p>Sell</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
