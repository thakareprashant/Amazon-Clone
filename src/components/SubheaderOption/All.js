import React from 'react'
import Object from '../Object'
import AllComp from './AllComp'
import '../card.css'
export default function All(props) {
    console.log(Object)
     let allData = Object.filter(ele=>ele.type == "All") 
  return (
   <AllComp Object={allData}/>
    
  )
}
