import React, { useEffect, useState } from "react";
import Products from "./Static/StaticProducts.json";
import "./App.css";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import "./Components/ProductStyle.css";
import Footer from "./Components/Footer";
import PageTitle from "./Components/PageTitle";
import SearchRef from "./Components/SearchRef";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="App">
      {/* <Navbar className="navbar" /> */}
      <Nav className="navbar"/>
      <PageTitle />
      
      <section className="container">
      <Routes >
        <Route index element={<Home />} />
        <Route
          path="/products"
          element={            
            Products.map((elem) => (            
            <Product
              name={elem.name}
              description={elem.description}
              image={elem.image}
              stock={elem.stock}
              price={elem.price}
              key={elem.id}
            />
          ))}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      </section>
      <SearchRef />
      <section>
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
