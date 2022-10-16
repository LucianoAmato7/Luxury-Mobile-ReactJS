import { createContext, useState } from "react"

const CartContext = createContext([])


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    console.table(cart);

    // localStorage.setItem('cart', JSON.stringify(cart))
    
    const AddItem = ( item, counter ) => {

        if ( cart.some( p => p.id === item.id) ) {   

            console.log('Este producto ya se encuentra en el carrito.') 

        } else {
        
            setCart( cart => cart.concat( {...item, quantity: counter } ) )
    
        } 
    }

    const RemoveItem = ( id ) => setCart(cart.filter(p => p.id !== id))


    const IsInCart = ( id ) => {

        return cart.some( p => p.id === id)
        
    }


    const Clear = () => setCart([])


    const Context = {
        cart,
        AddItem,
        IsInCart,
        Clear,
        RemoveItem
    }
    
    
    return (

        <CartContext.Provider value={ Context }>
            {children}
        </CartContext.Provider>

    )

}

export { CartContext, CartProvider}
