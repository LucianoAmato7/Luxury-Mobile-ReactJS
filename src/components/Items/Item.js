import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Item = ({id, name, img, brand}) => {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return(

        <Link to={`/item/${id}`}>
            <div className="card sm:w-96 w-80 bg-white mb-20 mx-5 shadow-2xl" key={id} data-aos="flip-down">
                <figure>
                    <img  className="w-1/2 mt-3" src={img} alt={name}/>
                </figure>
                <div className="my-3 flex flex-col justify-center">
                    <span className="text-black mt-2 text-lg">{brand.toUpperCase()}</span>
                    <p className='text-2xl my-2 text-black font-bold'>{name.toUpperCase()}</p>
                </div> 
            </div>          
        </Link>

    )
}   
    

export default Item;
