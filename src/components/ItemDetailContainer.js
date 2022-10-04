// import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "./data/products";

const ItemDetailContainer = () => {

    const {id : itemId} = useParams()

    const [item, setItem] = useState({})
    
    useEffect(() => {

        GetItem().then( response => {
            setItem(response)
        })

    }, [])



    const GetItem = () => {
        
        return new Promise((resolve) => {

            setTimeout(() => {
              resolve( products.find( p => p.id === Number(itemId) ) )
            }, 2000);

        })
    }

    return(
        <div>
            <h1>{item.name}</h1>
            {/* {<ItemDetail key={item.id} {...item}/>} */}
        </div>
    )

}
export default ItemDetailContainer;