import React from 'react';
import { Button, ButtonGroup } from '@mui/material'

const ContadorCarrito = ({ contador, setContador }) => {


  return (
    <div>
        <p>Cantidad: { contador }</p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" size='small'>
          <Button onClick={() => setContador(--contador)}>-</Button>
          <Button onClick={() => setContador(++contador)}>+</Button>
        </ButtonGroup>
    </div>
  )
}

export default ContadorCarrito