import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import './styles/base_rules.sass'
//import components
import ProductAddForm from './components/ProductAddForm'
import ProductsList from './components/ProductsList'
import ShoppingCart from './components/ShoppingCart'


function App() {
   //Product state
   const [products, setProducts] = useState([]);

   //cart counter
   const [countProducts, setCount] = useState(0);

   //show notification about submitting a product
   const [submitting, setSubmitting] = useState(false);

   const { register, handleSubmit, watch, reset } = useForm();

   const onSubmit = data => {
      setSubmitting(true);
      //Simulates waiting for the server's response
      setTimeout(() => {
         setSubmitting(false);
         //using math.random() just for this test project
         setProducts(
            [...products,
               {
                  name: data.name,
                  price: data.price,
                  image: data.image[0],
                  id: Math.random().toString(36).substr(2, 9),
               }
            ]
         );
         reset();
      }, 1000);
   };

   return (
      <div className="App">
         <header className="main_header">
            <h1 className="page_title">Tibor's shop</h1>

            <ShoppingCart countProducts={ countProducts } />
         </header>

         <main className="main">
            {submitting && <div className="alert-message">Submtting Product</div>}
            <ProductAddForm
               register={register}
               handleSubmit={handleSubmit}
               onSubmit={onSubmit}
               watch={watch}
            />

            <ProductsList
               setProducts={setProducts}
               products={products}
               setCount={setCount}
            />
         </main>

         <footer className="main_footer"></footer>
      </div>
   );
}

export default App;