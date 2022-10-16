import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "./data/products"
import ItemDetail from "./ItemDetail"
import { DotSpinner } from '@uiball/loaders'


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
            {loading ? 

                <div className='flex justify-center mt-80'>
                    <DotSpinner 
                    size={40}
                    speed={0.9} 
                    color="black" 
                    />
                </div> 
            
            : <ItemDetail key={item.id} item={item}/>}

        </div>        
    )
    
}

export default ItemDetailContainer;
