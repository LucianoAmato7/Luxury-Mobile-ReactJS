import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import ItemCount from "./ItemCount";
import Specs from "./Specs";


const ItemDetail = ({item}) => {
   
    const [loading, setLoading] = useState(true)

    const CounterHide = () => { setLoading(false) }

    const keepBuying = (e) => {

        e.stopPropagation()

        setLoading(true)

    }

    const { AddItem } = useContext(CartContext)

    //AGREGA ITEM AL CARRITO POR CONTEXT
    const AddtoCart = (counter) => {   

        AddItem( item, counter )

    }


    return(

        <div className="bg-white my-3 border rounded-xl lg:w-2/5 md:w-1/2 sm:w-4/5 mx-auto shadow-2xl">

            <div className="m-2 flex flex-col justify-center">

                <span className="text-black text-xl">{item.brand.toUpperCase()}</span>

                <p className="text-2xl m-2 text-black font-bold"> {item.brand} {item.name.toUpperCase()}</p>   

            </div> 

            <img className="w-1/3 flex m-auto mt-2" src={item.img} alt={item.name}>{}</img>

            <Specs item={item} />

            {loading ? 
        
                <ItemCount CounterHide={CounterHide} AddtoCart={AddtoCart} item={item}/> :

                <div className="flex flex-row text-xl text-black justify-center">
                
                    <Link to='/' onClick={keepBuying}>   

                        <button className="m-5 py-1.5 px-7 bg-blue-400 drop-shadow-2xl rounded-md border border-amber-300 hover:scale-110">
                            Seguir comprando
                        </button>

                    </Link>

                    <Link to={'/cart'}>

                        <button className="m-5 py-1.5 px-7 bg-blue-400 drop-shadow-2xl rounded-md border border-amber-300 hover:scale-110">
                            Terminar mi compra
                        </button>

                    </Link>

                </div>    

            }

        </div>

            
    )
}

export default ItemDetail;

