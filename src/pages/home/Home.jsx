import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"

import { BsHeart } from 'react-icons/bs';

let count=0
const Home = () => {

  const[data, setData]=useState([])
  const [loading, setLoading]=useState(true)
  



// ...........................post favourite data...........................................
  const handleHeart=(ele)=>{
    console.log(ele)
    axios
    .post("http://localhost:8080/cart", ele)
    .then((res) => {
      // console.log(res.data)
      alert("data add to Favourite successfully");
    })
    .catch((err) => {
      alert("data failed to add Favourite");
    });
   

   }


  //  -------------------Fetch All Data on Main Page------------------------------
  useEffect(()=>{
      setLoading(true)

      axios(({
          url:"http://localhost:8080/Alldata",
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

 
  return (
    <>
    {/* ------------------------------display all data---------------------------------------- */}
   <h1 style={{color:"#27AE60"}}>See All best place</h1>
     <div className="maincontainerHome">
    {data.map((ele)=>(

    
    <div className="allContent" key={ele.id}  >
      <img
        className="image"
        src={ele.cover}
        alt=""
      />

      <div className="priceAndfavourite">
        <div>${ele.Price}</div>
        <div className='Heart-favourite' ><BsHeart onClick={()=>handleHeart(ele)} style={{fontSize:"1.5rem"}} /></div>
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

export default Home