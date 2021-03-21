import React from 'react'
import './../styles/products.sass'

function Product({ productName, productPrice, productId, products, setProducts }) {
   //delete product
   const deleteHndler = () => {
      setProducts(products.filter(el => el.id !== productId));
   };


   return (
      <article className="products_list-item product_item">
         <picture className="product_item-image">
            <img src="" alt=""/>
         </picture>

         <h3 className="product_item-title">{ productName }</h3>

         <span className="product_item-price">Unit price: { productPrice }</span>

         <button className="product_item-add">Add to cart</button>

         <button onClick={deleteHndler} className="product_item-delete"></button>
      </article>
   )
}

export default Product
