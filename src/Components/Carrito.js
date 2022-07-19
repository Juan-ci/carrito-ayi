import React from "react";
import AddToCarrito from "./AddToCarrito";

function Carrito() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [stock, setStock] = useState();
  const [value, setValue] = useState();
  const [id, setId] = useState();

  let carrito = [];

  return (
    <div>
      <AddToCarrito carrito="carrito" />
    </div>
  );
}

export default Carrito;
