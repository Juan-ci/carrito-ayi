import { Button, CardActions, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

const CounterStock = ({ stock }) => {
  const [amount, setAmount] = useState(1);
  const modifyAmount = (value) => {
    const newAmount = amount + value;
    if (newAmount <= stock && newAmount >= 1) {
      setAmount(amount + value);
    }
  };

  return (
    <div className="container-counter">
      <div className="header-counter">
        <Button color='success' size="small" variant="contained" onClick={() => modifyAmount(-1)}>-</Button>
        <Typography gutterBottom variant="h5" component="div">
          {amount}
        </Typography>
        <Button color='success' size="small" variant="contained" onClick={() => modifyAmount(+1)}>+</Button>
      </div>
      <Typography variant="body2" color="text.secondary">
        Cantidad Disponible: {stock}
      </Typography>
      <div className="footer-counter">
        <CardActions>
          <Link to="/cart">
            <Button size="small">Agregar al Carrito</Button>
          </Link>
        </CardActions>
      </div>
    </div>
  );
};

export default CounterStock;
