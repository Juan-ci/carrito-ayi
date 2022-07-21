import React, { useState } from "react";

import { Link } from "react-router-dom";

const CounterStock = ({ stock }) => {
  const [amount, setAmount] = useState(1);
  const modifyAmount = (value) => {
    const newAmount = amount + value;
    if (newAmount <= stock && newAmount >= 1) {
      setAmount(amount + value);
    }
  };

  return (
    <div>
      <h1>Cantidad Disponible</h1>
      <div>
        <button onClick={() => modifyAmount(-1)}>-</button>
        <span>{amount}</span>
        <button onClick={() => modifyAmount(+1)}>+</button>
      </div>
      <Link to="/cart">
        <span>Agregar al Carrito</span>
      </Link>
    </div>
  );
};

export default CounterStock;
