import { Link } from "react-router-dom";


const Item = ({id, name, price, img}) => {
    
    return(

        <Link to={`/item/${id}`}>
            <div className="card w-96 bg-white shadow-xl mb-20 mx-5" key={id}>
                <figure>
                    <img className='w-80 ' src={img} alt={name}/>
                </figure>
                <div className="flex flex-row justify-between mx-4 mb-2">
                    <p className='text-3xl my-2 text-black'>{name.toUpperCase()}</p>
                    <span className="text-3xl text-black self-center">$ {price}</span>
                </div>    
            </div>          
        </Link>

    )
}   
    

export default Item;