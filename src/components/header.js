import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';
import './header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

// import ama from "./ama.png"
export default function Header({setInput}) {

    console.log(setInput.cart);
    function manageInput(e){

        // setInput(e.target.value);
        setInput.setInput(e.target.value)

        console.log(setInput)
    }


    
  return (
      <>
    <div className="container-bg">
        <div className="img-container">
            {/* <img src={ama} alt=""></img> */}
            <Link to="/"><img src="../images/ama.png"  /></Link>

        </div>
        <div className='address'>
            <div className="hello"><LocationOnIcon fontSize='medium'/>&nbsp;helloo</div>
            <div className="add">&nbsp;Select your address</div>


        </div>

        <div className="search-content">

            <input  className="searchBar" type="text" placeholder="search your text here" onChange={manageInput}></input>


        </div>
        
        <div className="signIn">

        <Link to="/Signin" style={{textDecoration:"none"}}><div className="first">Hello Sign In</div></Link>
            <Link to="/Signup"><div className="second">Sign Up</div></Link>


        </div>
        
        <Link to="/Signin">
        <div className="signIn">

            <div className="first">Return</div>
            <div className="second">& Orders</div>


        </div>

        </Link>
        
        
       <div className="cart">

       <Link to="Cart"><div className="cartname"><ShoppingCart fontSize='medium'/>&nbsp;Cart </div></Link> 
       
           <div className="quantity" style={{color:"red"}}>{setInput.cart.length}</div>

        </div>
        

        



    </div>
    </>
  )
}
