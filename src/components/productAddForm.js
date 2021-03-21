import React from 'react'
import './../styles/productAddForm.sass'


function ProductAddForm({ submitProduct, productData, setProductData }) {

   const productInputHandler = (e) => {
      const { name, value } = e.target;

      setProductData({
         ...productData,
         [name]: value,
      });
   };


   return (
      <section className="addProductForm">
         <form className="addProductForm-form">
            <h2 className="addProductForm-title">Add product form</h2>

            <div className="addProductForm-item type-file">
               <input id="product_image" type="file" name="image" />
               <label htmlFor="product_image" className="label">Product name</label>
            </div>

            <div className="addProductForm-item type-text">
               <input onChange={productInputHandler} value={productData.name} id="product_name" type="text" name="name"/>
               <label htmlFor="product_name" className="label">Product name</label>
            </div>

            <div className="addProductForm-item type-number">
               <input onChange={productInputHandler} value={productData.price} id="product_price" type="number" name="price"/>
               <label htmlFor="product_price" className="label">Product price</label>
            </div>

            <button onClick={submitProduct} className="addProductForm-add" type="submit">Submit</button>
         </form>
      </section>
   )
}

export default ProductAddForm
