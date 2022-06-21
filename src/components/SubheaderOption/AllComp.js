import React from 'react'
import Object from "../Object.js"
import All from './All.js'
export default function AllComp({Object}) {
      let allData = Object.filter(ele=>ele.type == "All") 
  return (
    <>
    <div className='parent'>
    {
        

Object.map((ele) =>{
    return(


        <div className='card-container'>
        <img className='img' src={ele.image}></img><br></br>
        <div className='name'> {ele.title}</div><br></br>
        <div className='price'>Price :{ele.price}</div><br></br>
        <div className='quanity'>Quanity :{ele.quantity}</div><br></br>
        <button type="Button"className='car'>Add to Cart</button>
        
        
        
        
            </div>


    )
})

    }
    </div>






   

    
    
    
    
    </>
  )
}
