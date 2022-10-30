import { useContext } from "react"
import { CartContext } from "./CartContext";
import { BsTrashFill  } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, RemoveItem, Clear, Total, format } = useContext(CartContext)

    const RemoveHandler = (e, id) => {

        e.stopPropagation()

        RemoveItem(id)

    }

    const ClearHandler = (e) => {

        e.stopPropagation()

        Clear()

    }


    return(
        
        <div className="lg:mx-40 mt-20 pb-10">
        
            
            { cart.length > 0 ?

                <>  

                    <div className="m-10 align-middle flex justify-center">

                        <table className="w-11/12 text-black">

                            <thead className="border-b border-black text-3xl">

                                <tr>
                                    <th></th>
                                    <th>Modelo</th>
                                    <th>Unidades</th>
                                    <th>Monto</th>
                                </tr>

                            </thead>

                            <tbody>

                                {cart.map( p => 

                                    <tr className='border-b border-black text-3xl' key={p.id}>
                                        <td className="w-1/4">
                                            <img src={p.img} className='w-1/2' alt={p.name}></img>
                                        </td>
                                        <td>{p.name}</td>
                                        <td>{p.quantity}</td>
                                        <td>{ format(p.price) }</td>
                                        <td>
                                            <button onClick={ (e) => { RemoveHandler(e, p.id) } } className="text-4xl text-red-600 opacity-80 ml-5">
                                                <BsTrashFill/>
                                            </button>
                                        </td>
                                    </tr>

                                )}

                            </tbody>
                        </table>

                    </div>   
                    
                    <div className="flex flex-row justify-between w-10/12 m-auto">

                        <button onClick={ (e) => { ClearHandler(e) } } className='text-3xl text-black border-black px-5 my-9 rounded-lg bg-blue-400 drop-shadow-lg'> VACIAR CARRITO </button>
                        
                        <div className="py-12">

                            <p className="text-black lg:text-5xl md:text-3xl" >Total $ { format( Total() ) }</p>
                                
                        </div>
                    
                    </div> 

                    <Link to={'/Order'}>    
                        <div>
                            <button className="p-5 text-black text-5xl m-5 rounded-lg bg-blue-400 border-black drop-shadow-lg">CONTINUAR CON LA COMPRA</button>
                        </div>
                    </Link>
                </> 
                
                : 

                <>  
                    <h2 className="text-3xl text-black m-10 border-y-2 border-black p-16 mt-28">¡AUN NO HA AGREGADO PRODUCTOS EN EL CARRITO!</h2>

                    <Link to={'/'}>
                        <button className="p-5 text-black text-3xl m-10 rounded-lg bg-blue-400 border-black">
                            VER PRODUCTOS
                        </button>
                    </Link>

                </>
            }

        </div>

    )

}

export default Cart