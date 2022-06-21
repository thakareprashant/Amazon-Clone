import React, { useState } from 'react'
import './card.css'
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';
//object rendering
import data from './Object'


export default function Card({takeInput}) {

  // console.log("ddddd",takeInput.cart);
  // let [obj,setObj] = useState(data);

  let filteredData = data.filter((ele)=> ele.title.includes(takeInput.takeInput));

 
  return (
    <>
    
    <div className='parent'>
    {
        
filteredData.length == 0?
data.map((ele) =>{
    return(


        <div className='card-container'>
        <img className='img' src={ele.image}></img><br></br>
        <div className='name'> {ele.title}</div><br></br>
        <div className='price'>Price :{ele.price}</div><br></br>
        <div className='quanity'>Quanity :{ele.totalquantity}</div><br></br>
        <button type="Button"className='car' onClick={()=>takeInput.addToCart(ele)}>Add to Cart</button>
        
        
        
            </div>


    )
}):filteredData.map((ele) =>{
  return(


      <div className='card-container'>
      <img className='img' src={ele.image}></img><br></br>
      <div className='name'> {ele.title}</div><br></br>
      <div className='price'>Price :{ele.price}</div><br></br>
      <div className='quanity'>Quanity :{ele.totalquantity}</div><br></br>
      <button type="Button"className='car' onClick={()=>takeInput.addToCart(ele)}>Add to Cart</button>
      
      
      
      
          </div>


  )
})

    }
    </div>






   

    
    
    
    
    </>
  )
}
