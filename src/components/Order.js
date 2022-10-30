import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
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
                
                <div className="flex flex-row">

                    <Form FormFn={ FormFn }  />

                        
                    <Link to='/cart' className="shadow-2xl hover:scale-110 self-center flex flex-col mt-5 justify-between lg:mr-60 lg:ml-20 text-black text-xl p-7 w-2/5 h-min text-center bg-black bg-opacity-25 rounded-3xl">

                        { cart.map( p =>  
                            
                            <li key={p.img} className="flex flex-row justify-between text-black text-lg items-center">
    
                                <img src={p.img} alt={p.name} className='w-1/6'/>

                                <div className="flex flex-col">
                                    <p className="text-xl"> <strong> {p.brand} </strong> </p>
                                    <p>{p.name}</p>
                                </div>    

                                <span className="text-xl">${format(p.price)}</span>

                            </li>

                        ) }

                        <div className="text-black text-2xl border-t-2 border-black mt-5 flex flex-row justify-between pt-5">

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