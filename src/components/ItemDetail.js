import ItemCount from "./ItemCount";

const ItemDetail = ({ingredients, img, name, price, stock}) => {

    return(

        <div className="bg-white my-12 border rounded-xl w-1/2 m-auto">
            <p className="text-4xl mt-5 text-black">{name.toUpperCase()}</p>
            <img className="w-1/2 flex m-auto" src={img} alt={name}>{}</img>
            <div className="bg-warning bg-opacity-75 mx-8 my-3 flex flex-row justify-between border rounded-xl p-1"> 
                <p className="text-xl text-black m-auto">{ingredients.toUpperCase()}</p>
            </div>
            <ItemCount priceCounter={price} stockCounter={stock}/>
        </div>
    )
}

export default ItemDetail;