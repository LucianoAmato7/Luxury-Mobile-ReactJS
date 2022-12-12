import { createContext, useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext([])


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
    
        const cartLS = JSON.parse(localStorage.getItem('cart')) ?? []

        setCart( cartLS )

    }, [])

    useEffect(() => {

        localStorage.setItem( "cart", JSON.stringify(cart) )

    }, [cart])
    

    const Total = () => {

        return cart.reduce( (acum, prod) => acum + prod.price * prod.quantity, 0 )

    }

    
    const AddItem = ( item, counter ) => {

        if ( cart.some( p => p.id === item.id) ) {   

            toast.warning('! Ya se encuentra en carrito !', {
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
            
            setCart( cart => cart.concat( {...item, quantity: counter } ) )

            toast.success('¡ Producto agregado ! ', {
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

    const RemoveItem = ( id ) => {

        setCart( cart.filter(p => p.id !== id) )
    
    }


    const IsInCart = ( id ) => {

        return cart.some( p => p.id === id)
        
    }


    const Clear = () => {

        setCart([])

    }

    //SEPARADOR DE MILES
    const format = (num) => {
        var reg=/\d{1,3}(?=(\d{3})+$)/g; 
        return (num + '').replace(reg, '$&,');
    }


    const Context = {
        cart,
        AddItem,
        IsInCart,
        Clear,
        RemoveItem,
        setCart,
        Total,
        format
    }
    
    
    return (

        <CartContext.Provider value={ Context }>
            {children}

            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

        </CartContext.Provider>

    )

}

export { CartContext, CartProvider}
