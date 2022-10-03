import ItemCount from "./ItemCount";

const ItemDetail = ({ingredientes, img, name, price}) => {

    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}>{}</img>
            <p>{ingredientes}</p>
            <span>{price}</span>
            <ItemCount price={price}/>
        </div>
    )
}

export default ItemDetail;