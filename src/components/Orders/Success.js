import { Link } from "react-router-dom"
import { MdOutlineTaskAlt  } from 'react-icons/md';


const Success = ( {id} ) => {


    return(

        <div className="bg-blue-900 bg-opacity-50 rounded-3xl shadow-2xl p-5 m-auto w-1/2 text-black mt-40 flex flex-col justify-between">

            <h3 className="text-5xl italic mb-2">¡ COMPRA REALIZADA CON EXITO !</h3>
        
            <MdOutlineTaskAlt className="self-center text-9xl text-success m-8"/>
            
            <p className="text-2xl mb-5">Su numero de operacion es: <strong>{id}</strong></p>

            <Link to='/'>

                <button className="hover:scale-110 text-2xl text-black border-black p-2 m-2 rounded-lg bg-blue-400 drop-shadow-lg">VOLVER A LA TIENDA</button>

            </Link>

        </div>


    )

}

export default Success