import React, { useState } from "react";
import ContadorCarrito from "./Components/ContadorCarrito";
import { ContadorStock } from "./Components/ContadorStock";
import "./App.css"
import Carrito from "./Components/Carrito";

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <ContadorCarrito contador={ contador } setContador={setContador}/>
      <Carrito />
      <ContadorStock />
    </div>
  );
}

export default App;
