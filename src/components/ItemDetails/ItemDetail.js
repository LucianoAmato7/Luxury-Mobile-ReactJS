import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import ItemCount from "./ItemCount";
import Specs from "./Specs";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ItemDetail = ({item}) => {
   
    useEffect(() => {
        AOS.init();
    }, [])

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

        <div className="bg-white m-auto border rounded-xl lg:w-2/5 md:w-1/2 sm:w-5/6 w-11/12 shadow-2xl" data-aos="zoom-in">

            <div className="m-2 flex flex-col justify-center">

                <span className="text-black text-xl">{item.brand.toUpperCase()}</span>

                <p className="text-2xl m-2 text-black font-bold"> {item.brand} {item.name.toUpperCase()}</p>   

            </div> 

            <img className="w-1/3 flex m-auto mt-2" src={item.img} alt={item.name}></img>

            <Specs item={item} />

            {loading ? 
        
                <ItemCount CounterHide={CounterHide} AddtoCart={AddtoCart} item={item}/> :

                <div className="sm:flex-row flex flex-col text-xl text-black justify-center itemD">
                
                    <Link to='/' onClick={keepBuying}>   

                        <button className="transition ease-in-out delay-150 text-lg sm:text-xl m-4 py-1.5 px-3 bg-blue-400 drop-shadow-2xl rounded-md hover:border-amber-300 border-2 hover:scale-110">
                            Seguir comprando
                        </button>

                    </Link>

                    <Link to={'/cart'}>

                        <button className="transition ease-in-out delay-150 text-lg sm:text-xl m-4 py-1.5 px-3 bg-blue-400 drop-shadow-2xl rounded-md border hover:border-amber-300 hover:scale-110">
                            Terminar mi compra
                        </button>

                    </Link>

                </div>    

            }

        </div>

            
    )
}

export default ItemDetail;

