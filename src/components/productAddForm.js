import React from 'react'
import './../styles/productAddForm.sass'

function productAddForm() {
   return (
      <form className="addProductForm-form">
         <h2 className="addProductForm-title">Add product form</h2>

         <div className="addProductForm-item type-file">
            <input id="product_image" type="file" name="product_image"/>
            <label htmlFor="product_image" className="label">Product name</label>
         </div>

         <div className="addProductForm-item type-text">
            <input id="product_name" type="text" name="product_name"/>
            <label htmlFor="product_name" className="label">Product name</label>
         </div>

         <div className="addProductForm-item type-number">
            <input id="product_price" type="number" name="product_price"/>
            <label htmlFor="product_price" className="label">Product price</label>
         </div>

         <button className="addProductForm-add" type="submit">Submit</button>
      </form>
   )
}

export default productAddForm
