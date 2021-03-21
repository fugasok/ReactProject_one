import React from 'react'
import './../styles/cart.sass'

function shoppingCart({ countProducts }) {

   return (
      <div className="cart">
         <span className="cart-added">
            <span className="cart-added-title">Products in cart: </span>
            <span className="cart-added-qty">{ countProducts }</span>
         </span>
      </div>
   )
}

export default shoppingCart
