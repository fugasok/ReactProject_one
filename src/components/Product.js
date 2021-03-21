import React from 'react'
import './../styles/products.sass'

function Product({ productName, productPrice }) {
   return (
      <article className="products_list-item product_item">
         <picture className="product_item-image">
            <img src="" alt=""/>
         </picture>

         <h3 className="product_item-title">{ productName }</h3>

         <span className="product_item-price">{ productPrice }</span>

         <button className="product_item-add">Add to cart</button>

         <a href="event.preventDefault()" className="product_item-delete"></a>
      </article>
   )
}

export default Product
