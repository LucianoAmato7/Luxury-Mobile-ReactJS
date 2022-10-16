import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
   
    const [loading, setLoading] = useState(true)

    const CounterHide = () => { setLoading(false) }

    const keepBuying = (e) => {

        e.stopPropagation()

        setLoading(true)

    }

    //CONTEXT
    const { AddItem } = useContext(CartContext)

    //AGREGA ITEM AL CARRITO POR CONTEXT
    const AddtoCart = (counter) => {   

        AddItem( item, counter )

    }


    return(

        <div className="bg-white my-12 border rounded-xl w-1/2 m-auto">

            <p className="text-4xl mt-5 text-black">{item.name.toUpperCase()}</p>

            <img className="w-1/2 flex m-auto" src={item.img} alt={item.name}>{}</img>

            <div className="bg-warning bg-opacity-75 mx-8 my-3 flex flex-row justify-between border rounded-xl p-1"> 

                <p className="text-xl text-black m-auto">{item.ingredients.toUpperCase()}</p>

            </div>

            {loading ? 
        
                <ItemCount item={item} CounterHide={ CounterHide } AddtoCart={ AddtoCart }/> :

                <div className="flex flex-row text-xl text-black justify-center">
                
                    <Link to={'/cart'}>

                        <button className="m-5 py-1.5 px-7 bg-warning drop-shadow-2xl rounded-md border border-amber-300 hover:scale-110">
                            Terminar mi compra
                        </button>

                    </Link>

                    <Link to='/' onClick={keepBuying}>   

                        <button className="m-5 py-1.5 px-7 bg-warning drop-shadow-2xl rounded-md border border-amber-300 hover:scale-110">
                            Seguir comprando
                        </button>

                    </Link>

                </div>    

            }

        </div>
            
    )
}

export default ItemDetail;

