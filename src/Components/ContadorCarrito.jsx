import React from 'react'

const ContadorCarrito = ({ contador, setContador }) => {


  return (
    <div>
        <p>Cantidad: { contador }</p>
        <button type='text' onClick={() => setContador(--contador)}>-</button>
        <button type='text' onClick={() => setContador(++contador)}>+</button>
    </div>
  )
}

export default ContadorCarrito