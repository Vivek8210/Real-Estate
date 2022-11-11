import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"
import { BsHeart } from 'react-icons/bs';
const Home = () => {

  const[data, setData]=useState([])
  const [loading, setLoading]=useState(true)


  useEffect(()=>{
      setLoading(true)

      axios(({
          url:"http://localhost:8080/Alldata",
          method:"GET"
      }))
      .then((res)=>{
          setLoading(false)
          setData(res.data)
          console.log(res.data)
      }).catch((err)=>{
          setLoading(false)
          console.log(err)
      })
  },[setLoading])
console.log(data.date)
 
  return (
    <>
   <h1>See All best place</h1>
     <div className="maincontainerHome">
    {data.map((ele)=>(

    
    <div className="allContent" key={ele.id}>
      <img
        className="image"
        src={ele.cover}
        alt=""
      />

      <div className="priceAndfavourite">
        <div>${ele.Price}</div>
        <div><BsHeart/></div>
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