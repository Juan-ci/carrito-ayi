import React from "react";

//COMPONENTE NO USADO PORQUE ES SIMILAR A COUNTER STOCK

const ContadorCarrito = ({ contador, setContador }) => {
  return (
    <div>
      <p>Cantidad: {contador}</p>
      <button type="text" onClick={() => setContador(--contador)}>
        -
      </button>
      <button type="text" onClick={() => setContador(++contador)}>
        +
      </button>
    </div>
  );
};

export default ContadorCarrito;
