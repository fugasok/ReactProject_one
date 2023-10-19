import React, { useState } from 'react'
import './../styles/AddProductForm.sass'
import './../styles/base_rules.sass'
import ProductsList from './ProductsList'
import ShoppingCart from './ShoppingCart'

const defaultFormValues = {
	name: '',
	price: '',
	image: '',
}

function AddProductForm() {
	//get info from inputs
	const [productForm, setProductForm] = useState(defaultFormValues)
	//Product state
	const [products, setProducts] = useState([])
	//cart counter
	const [countProducts, setCount] = useState(0)

	const handleProductName = (e) => {
		setProductForm((currentState) => {
			return { ...currentState, name: e.target.value }
		})
	}
	const handleProductPrice = (e) => {
		setProductForm((currentState) => {
			return { ...currentState, price: e.target.value }
		})
	}
	const handleProductImage = (e) => {
		setProductForm((currentState) => {
			return {
				...currentState,
				image: URL.createObjectURL(e.target.files[0]),
			}
		})
	}

	const submitProduct = (e) => {
		e.preventDefault()
		setProducts([
			...products,
			{
				name: productForm.name,
				price: productForm.price,
				image: productForm.image,
				id: Math.random().toString(36).substr(2, 9),
			},
		])
		setProductForm({ ...defaultFormValues })
	}

	return (
		<>
			<header className='main_header'>
				<h1 className='page_title'>Tibor's shop</h1>
				<ShoppingCart countProducts={countProducts} />
			</header>

			<main className='main'>
				<section className='addProductForm'>
					<form className='addProductForm-form'>
						<h2 className='addProductForm-title'>Add product form</h2>

						<div className='addProductForm-item type-file'>
							<input
								id='product_image'
								type='file'
								name='image'
								onChange={handleProductImage}
								accept='image/png, image/jpeg, image/webp'
							/>
							<label htmlFor='product_image' className='label'>
								Product image
							</label>
							{productForm.image && (
								<span>
									<img
										src={productForm.image}
										alt='preview'
										style={{
											objectFit: 'cover',
											display: 'block',
											width: '150px',
											height: '150px',
										}}
									/>
								</span>
							)}
						</div>

						<div className='addProductForm-item type-text'>
							<input
								onChange={handleProductName}
								value={productForm.name}
								id='product_name'
								type='text'
								name='name'
								placeholder='Product name'
							/>
							<label htmlFor='product_name' className='label'>
								Product name
							</label>
						</div>

						<div className='addProductForm-item type-number'>
							<input
								onChange={handleProductPrice}
								value={productForm.price}
								id='product_price'
								type='number'
								name='price'
								placeholder='Product price'
							/>
							<label htmlFor='product_price' className='label'>
								Product price
							</label>
						</div>

						<button
							onClick={submitProduct}
							className='addProductForm-add'
							type='submit'
						>
							Submit
						</button>
					</form>
				</section>
			</main>
			<ProductsList
				products={products}
				setProducts={setProducts}
				setCount={setCount}
			/>
		</>
	)
}

export default AddProductForm
