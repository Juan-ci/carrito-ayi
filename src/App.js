import React, { useState } from "react";
import ContadorCarrito from "./Components/ContadorCarrito";
import { ContadorStock } from "./Components/ContadorStock";
import "./App.css"

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <ContadorCarrito contador={ contador } setContador={setContador}/>
      <ContadorStock />
    </div>
  );
}

export default App;
