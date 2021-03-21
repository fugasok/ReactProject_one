import React, { useState } from 'react'
import './styles/base_rules.sass'
//import components
import ProductAddForm from './components/ProductAddForm'
import ProductsList from './components/ProductsList'


function App() {
	const formValues = {
		name: '',
		price: '',
		image: '',
	};

	const [product, setProduct] = useState(formValues);

   const submitProduct = (e) => {
      e.preventDefault();
      console.log(product);
   };


	return (
		<div className="App">
			<header className="main_header">
				<h1 className="page_title">Tibor's shop</h1>
			</header>

			<main className="main">
				<ProductAddForm product={product} setProduct={setProduct} submitProduct={submitProduct}/>

				<ProductsList />
			</main>

			<footer className="main_footer"></footer>
		</div>
	);
}

export default App;
