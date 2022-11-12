import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BsHeart } from 'react-icons/bs';
import "./Sell.css"
const Sell = () => {
  const[data, setData]=useState([])
  const [loading, setLoading]=useState(true)

// ----------------------------------fetch all sell data------------------------------------
  useEffect(()=>{
      setLoading(true)

      axios(({
          url:"http://localhost:8080/AllSale",
          method:"GET"
      }))
      .then((res)=>{
          setLoading(false)
          setData(res.data)
      }).catch((err)=>{
          setLoading(false)
          console.log(err)
      })
  },[setLoading])


   // ...........................post favourite data...........................................
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
    {/* --------------------------display all sell data----------------------------------------- */}
    <h1 className='text' style={{color:"#27AE60"}}>See the All Sale Place </h1>
     <div className="main-container-Sell">
      
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

export default Sell