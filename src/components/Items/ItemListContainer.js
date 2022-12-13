import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import '../../styles/titles.css'
import SimpleSlider from '../Carousel-Slick'



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
                        
                    const data = snapshot.docs.map( e => ( { id: e.id, ...e.data() }) )

                    setProds( data )
                    setLoading(false)
                })

        }

    }

    
    return(

        <div>

            <SimpleSlider/>

            <h1 className="title sm:text-3xl text-lg mt-16 underline italic uppercase">{greeting}</h1>

            {loading ?  

                <div className='flex justify-center mt-48'>
                    <DotSpinner 
                    size={40}
                    speed={0.9} 
                    color="black" 
                    />
                </div>

            : <ItemList items={prods} brand={brandId}/> }

        </div>
        
    )
    
}

export default ItemListContainer; 

