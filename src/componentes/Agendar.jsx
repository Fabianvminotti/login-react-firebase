import React, { useState } from 'react'



const Agendar = () => {

    const[name, setName] = useState('')
    const[phone,setPhone] = useState('')
    const[error, setError] = useState(null)

    const Agendar = (e) =>{
        e.preventDefault()
        setError(null)
        if(name.trim()==''){
            setError("Ingresar un nombre pro favor")
        }
        if(phone.trim()==''){
            setError('Por favor ingresar un numero de telefono')
        }
        // if(phone.trim()!=='' && name.trim()==''){
        //     setName('')
        //     setPhone('')
        // }

        


    }

    return(
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <h2>Agendar contacto</h2>
                    <input
                        onChange={(e)=>setName(e.target.value)}
                        className="form-control mt-3"
                        placeholder="Insertar Nombre"
                        value={name}
                        />
                    <input
                        onChange={(e)=>setPhone(e.target.value)}
                        className="form-control mt-3"
                        placeholder="Insertar Numero"
                        value={phone}
                        />
                    <input 
                        onClick={Agendar}
                        type="submit"
                        className="btn btn-dark btn-block mt-3"
                        value={"Agendar"}
                    />
                    {
                        error ?
                        (
                            <div class="alert alert-danger mt-3" role="alert">
                                {error}
                            </div>
                        )
                        :
                        (
                            <span></span>
                        )
                    }
                </div>

                <div className="col p-5">
                    <h2>Contactos Agendados</h2>
                </div>
            </div>
        </div>
    )
}

export default Agendar