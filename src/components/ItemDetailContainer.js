import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        GetProducts()
    }, [])

    const GetProducts = () => {
        
        const URL = '../data/products.json';
        
        setTimeout(() => {

            fetch(URL)
                .then(resp => resp.json())
                .then((data) => {
                    setProducts(data);
                })
            
        }, 2000);

    }

    return(
        <div>
            {/* ESTO ME TIENE QUE HACER UN MAP DEL ID AL CUAL YO CLIKIE */}
            {products.map( i => <ItemDetail key={i.id} {...i}/> ) }
        </div>
    )
}

export default ItemDetailContainer;