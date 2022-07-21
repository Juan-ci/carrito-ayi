import React, {  useEffect, useState } from "react";
import ContadorCarrito from "./Components/ContadorCarrito";
import { ContadorStock } from "./Components/ContadorStock";
import Products from './Static/StaticProducts.json';
import "./App.css";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import "./Components/ProductStyle.css"
import Footer from "./Components/Footer";
import PageTitle from "./Components/PageTitle";

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Products);
  }, [])

  return (
    <div className="App">

      <Navbar className="navbar" />
      <PageTitle />   
      <section className="container">  
        
      {
        Products.map(elem => (<Product 
                                  name={elem.name}
                                  description={elem.description}
                                  image={elem.image}
                                  stock={elem.stock}
                                  price={elem.price}
                                />))
      }
      {/* 
      Comentado ya que se agregó en el componente products dentro de Card
      <ContadorCarrito products={products}/> 
      */}
      {/* {<ContadorStock />] */}
     
      </section>
      <Footer />
    </div>
  );
}

export default App;
