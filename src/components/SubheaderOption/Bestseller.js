import React from 'react'
import Object from '../Object.js'
import BestSellerComp from './BestSellerComp.js'

export default function Bestseller() {
    let allData = Object.filter(ele=>ele.type == "Best") 
  return (
    <BestSellerComp Object={allData}/>
  )
}
