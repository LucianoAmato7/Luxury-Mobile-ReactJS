import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';

function ItemCount({item, CounterHide, AddtoCart}) {


    const [counter, setCounter] = useState(1);

    const [stock, setStock] = useState(item.stock);

    const { IsInCart } = useContext(CartContext)
    
    const EventClickAdd = () => {
        
        counter < stock && setCounter(counter + 1)
        
    }

    const EventClickSubtr = () => {
        
        counter > 1 && setCounter(counter - 1)

    }

    const OnAdd  = () => {

        if (counter <= stock) {

            setStock(stock - counter);

            //CAMBIA EL ESTADO DEL LOADING DENTRO DE "ItemDetail" PARA MOSTRAR OTRO HTML.
            CounterHide()

            //FUNCION EN "ItemDetail.js" EJECUTA LA LOGICA DEL CONTEXT PARA AGREGAR EL ITEM AL CARRITO
            AddtoCart(counter)

        } else {
            console.log('Stock superado')
        } 

    }

    const IsInCartHandler = (e, id) => { 
    
        e.stopPropagation()
        
        // Que haga alguna funcion visual como una alerta.
        IsInCart(id) ? console.log('Esta en carrito') : console.log('No esta en carrito')

    }

  return (

    <div className='bg-white w-auto p-1 my-2'>

        <div className='flex flex-row justify-between m-auto w-11/12 px-5'> 

            <span className='text-black text-3xl p-0.5'>$ {item.price}</span>
            
            <span className='border border-warning bg-white shadow-lg shadow-black-500/50'>

                <button onClick={EventClickSubtr} className='pl-1 text-xl w-3 font-semibold text-black'>-</button>

                <span className='mx-10 text-black border-black'>{counter}</span>

                <button onClick={EventClickAdd} className='pr-1 text-xl w-3 font-semibold text-black'>+</button>

            </span>

        </div>    

        <div className='flex flex-col mt-5'> 

            <button onClick={ OnAdd } className='mb-3 py-1.5 px-7 bg-blue-400 text-black drop-shadow-2xl rounded-md border border-amber-300 text-2xl w-1/2 mx-auto hover:scale-110'>
                Agregar al carrito
            </button>

            <button onClick={ (e) => {IsInCartHandler(e, item.id)} } className='mb-3 py-1.5 px-5 bg-blue-400 text-black drop-shadow-2xl rounded-md border border-amber-300 text-xl w-auto mx-auto hover:scale-110'>
                ¿ Se encuentra en carrito ?
            </button>

            <span className='text-sm p-1'>Disponibles: {stock}</span>
        </div>
        
    </div>
  )
}

export default ItemCount
