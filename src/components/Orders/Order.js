import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Cart/CartContext"
import Form from "./Form"
import Success from "./Success"



const Order = () => { 

    const { cart, Total, setCart, format } = useContext(CartContext)

    const [success, setSuccess] = useState(false)

    const [opID, setOpID] = useState()

    //SE MODIFICA EL ESTADO EN LOS INPUTS DEL FORMULARIO.
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [addres, setAddres] = useState()

    
    const SendOrder = (e) => {

        e.stopPropagation()

        e.preventDefault()

        const order = {

            buyer: {
                name: name,
                email: email,
                phone: phone,
                adress: addres,
                date: (new Date().toLocaleString()),
            },

            items: cart.map( prod =>({id: prod.id, brand: prod.brand, name: prod.name, price: prod.price, quantity: prod.quantity}) ),

            totalPrice: Total()

        }
        

        const data = getFirestore()

        const orderCollection = collection( data , 'orders' ) 

        addDoc( orderCollection, order)

            .then( ( { id } ) => {

                console.log('Operacion realizada con exito');

                setOpID(id)

                setCart( [] ) 
            
                setSuccess(true)
                  
            })
                 
    }

    const FormFn = {
        SendOrder,
        setName,
        setEmail,
        setPhone,
        setAddres
    }


    return (
        
    <div>

        { success ?

            <Success id={opID} />

        :    

            <div> 
                
                <div className="flex xl:flex-row flex-col xl:pb-20 pb-12 xl:px-52 p-0">

                    <Form FormFn={ FormFn }  />

                        
                    <Link to='/cart' 
                        className="
                        transition 
                        ease-in-out 
                        delay-150
                        m-auto
                        text-xl 
                        xl:p-7
                        p-3 
                        xl:w-2/5 
                        w-11/12  
                        h-min 
                        shadow-2xl 
                        xl:hover:scale-125 
                        hover:scale-105
                        self-center 
                        flex 
                        flex-col 
                        justify-between 
                        text-black text-center 
                        bg-black 
                        bg-opacity-25 
                        rounded-3xl">


                        { cart.map( p =>  
                            
                            <li key={p.img} 

                                className="
                                xl:text-xl 
                                text-base 
                                flex 
                                flex-row 
                                justify-between 
                                text-black 
                                items-center 
                                xl:mb-2 
                                mb-4">
    
                                <img src={p.img} alt={p.name} className='w-1/6'/>

                                <div className="flex flex-col">
                                    <p> <strong> {p.brand} </strong> </p>
                                    <p>{p.name}</p>
                                </div>    

                                <span>{p.quantity} u.</span>

                                <span>${format(p.price)}</span>

                            </li>

                        ) }

                        <div 
                            className="
                            text-black 
                            xl:text-2xl 
                            text-xl 
                            border-t-2 
                            border-black  
                            flex 
                            flex-row 
                            justify-between 
                            pt-5">

                            <span >TOTAL:</span>

                            <span >$ {format( Total() )}</span>

                        </div>

                    </Link>


                </div>

            </div>

        }    

    </div>)
                
}

export default Order