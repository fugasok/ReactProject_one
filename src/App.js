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

	const [productData, setProductData] = useState(defaultFormValues);

   const [submitting, setSubmitting] = useState(false);

   const submitProduct = (e) => {
      e.preventDefault();
      setSubmitting(true);
      //Object is ready
      // console.log(productData);

      setTimeout(() => {
         setSubmitting(false);
         setProductData({ ...defaultFormValues });
       }, 1000);
   };


	return (
		<div className="App">
			<header className="main_header">
				<h1 className="page_title">Tibor's shop</h1>
			</header>

			<main className="main">
            { submitting && <div className="alert-message">Submtting Form...</div> }
				<ProductAddForm productData={productData} setProductData={setProductData} submitProduct={submitProduct}/>

				<ProductsList />
			</main>

			<footer className="main_footer"></footer>
		</div>
	);
}

export default App;
