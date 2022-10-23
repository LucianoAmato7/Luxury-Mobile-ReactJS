import { useContext } from "react"
import { CartContext } from "./CartContext";
import { BsTrashFill  } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, RemoveItem, Clear } = useContext(CartContext)

    const RemoveHandler = (e, id) => {

        e.stopPropagation()

        RemoveItem(id)

    }

    const ClearHandler = (e) => {

        e.stopPropagation()

        Clear()

    }

    return(
        
        <div className="my-10 pb-10">
        
            <h2 className="my-10 text-5xl text-black">CARRITO</h2>
            
            { cart.length > 0 ?

                <>  
                
                    {cart.map( p => 

                    <li key={p.id} className='flex flex-row justify-between border-y-4 border-black items-center m-10 pr-10'> 

                        <img src={p.img} alt={p.name} className='w-80'/>

                        <div className="text-5xl text-black">{p.name}</div> 

                        <div className="text-5xl text-black">{p.quantity} u.</div>  

                        <div className="text-5xl text-black">$ {p.price}</div> 

                        <button onClick={ (e) => { RemoveHandler(e, p.id) } }   className="text-5xl text-red-600">
                            <BsTrashFill/>
                        </button> 

                    </li>)}

                    <div className="flex flex-row justify-around">

                        <button onClick={ (e) => { ClearHandler(e) } } className='text-4xl text-black border-black px-5 my-4 rounded-lg bg-orange-500'> VACIAR CARRITO </button>
                        
                        <div className="py-12 mx-9">

                            <p className="text-black text-6xl" >TOTAL $ {cart.reduce((acum, prod) => acum + prod.price * prod.quantity, 0)}</p>
                                
                        </div>
                    
                    </div> 
                    
                </> 
                
                : 

                <>  
                    <h2 className="text-3xl text-black">¡AUN NO HA AGREGADO PRODUCTOS!</h2>

                    <Link to={'/'}>
                        <button className="p-5 text-black text-3xl m-5 rounded-lg bg-blue-400 border-black">
                            VER PRODUCTOS
                        </button>
                    </Link>

                </>
            }

        </div>

    )

}

export default Cart