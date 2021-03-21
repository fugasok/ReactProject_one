import React, { useState } from 'react'
import './styles/base_rules.sass'
//import components
import ProductAddForm from './components/ProductAddForm'
import ProductsList from './components/ProductsList'


function App() {
   const defaultFormValues = {
      name: '',
      price: '',
      image: '',
   };


   //get info from inputs
   const [productData, setProductData] = useState(defaultFormValues);
   //create Object
   const [products, setProducts] = useState([]);

   //
   const [submitting, setSubmitting] = useState(false);

   const submitProduct = (e) => {
      e.preventDefault();
      setSubmitting(true);

      //Object is ready
      //Simulates waiting for the server's response
      setTimeout(() => {
         setSubmitting(false);
         setProducts([...products, {name: productData.name, price: productData.price, image: productData.image, id: Math.random().toString(36).substr(2, 9)}]);
         setProductData({ ...defaultFormValues });
      }, 500);
   };


   return (
      <div className="App">
         <header className="main_header">
            <h1 className="page_title">Tibor's shop</h1>
         </header>

         <main className="main">
            {submitting && <div className="alert-message">Submtting Form...</div>}
            <ProductAddForm productData={productData} setProductData={setProductData} submitProduct={submitProduct} />

            <ProductsList products={products} />
         </main>

         <footer className="main_footer"></footer>
      </div>
   );
}

export default App;