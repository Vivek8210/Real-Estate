import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"
import "../hero/Hero.css";
import { BsHeart } from 'react-icons/bs';
import { AiOutlineSearch } from "react-icons/ai";
let count=0
const Home = () => {

  const[data, setData]=useState([])
  const [loading, setLoading]=useState(true)
  

  const [date,setDate] = useState('');
  const [location,setLocation] = useState('');
  const [price,setPrice] = useState('');
  const [type,setType] = useState('');


    const handelFormSubmit=(e)=>{

    e.preventDefault();
    setType('')

    console.log(date,location,price,type);
    
    if(date!='' || location=='' || price=='' || type==''){
    
      let newValue=data.filter((el)=>el.date===date);
      setData(newValue);
       }
     if(location!=''){
      let newValue=data.filter((el)=>el.location===location);
      setData(newValue)
    }
     if(price=='1000to1500'){
      console.log(price)
      let newValue=data.filter((el)=>Number(el.Price)<=1500);
      setData(newValue)
    }
    if(price=='1500to2000'){
      let newValue=data.filter((el)=>Number(el.Price)<=2000);
      setData(newValue)
    }
     if(price=='2000to3000'){
      let newValue=data.filter((el)=>Number(el.Price)>=2000 && Number(el.Price)<=3000);
      setData(newValue)
    }

   if(type=='Apartment'){
      let newValue=data.filter((el)=>el.type==type);
      setData(newValue)
    }
  if(type=='Commercial'){
      let newValue=data.filter((el)=>el.type==type);
      setData(newValue)
    }
    if(type=='Homes & Villas'){
      let newValue=data.filter((el)=>el.type==type);
      setData(newValue)
    }
    if(type=='Offices'){
      let newValue=data.filter((el)=>el.type==type);
      setData(newValue)
    }
  }

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
     <div className="hero">
        <div className="content">
          <h1>Find the perfect place</h1>
          <p className="search-text">
            {" "}
            Search the largest selection of luxury high-rise apartments,
            multi-family homes, and luxury homes.{" "}
          </p>
          <form className="search" onSubmit={handelFormSubmit}>
            <div className="allInputAndSelect">
              <input type="date" placeholder="when" onChange={(e)=>setDate(e.target.value)}  />
              <input type="text" placeholder="location" onChange={(e)=>setLocation(e.target.value)} />
              {/* <input type='text' placeholder='price'  /> */}
              <select name="" id="" className="price" onClick={(e)=>setPrice(e.target.value)}>
                <option value="1000to1500">₹1000-₹1500</option>
                <option value="1500to2000">₹1500-₹2000</option>
                <option value="2000to3000">₹2000-₹3000</option>
               </select>

              <select name="" id="" className="propertyType" onClick={(e)=>setType(e.target.value)} >
                <option value="Offices">Offices</option>
                <option value="Homes & Villas">Homes & Villas</option>
                <option value="Apartment">Apartment</option>
                <option value="Commercial">Commercial</option>
              </select>
              {/* <input type='text' placeholder='price'  /> */}

              <button type="submit">
                <AiOutlineSearch className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
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