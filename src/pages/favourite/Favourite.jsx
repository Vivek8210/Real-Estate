
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Favourite.css"
import {AiFillDelete} from 'react-icons/ai';
const Favourite = () => {

  const[data, setFavouriteData]=useState([])
  const [loading, setLoading]=useState(true)


  // -------------------------------fetch favourite data----------------------------------------
  useEffect(()=>{
    setLoading(true)
    getFavouriteData()
},[setLoading])
  const getFavouriteData=()=>{

    axios(({
      url:"http://localhost:8080/cart",
      method:"GET"
  }))
  .then((res)=>{
      setLoading(false)
      setFavouriteData(res.data)
      console.log(res.data)
  }).catch((err)=>{
      setLoading(false)
      console.log(err)
  })
  }
// --------------------------------delete from favourite card ---------------------------------------
const handleDelete=(key)=>{
  console.log()
  axios
  .delete(`http://localhost:8080/cart/${key}`)
  .then(() => alert("delete successfully"));
  getFavouriteData()
}
  return (
    // ------------------------------display fovourite data--------------------------------------
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
        <div className='delete-favourite' ><AiFillDelete style={{fontSize:"1.5rem"}} onClick={()=>handleDelete(ele.id)}/></div>
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
  )
}

export default Favourite