import React,{useState} from 'react'

export const ContadorStock = ({stock}) => {
    const[amount,setAmount] = useState(1)
    const modifyAmount = (value) => {
        const newAmount = amount+value;
          if (newAmount <= stock && newAmount >=1) 
          { setAmount(amount+value);}
        
    }


  return (
    <div>
        <h1>Cantidad Disponible: {stock}</h1> {/* Agregamos stock para mostrar*/}
        <div>
          {/*
            Botones redundante, los botones ya están en ContadorCarrito
            <button onClick={() => modifyAmount(-1)}>-</button>
            <button onClick={() => modifyAmount(+1)}>+</button>
            */
          }
            <span>{amount}</span>
            
        </div>
        <button onClick={() =>console.log ()}>Agregar al Carrito</button>
    </div>

  )
}