import { Link } from "react-router-dom"
import { MdOutlineTaskAlt  } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Success = ( {id} ) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return(

        <div 
            className="
            text-black 
            bg-blue-900 
            bg-opacity-50 
            rounded-3xl 
            shadow-2xl 
            sm:p-5
            p-4 
            m-auto 
            xl:mt-30
            mt-20 
            xl:w-1/2
            w-11/12 
            flex 
            flex-col 
            justify-between"
            data-aos="zoom-in">

            <h3 className="xl:text-5xl text-lg italic mb-2">¡ COMPRA REALIZADA CON ÉXITO !</h3>
        
            <MdOutlineTaskAlt className="self-center text-9xl text-success m-8"/>
            
            <p className="text-2xl mb-5">Su número de operación es: <strong>{id}</strong></p>

            <Link to='/'>

                <button className="hover:scale-110 text-2xl text-black border-black p-2 m-2 rounded-lg bg-blue-400 drop-shadow-lg transition ease-in-out delay-150">VOLVER A LA TIENDA</button>

            </Link>

        </div>


    )

}

export default Success