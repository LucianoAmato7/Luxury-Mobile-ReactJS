import React, { useState } from 'react'

function ItemCount({priceCounter , stockCounter}) {

    const [counter, setCounter] = useState(1);

    const [stock, setStock] = useState(stockCounter);
    
    const EventClickAdd = () => {
        
        counter < stock && setCounter(counter + 1)
        
    }

    const EventClickSubtr = () => {
        
        counter > 1 && setCounter(counter - 1)

    }

    const OnAdd  = () => {

        if (counter <= stock) {

            setStock(stock - counter);
            console.log('Cantidad seleccionada:', counter);

        } else {
            console.log('Stock superado')
        } 
    }

  return (
    <div className='bg-white w-auto p-1 my-2'>

        <div className='flex flex-row justify-between mx-2'>    
            <span className='text-black text-2xl p-0.5 ml-2'>$ {priceCounter}</span>
            
            <span className='border border-warning bg-white shadow-lg shadow-black-500/50'>

                <button onClick={EventClickSubtr} className='pl-1 text-xl w-3 font-semibold text-black'>-</button>

                <span className='mx-10 text-black border-black'>{counter}</span>

                <button onClick={EventClickAdd} className='pr-1 text-xl w-3 font-semibold text-black'>+</button>

            </span>
        </div>    

        <div className='flex flex-col'> 
            <button onClick={ OnAdd } className='mt-3 py-1.5 px-7 bg-warning text-black drop-shadow-2xl rounded-md border border-amber-300 text-xl'>Agregar al carrito</button>
            <span className='text-sm p-1'>Disponibles: {stock}</span>
        </div>
        
    </div>
  )
}

export default ItemCount