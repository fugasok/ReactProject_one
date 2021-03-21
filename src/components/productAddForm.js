import React from 'react'
import './../styles/productAddForm.sass'


function ProductAddForm({ register, handleSubmit, watch, onSubmit }) {

   // console.log(watch("name"));

   return (
      <section className="addProductForm">
         <form className="addProductForm-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="addProductForm-title">Add product form</h2>

            <div className="addProductForm-item type-file">
               <input id="product_image" type="file" name="image" ref={register}/>
               <label htmlFor="product_image" className="label">Product image</label>
            </div>

            <div className="addProductForm-item type-text">
               <input
                  ref={register({ required: true })}
                  id="product_name" type="text" name="name" placeholder="Product name" />
               <label htmlFor="product_name" className="label">Product name</label>
            </div>

            <div className="addProductForm-item type-number">
               <input
                  ref={register({ required: true })}
                  id="product_price" type="number" name="price" placeholder="Product price" />
               <label htmlFor="product_price" className="label">Product price</label>
            </div>

            <button className="addProductForm-add" type="submit">Submit</button>
         </form>
      </section>
   )
}

export default ProductAddForm
