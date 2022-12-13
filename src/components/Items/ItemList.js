import Item from "./Item";
import '../../styles/titles.css'


const ItemList = ({items, brand}) => { 
    return(
        <>
            <h2 className="title text-5xl italic underline uppercase"> { brand } </h2>
            <div className='justify-around flex flex-row flex-wrap mt-20 mx-20'>


                {items.map( i => <Item key={i.id} {...i}/> ) }

            </div>
        </>   
    )
}   

export default ItemList;