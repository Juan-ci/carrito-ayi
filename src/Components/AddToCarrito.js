import React from 'react';
import { producto1, producto2, producto3, producto4, producto5 } from "./productos"

const AddToCarrito = (props) => {
    function handlerOnSubmit (e) {
        e.preventDefault();
        props.carrito.push(document.getElementById('name').value); // cambiar por e.target (averiguar)
    }
  return (
    <div>
      <form onSubmit={handlerOnSubmit}>
        <label>Ingrese el nombre del producto: </label>
        <select id = "Productos">
          <option value={producto1.id}>{producto1.nombre}</option>
          <option value={producto2.id}>{producto2.nombre}</option>
          <option value={producto3.id}>{producto3.nombre}</option>
          <option value={producto4.id}>{producto4.nombre}</option>
          <option value={producto5.id}>{producto5.nombre}</option>
        </select>
        <button type="submit">Agregar</button>
      </form>
    </div>
    
  )
}

export default AddToCarrito