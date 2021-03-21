import React from 'react'
//import product component
import Product from './Product'
import './../styles/products.sass'

function ProductsList({ products, setProducts }) {
   return (
      <section className="products_list">
         {
            products.map(product => (
               <Product
                  key={product.id}
                  productName={product.name}
                  productPrice={product.price}
                  productId={product.id}
                  setProducts={setProducts}
                  products={products}
               />
            ))
         }
      </section>
   )
}

export default ProductsList
