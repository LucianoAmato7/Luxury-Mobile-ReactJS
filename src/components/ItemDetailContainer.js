import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { DotSpinner } from '@uiball/loaders'
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {

    const {id : itemId} = useParams()
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    
    useEffect(() => {

        GetItem(itemId)

    }, [itemId])

    const GetItem = (itemId) => {
        
        const db = getFirestore()
        
        const prodRef = doc( db, 'products', itemId)

        getDoc( prodRef )
        
        .then( snapshot => {
                            
            setItem({id: snapshot.id, ...snapshot.data()})

            setLoading(false)

        } )

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
