import { createContext, useState } from "react"

const CartContext = createContext([])


const CartProvider = ( {Children} ) => {

    const [cart, setCart] = useState([])


    
    const AddItem = ( item, quantity ) => {
        setCart( cartProds =>  cartProds.concat(item) )
    } 
    
    
    // const RemoveItem = ( id ) => {}
    // const IsInCart = ( id ) => {}
    // const Clear = () => {}
    
    
    return (
        <CartContext.Provider value={{ cart, AddItem }}>
            {Children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider}