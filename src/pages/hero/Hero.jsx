import React from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
const [date, setDate]=useState('')

    const dateChange=(e)=>{
console.log(typeof(e.target.value))
    }
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                <form className='search'>
                  
                
                    <div className='allInputAndSelect'> 
                        <input type='date' placeholder='when' onChange={dateChange}/>
                        <input type='text' placeholder='location' />
                        {/* <input type='text' placeholder='price'  /> */}
                        <select name="" id="" className='price'>
                            <option value="">$1000-$1500</option>
                            <option value="">$1000-$1500</option>
                            <option value="">$1000-$1500</option>
                            <option value="">$1000-$1500</option>
                            <option value="">$1000-$1500</option>
                        </select>

                        <select name="" id="" className='propertyType'>
                            <option value="">Faimly house</option>
                            <option value="">House & Villa</option>
                            <option value="">Apartment</option>
                            <option value="">Office</option>
                           
                        </select>
                        {/* <input type='text' placeholder='price'  /> */}
                       
                        <button type='submit'><AiOutlineSearch  className='icon'/></button>
                    </div>
                 
                </form>
            </div>
        </div>
    )
}

export default Hero
