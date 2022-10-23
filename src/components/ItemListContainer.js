import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = ({greeting}) => {

    const {brandId} = useParams()

    const [prods, setProds] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        GetProducts(brandId)

    }, [brandId])


    const GetProducts = (brandId) => {
        
        const db = getFirestore() 

        const prodsRef = collection( db, 'products')
        
        //SOLO SI SE RECIBE EL PARAMETRO DE CATEGORIA LO UTILIZA EN UN WHERE. DE LO CONTRARIO NO APLICA EL FILTRO.

        if (brandId) {
            
            const prodsFilter = query( prodsRef, where( 'brand', '==' , brandId ) ) 

            getDocs(prodsFilter)

                .then( snapshot => {
   
                    const data = snapshot.docs.map( e => ( { id: e.id, ...e.data() }) )

                    setProds( data )
                    setLoading(false)

                })
            
        } else {

            getDocs(prodsRef)

                .then( snapshot => {

                    setTimeout(() => {
                        
                        const data = snapshot.docs.map( e => ( { id: e.id, ...e.data() }) )

                        setProds( data )
                        setLoading(false)

                    }, 2000)
                })

        }

    }
    
    return(

        <div>
            <h1 className='text-5xl mt-16 text-black underline italic'>LUXURY CRYSTAL</h1>
            <h2 className="text-3xl m-10 text-black underline">{greeting}</h2>

            {loading ?  

                <div className='flex justify-center mt-48'>
                    <DotSpinner 
                    size={40}
                    speed={0.9} 
                    color="black" 
                    />
                </div>

            : <ItemList items={prods}/> }

        </div>
        
    )
    
}

export default ItemListContainer; 

