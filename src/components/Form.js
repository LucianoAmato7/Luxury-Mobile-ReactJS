

const Form = ( { FormFn } ) => {

    const { SendOrder, setName, setEmail, setPhone, setAddres } = FormFn

    return (

        <div className="flex flex-col mt-24 justify-between lg:ml-60 text-black text-xl p-10 w-2/5 text-center bg-blue-800 bg-opacity-50 rounded-3xl shadow-2xl">

            <h2 className="text-black lg:text-2xl md:text-xl mb-6">
                ¡ Completa el formulario para finalizar la compra !
            </h2>

            <form onSubmit={  (e) => { SendOrder(e) } }>

                <label className="mb-5 flex flex-col text-justify">
                    Nombre y Apellido
                    <input onChange={ (e) => { setName( e.target.value ) } } type="text" className="form-control border rounded-lg p-1 mt-3" placeholder="Ingrese su nombre completo" required/>
                </label>

                <label className="mb-5 flex flex-col text-justify">
                    Correo electrónico
                    <input onChange={ (e) => { setEmail( e.target.value ) } } type="email" className="form-control border rounded-lg p-1 mt-3" placeholder="Ingrese su correo electrónico" required/>
                </label>

                <label className="mb-5 flex flex-col text-justify">
                    Número de celular
                    <input onChange={ (e) => { setPhone( e.target.value ) } } type="number" className="form-control border rounded-lg p-1 mt-3" placeholder="11 1234-5678" required/>
                </label>

                <label className="mb-5 flex flex-col text-justify">
                    Dirección de envío
                    <input onChange={ (e) => { setAddres( e.target.value ) } } type="text" className="form-control border rounded-lg p-1 mt-3" placeholder="Ingrese su localidad y dirección" required/>
                </label>

                <div className="flex justify-content-between">

                    <button className="hover:scale-110 text-4xl text-black border-black p-3 m-5 rounded-lg bg-blue-400 drop-shadow-lg">
                        COMPRAR
                    </button>

                </div>

            </form>

        </div>

    )
} 

export default Form