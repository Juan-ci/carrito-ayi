import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./Components/About";
import Cart from "./Components/Cart";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
