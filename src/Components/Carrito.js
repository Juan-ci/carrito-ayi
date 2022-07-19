import React from "react";

function Carrito() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [stock, setStock] = useState();
  const [value, setValue] = useState();
  const [id, setId] = useState();

  let carrito = [];

  return <div>
    <NuevoComponente carrito="carrito" />
  </div>;
}

export default Carrito;