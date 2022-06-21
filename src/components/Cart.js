


import React from 'react'
// import "./card.css"
import "./cart.css"

export default function Cart({ cart }) {
  return (
    <>
      <div className='parent'>
      {
        cart.cart.length == 0 ?
         <div>

          No product in cart
          
          </div>
          :
          cart.cart.map((ele) => {
            return (
              <div className='cart-container'>
           <div className='imgcontainer'>
           <img src={ele.image} />
           </div>
           <div className='quantityContainer'>
             {/* <input type={"Button"}>+</input> */}
             <button onClick={()=>cart.addToCart(ele)}>+</button>
             <div>quantity {ele.quantity}</div>
             <button onClick={()=>cart.deleteToCart(ele)}>-</button>
             
           </div>

           <div className='priceContainer'>
           <div>Price</div>
            <div> {ele.price}</div>
           </div>
           <div className='addToCart'>
           <button onClick={()=>cart.removeFromCart(ele)}>Delete from Cart</button>
           </div>
           <div className='totalPrice'>
           <div>Total Price</div>
           
           <div>{parseInt(ele.price)*ele.quantity}</div>
           </div>
           
              
              </div>
            )
          })
      }
      </div>
    </>
  )
}
