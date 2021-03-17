import React, { useState } from 'react'
import { store } from '../firebaseConfig'



const Agendar = () => {

    const[name, setName] = useState('')
    const[phone,setPhone] = useState('')
    const[error, setError] = useState(null)
    const[dispName, setDispName] = useState(null)
    const[dispPhone, setDispPhone] = useState(null)

    const Agendar = (e) =>{
        e.preventDefault()
        setError(null)
        if(name.trim()==''){
            setError("Ingresar un nombre pro favor")
        }
        if(phone.trim()==''){
            setError('Por favor ingresar un numero de telefono')
        }

        setDispName('')//variable secundaria para mostrar en el display y que se reinicie con el enviar
        setDispPhone('')//variable secundaria para mostrar en el display y que se reinicie con el enviar   

        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <h2>Agendar contacto</h2>
                    <input
                        onChange={(e)=>{setName(e.target.value);
                                        setDispName(e.target.value)}}
                        className="form-control mt-3"
                        placeholder="Insertar Nombre"
                        value={dispName}
                        />
                    <input
                        onChange={(e)=>{setPhone(e.target.value);
                                        setDispPhone(e.target.value)}}
                        className="form-control mt-3"
                        placeholder="Insertar Numero"
                        value={dispPhone}
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