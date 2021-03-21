import React from 'react'
import './styles/base_rules.sass'
//import components
import productAddForm from './components/productAddForm'
import Product from './components/Product'

function App() {



  return (
    <div className="App">
      <header className="main_header">
        <h1 className="page_title">Tibor's shop</h1>

      </header>

      <main className="main">
        <section className="addProductForm">

        </section>

        <section className="product_list">

        </section>
      </main>

      <footer className="main_footer"></footer>
    </div>
  );
}

export default App;
