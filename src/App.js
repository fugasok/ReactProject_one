import React, { useState } from 'react'
import './styles/base_rules.sass'
//import components
import AddProductForm from './components/AddProductForm'
import ProductsList from './components/ProductsList'
import ShoppingCart from './components/ShoppingCart'


function App() {
   const defaultFormValues = {
      name: '',
      price: '',
      image: '',
   };


   //get info from inputs
   const [productData, setProductData] = useState(defaultFormValues);
   //Product state
   const [products, setProducts] = useState([]);

   //cart counter
   const [countProducts, setCount] = useState(0);

   //show notification about submitting a product
   const [submitting, setSubmitting] = useState(false);

   const submitProduct = (e) => {
      e.preventDefault();
      setSubmitting(true);

      //Object is ready
      //Simulates waiting for the server's response
      setTimeout(() => {
         setSubmitting(false);
         //using math.random() just for this test project
         setProducts(
            [...products,
               {
                  name: productData.name,
                  price: productData.price,
                  image: productData.image,
                  id: Math.random().toString(36).substr(2, 9),
               }
            ]
         );
         setProductData({ ...defaultFormValues });
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
            <AddProductForm
               productData={productData}
               setProductData={setProductData}
               submitProduct={submitProduct}
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