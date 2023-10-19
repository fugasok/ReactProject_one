import React from 'react'
//import product component
import './../styles/products.sass'

function ProductsList({ products, setProducts, setCount }) {
	//delete product
	const deleteHndler = () => {
		setProducts(products.filter((el) => el.id !== el.id))
	}

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1)
	}

	return (
		<section className='products_list'>
			{products.map((product) => (
				<article
					className='products_list-item product_item'
					key={product.id}
				>
					<picture className='product_item-image'>
						<img src={product.image} alt='' />
					</picture>

					<h3 className='product_item-title'>{product.name}</h3>

					<span className='product_item-price'>
						Unit price: {product.price}
					</span>

					<button onClick={handleIncrement} className='product_item-add'>
						Add to cart
					</button>

					<button
						onClick={deleteHndler}
						className='product_item-delete'
					></button>
				</article>
			))}
		</section>
	)
}

export default ProductsList
