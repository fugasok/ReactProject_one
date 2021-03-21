import React from 'react'
//import product component
import Product from './Product'
import './../styles/products.sass'

function ProductsList({ products }) {
   // const [products, setProduct] = useState(productData);
   // console.log(productData);

   return (
      <section className="products_list">
         {
            products.map(product => (
               <Product productName={product.name} productPrice={product.price}/>
            ))
         }
      </section>
   )
}

export default ProductsList
