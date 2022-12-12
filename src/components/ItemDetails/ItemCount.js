import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../Cart/CartContext';

function ItemCount({ item, CounterHide, AddtoCart }) {
    

    const [counter, setCounter] = useState(1);

    const [stock, setStock] = useState(item.stock);

    const { IsInCart, format } = useContext(CartContext)
    
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
        
        if ( IsInCart(id) ) {

            toast.success('! Ya se encuentra en carrito ¡', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {

            toast.warning('! No se encuentra en carrito ¡', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } 
             

    }

  return (

    <div className='bg-white w-auto p-1 my-2'>

        <div className='flex flex-row justify-between m-auto w-11/12 px-5'> 

            <span className='text-black text-3xl p-0.5'>$ {format(item.price)}</span>
            
            <span className='border border-warning bg-white shadow-lg shadow-black-500/50'>

                <button onClick={EventClickSubtr} className='pl-1 text-xl w-3 font-semibold text-black'>-</button>

                <span className='mx-10 text-black border-black'>{counter}</span>

                <button onClick={EventClickAdd} className='pr-1 text-xl w-3 font-semibold text-black'>+</button>

            </span>

        </div>    

        <div className='flex flex-col mt-5'> 

            <button 
                onClick={ OnAdd } 
                className='
                transition 
                ease-in-out 
                delay-150 
                text-xl 
                sm:text-2xl 
                mb-3 
                py-1.5 
                px-4 
                bg-blue-400 
                text-black 
                drop-shadow-2xl 
                rounded-md 
                hover:border-amber-300 
                border-2 
                mx-auto 
                hover:scale-110'
            >
                Agregar al carrito
            </button>

            <button 
                onClick={ (e) => {IsInCartHandler(e, item.id)} } 
                className='
                transition 
                ease-in-out 
                delay-150 
                text-xl 
                sm:text-2xl 
                mb-3 
                py-1.5 
                px-5 
                bg-blue-400 
                text-black 
                drop-shadow-2xl 
                rounded-md 
                border 
                hover:border-amber-300 
                w-auto 
                mx-auto 
                hover:scale-110'
            >
                ¿ Se encuentra en carrito ?
            </button>

            <span className='text-sm p-1'>Disponibles: {stock}</span>

        </div>

        <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        
    </div>
  )
}

export default ItemCount
