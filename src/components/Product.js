import React from 'react'
import './../styles/product.sass'

function Product() {
   return (
      <article className="product_list-item product_item">
         <picture className="product_item-image">
            <img src="" alt=""/>
         </picture>

         <h3 className="product_item-title"></h3>

         <span className="product_item-price"></span>

         <button className="product_item-add">Add to cart</button>

         <a href="javascript:" className="product_item-delete"></a>
      </article>
   )
}

export default Product
