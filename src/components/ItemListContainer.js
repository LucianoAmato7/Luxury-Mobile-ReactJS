import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {products} from './data/products'
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'


const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()

    const [prods, setProds] = useState([])

    const [loading, setLoading] = useState(true)

    
    useEffect(() => {

        GetProducts(categoryId)
            .then( response =>{
                setProds(response)
                setLoading(false)
        })

    }, [categoryId])

    const GetProducts = (categoryId) => {
        
        return new Promise( resolve => {

            setTimeout(() => {

              resolve( categoryId === undefined ? products : products.filter(p => p.category === categoryId) )

            }, 2000);
          })

    }
    
    return(
        <div>
            <h1 className='text-5xl m-10 text-black underline'>DREAM BURGER</h1>
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

