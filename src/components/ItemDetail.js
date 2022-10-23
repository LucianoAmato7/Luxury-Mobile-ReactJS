import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { GiSmartphone  } from 'react-icons/gi';
import { RiCameraLensLine, RiBattery2ChargeFill } from 'react-icons/ri';
import { TbDimensions  } from 'react-icons/tb';
import { CgSmartphoneRam } from 'react-icons/cg';
import { FaDatabase } from 'react-icons/fa';

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

        <div className="bg-white my-12 border rounded-xl w-2/5 m-auto">

            <div className="m-2 flex flex-col justify-center">

                <span className="text-black text-xl">{item.brand.toUpperCase()}</span>

                <p className="text-2xl m-2 text-black font-bold"> {item.brand} {item.name.toUpperCase()}</p>   

            </div> 

            <img className="w-1/3 flex m-auto mt-2" src={item.img} alt={item.name}>{}</img>

            <div className="bg-blue-300 bg-opacity-75 m-auto my-3 flex flex-row justify-between border rounded-xl p-2 w-1/2"> 

                <div className="flex flex-col justify around ml-5">

                    <div className="flex flex-row">
                        <GiSmartphone className="text-black text-4xl mb-5 mr-2"/>
                        <span className="text-black text-lg"> {item.screenSize}" </span>
                    </div>

                    <div className="flex flex-row">
                        <RiCameraLensLine className="text-black text-4xl mb-5 mr-2"/>
                        <span className="text-black text-md"> {item.camera} MP </span>
                    </div>

                    <div className="flex flex-row items-center">
                        <TbDimensions className="text-black text-4xl mr-2"/>
                        <span className="text-black text-md"> {item.dimension} mm </span>
                    </div>


                </div>

                <div className="flex flex-col justify around mr-5">


                    <div className="flex flex-row">
                        <CgSmartphoneRam className="text-black text-4xl mb-5 mr-2"/>
                        <span className="text-black text-md"> {item.ram} </span>
                    </div>

                    <div className="flex flex-row">
                        <FaDatabase className="text-black text-4xl mb-5 mr-2"/>
                        <span className="text-black text-md"> {item.internalMemory} </span>
                    </div>

                    <div className="flex flex-row items-center">
                        <RiBattery2ChargeFill className="text-black text-4xl mr-2"/>
                        <span className="text-black text-md"> {item.battery} </span>
                    </div>

                </div>

            </div>

            {loading ? 
        
                <ItemCount item={item} CounterHide={ CounterHide } AddtoCart={ AddtoCart }/> :

                <div className="flex flex-row text-xl text-black justify-center">
                
                    <Link to={'/cart'}>

                        <button className="m-5 py-1.5 px-7 bg-blue-400 drop-shadow-2xl rounded-md border border-amber-300 hover:scale-110">
                            Terminar mi compra
                        </button>

                    </Link>

                    <Link to='/' onClick={keepBuying}>   

                        <button className="m-5 py-1.5 px-7 bg-blue-400 drop-shadow-2xl rounded-md border border-amber-300 hover:scale-110">
                            Seguir comprando
                        </button>

                    </Link>

                </div>    

            }

        </div>
            
    )
}

export default ItemDetail;

