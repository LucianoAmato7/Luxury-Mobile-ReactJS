import { Link } from "react-router-dom";


const Item = ({id, name, img, brand}) => {
    
    return(

        <Link to={`/item/${id}`}>
            <div className="card w-96 bg-white shadow-xl mb-20 mx-5" key={id}>
                <figure>
                    <img  className="w-1/2 mt-3" src={img} alt={name}/>
                </figure>
                <div className="my-3 flex flex-col justify-center">
                    <span className="text-black mt-2 text-xl">{brand.toUpperCase()}</span>
                    <p className='text-3xl my-2 text-black font-bold'>{name.toUpperCase()}</p>
                </div> 
            </div>          
        </Link>

    )
}   
    

export default Item;
