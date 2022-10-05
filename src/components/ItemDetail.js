import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    return(

        <div className="bg-white my-12 border rounded-xl w-1/2 m-auto">
            <p className="text-4xl mt-5 text-black">{item.name.toUpperCase()}</p>
            <img className="w-1/2 flex m-auto" src={item.img} alt={item.name}>{}</img>
            <div className="bg-warning bg-opacity-75 mx-8 my-3 flex flex-row justify-between border rounded-xl p-1"> 
                <p className="text-xl text-black m-auto">{item.ingredients.toUpperCase()}</p>
            </div>
            <ItemCount priceCounter={item.price} stockCounter={item.stock}/>
        </div>
    )
}

export default ItemDetail;