import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material'

const ContadorCarrito = ({stock}) => {

  let [counter, setCounter] = useState(0);

  const removeProduct = () => {
    counter !== 0 && setCounter(--counter);
    
  }

  //console.log(stock);

  const addProduct = () => {
    counter < stock && setCounter(++counter);
  }

  return (
    <div>
        <p>Cantidad: { counter }</p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" size='small'>
          <Button onClick={removeProduct}>-</Button>
          <Button onClick={addProduct}>+</Button>
        </ButtonGroup>
    </div>
  )
}

export default ContadorCarrito