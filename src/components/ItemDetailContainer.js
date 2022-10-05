import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "./data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const {id : itemId} = useParams()
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    
    useEffect(() => {

        GetItem(itemId)
            .then( resp => {
            setLoading(false)
            setItem(resp)
        })

    }, [itemId])

    const GetItem = (itemId) => {
        
        return new Promise((resolve) => {

            setTimeout(() => {

              resolve( products.find( p => p.id === Number(itemId)))

            }, 2000);

        })
    }

    return(
        <div>
            {loading ? <h1 className="text-3xl text-black mt-5">Cargando...</h1> : <ItemDetail key={item.id} item={item}/>}
        </div>
    )
    
}

export default ItemDetailContainer;
