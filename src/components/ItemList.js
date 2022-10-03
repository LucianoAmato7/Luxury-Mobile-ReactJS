import Item from "./Item";



const ItemList = ({items}) => { 
    return(
        <div className='justify-around flex flex-row flex-wrap'>

            {items.map( i => <Item key={i.id} {...i}/> ) }

        </div>
    )
}   

export default ItemList;