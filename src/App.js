import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Subheader from './components/Subheader';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import All from './components/SubheaderOption/All';
import Bestseller from './components/SubheaderOption/All'
import React,{useState} from 'react';
import Cart from './components/Cart';
import Signin from './components/Signin';
import { Signup } from './components/Signup';
function App() {

  let [takeInput,setInput] = useState("sample");
  const [cart,setCart] = useState([]);

  function removeFromCart(product,id){
    console.log("helllo");
    const temp = [...cart];



    temp.forEach((ele,index)=>{
      if(ele.id == id){
        id = index;
      }

    })
    
    // removing the element using splice
    
    temp.splice(id, 1);
    console.log("tempp",temp);

    // updating the list
    setCart(temp);


  }
  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }
    else{
      setCart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }

  function addToCart(product){

    if(product.quantity===product.totalquantity){
      


    }
    else{
      console.log("product",product);
    const productinCart = cart.find((ele) => ele.id === product.id);
    
    if(productinCart){


      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))

    }
    else{
      setCart([...cart,{...product,quantity:1}])
    }
    }
    
  }
  return (
   <>
   {/* <Header/>
   <Subheader/>
   <Card/> */}
   
     
   <BrowserRouter>
   <Header setInput={{setInput,cart}} />
   <Subheader/>
   
   <Routes>
     <Route path="/" element={<Card takeInput={{takeInput,addToCart}}/>}/>
     <Route path="/Card" element={<Card />} />
     {/* <Route path="/Card" element={<Card takeInput={{takeInput,addToCart}}/>}/> */}
     <Route path="/All" element={<All/>}/>
     <Route path="/Bestseller" element={<Bestseller/>}/>
     <Route path="/Cart" element={<Cart cart={{cart,removeFromCart,addToCart,deleteToCart}}/>}/>
     <Route path="/Signin" element={<Signin/>}/>
     <Route path="/Signup" element={<Signup/>}/>





   </Routes>
   
   
   </BrowserRouter>
   
   
   </>


     
    
  );
}

export default App;
