
import React, { useEffect, useState } from 'react'
import axios from "axios"

import { BsHeart } from 'react-icons/bs';
import "./Rent.css";
const Rent = () => {
  const[data, setData]=useState([])
  const [loading, setLoading]=useState(true)

// ------------------fetch all rent data----------------------------------------
  useEffect(()=>{
      setLoading(true)

      axios(({
          url:"http://localhost:8080/RentData",
          method:"GET"
      }))
      .then((res)=>{
          setLoading(false)
          setData(res.data)
          // console.log(res.data)
      }).catch((err)=>{
          setLoading(false)
          console.log(err)
      })
  },[setLoading])


  // ...........................save favourite data...........................................
  const handleHeart=(ele)=>{
    // console.log(ele)
    // axios
    // .post("http://localhost:8080/cart", ele)
    // .then((res) => {
    //   // console.log(res.data)
    //   alert("data add to Favourite successfully");
    // })
    // .catch((err) => {
    //   alert("data failed to add Favourite");
    // });
   

   }
 
  return (
    <>
    <h1 style={{color:"#27AE60"}}>See All Rent Places And villa</h1>
     <div className="main-container-Rent">
    {data.map((ele)=>(

    
    <div className="allContent" key={ele.id}>
      <img
        className="image"
        src={ele.cover}
        alt=""
      />

      <div className="priceAndfavourite">
        <div>${ele.Price}</div>
        <div><BsHeart onClick={()=>handleHeart(ele)} /></div>
      </div>
      <h4 className="name">{ele.name}</h4>
      <p className="location">{ele.location}</p>
      <div className="details">
        <div>{ele.category}</div>
        <div>{ele.type}</div>
        <div>122</div>
      </div>
    </div>
  ))}
   </div>
   </>
  )
}

export default Rent;
