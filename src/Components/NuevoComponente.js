import React from 'react'

const NuevoComponente = (props) => {
    function handlerOnSubmit (e) {
        e.preventDefault();
        props.carrito.push(document.getElementById('name').value); // cambiar por e.target (averiguar)
    }
  return (
    <form onSubmit={handlerOnSubmit}>
        <label>Ingrese el nombre del producto: </label>
        <input type="text" id="name"></input>
    </form>
  )
}

export default NuevoComponente