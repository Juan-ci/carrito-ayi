import React, { useState } from 'react'

const useCounter = ({value}) => {

    let [counter, setCounter] = useState(0);

    if(value === 'increment'){
        addProduct() 
    } else {
        removeProduct()
    }

    const removeProduct = () => { 
        
        if(counter !== 0){
        setCounter(--counter);
        setCurrentStock(++currentStock);
        counterRef.current -= 1 ; 
        }    
        // counter !== 0 && setCounter(--counter);    
    }

    const addProduct = () => {
        if(counter < originalStock){
        setCounter(++counter);
        setCurrentStock(--currentStock);
        counterRef.current += 1 ; 
        }    
        // counter < currentStock && setCounter(++counter);
    }
    return counter

}

export default useCounter