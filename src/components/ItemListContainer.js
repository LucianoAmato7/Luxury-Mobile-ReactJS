import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {products} from './data/products'

const ItemListContainer = ({greeting}) => {

    const [prods, setProds] = useState([])
    
    useEffect(() => {
        GetProducts().then( response =>{
            setProds(response)
        })
    }, [])

    const GetProducts = () => {
        
        return new Promise( resolve => {
            setTimeout(() => {
              resolve( products )
            }, 2000);
          })

    }
    
    return(
        <div>
            <h1 className='text-5xl m-10 text-black underline'>DREAM BURGER</h1>
            <h2 className="text-3xl m-10 text-black underline">{greeting}</h2>

            <ItemList items={prods}/>


        </div>
    )
    
}

export default ItemListContainer; 

