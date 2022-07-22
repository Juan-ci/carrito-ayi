import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material'

const ContadorCarrito = ({currentStock, setCurrentStock, originalStock}) => {

  let [counter, setCounter] = useState(0);
  
  const removeProduct = () => { 
    
    if(counter !== 0){
      setCounter(--counter);
      setCurrentStock(++currentStock)
    }    
    // counter !== 0 && setCounter(--counter);    
  }

  const addProduct = () => {
    if(counter < originalStock){
      setCounter(++counter);
      setCurrentStock(--currentStock)
    }    
    // counter < currentStock && setCounter(++counter);
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