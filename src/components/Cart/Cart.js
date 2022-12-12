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
        
        <div className="lg:mx-40 mx-4">
            
            { cart.length > 0 ?

                <div className="pb-5 mt-10 shadow-2xl border-black rounded-2xl border-2">  

                    <div className="mt-9 align-middle flex justify-center">

                        <table className="w-11/12 text-black">

                            <thead className="border-b border-black text-3xl">

                                <tr className="sm:text-3xl text-base">
                                    <th></th>
                                    <th>Modelo</th>
                                    <th>u.</th>
                                    <th>Monto</th>
                                </tr>

                            </thead>

                            <tbody>

                                {cart.map( p => 

                                    <tr className='border-b border-black sm:text-3xl text-xs' key={p.id}>
                                        <td className="w-1/4">
                                            <img src={p.img} className='w-3/4 sm:w-2/3 inline hover:scale-110' alt={p.name}></img>
                                        </td>
                                        <td>{p.name}</td>
                                        <td className="font-bold">{p.quantity}</td>
                                        <td>$ { format(p.price) }</td>
                                        <td>
                                            <button 
                                                onClick={ (e) => { RemoveHandler(e, p.id) } } 
                                                className="sm:text-4xl text-2xl text-red-600 opacity-80 ml-5"
                                            >
                                                <BsTrashFill/>
                                            </button>
                                        </td>
                                    </tr>

                                )}

                            </tbody>
                        </table>

                    </div>   
                    
                    <div className="flex flex-row justify-around items-center">

                        <button 
                            onClick={ (e) => { ClearHandler(e) } } 
                            className='transition ease-in-out delay-150 sm:text-3xl text-base text-black border-black sm:px-3 h-1/4 p-2 rounded-lg bg-blue-400 drop-shadow-lg hover:scale-110'
                        >
                            VACIAR CARRITO 
                        </button>
                        
                        <div className="py-12">

                            <span className="text-black sm:text-4xl text-base" >Total $ { format( Total() ) }</span>
                                
                        </div>
                    
                    </div> 

                    <Link to={'/Order'}>    
                        <div>
                            <button 
                                className="transition ease-in-out delay-150 sm:p-5 p-2 text-black sm:text-3xl text-xl rounded-lg bg-blue-400 drop-shadow-lg hover:scale-110 hover:border-amber-300"
                            >
                                CONTINUAR CON LA COMPRA
                            </button>
                        </div>
                    </Link>
                </div> 
                
                : 
                
                <div className="sm:pb-10 pb-5 sm:mt-24 mt-32 shadow-2xl border-black rounded-2xl border-2">  

                    <h2 
                        className="sm:text-3xl text-sm text-black sm:m-10 m-5 border-y border-black sm:p-16 py-5 sm:mt-28 mt-16">
                        ¡AUN NO HA AGREGADO PRODUCTOS EN EL CARRITO!
                    </h2>

                    <Link to={'/'}>
                        <button 
                            className="transition ease-in-out delay-150 p-5 text-black sm:text-3xl text-xl rounded-lg bg-blue-400 border-black drop-shadow-lg hover:scale-110">
                            VER PRODUCTOS
                        </button>
                    </Link>

                </div>
            }

        </div>

    )

}

export default Cart