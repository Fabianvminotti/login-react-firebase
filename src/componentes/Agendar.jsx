import React, { useState } from 'react'
import { store } from '../firebaseConfig'



const Agendar =  () => {

    const[name, setName] = useState('')
    const[phone,setPhone] = useState('')
    const[error, setError] = useState(null)
    const[dispName, setDispName] = useState('')
    const[dispPhone, setDispPhone] = useState('')
    const[OKName, setOKName]=useState('')
    

    const AgendarCont = async (e) =>{
        e.preventDefault()
        setError(null)
        // setName(dispName) //seteo el name a travez de dispName para que se muestre en el display (dispNAme) y para que el name quede definido de una vez para luego enviarlo a la base de datos externa 
        setPhone(dispPhone)
        
        
        if(dispName.trim()===''){
            setError("Ingresar un nombre pro favor")
        }
        else if(dispPhone.trim()===''){
            setError('Por favor ingresar un numero de telefono')
        }
        else {
            setError('Agendado')
        }


        const addUser = {
            nombre:name,
            telefono:phone
        }

        try{
            const data = await store.collection('Agenda').add(addUser);
            console.log('tarea completada co exito');
            console.log(name);
            console.log(phone);
        }catch(er){
            console.log(er);
        }





        
        setDispName('')//variable secundaria para mostrar en el display y que se reinicie con el enviar
        setDispPhone('')//variable secundaria para mostrar en el display y que se reinicie con el enviar   
        setOKName(name)
        
        console.log(name);
        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <h2>Agendar contacto</h2>
                    <input
                        onChange={(e)=>{//setName(e.target.value);
                                        setDispName(e.target.value)
                                        setName(dispName)}}
                        className="form-control mt-3"
                        placeholder="Insertar Nombre"
                        value={dispName}
                        />
                    <input
                        onChange={(e)=>{//setPhone(e.target.value);
                                        setDispPhone(e.target.value)
                                        setPhone(dispPhone)}}
                        className="form-control mt-3"
                        placeholder="Insertar Numero"
                        value={dispPhone}
                        />
                    <input 
                        onClick={AgendarCont}
                        type="submit"
                        className="btn btn-dark btn-block mt-3"
                        value={"Agendar"}
                    />
                    {
                        error ? //esto es para que si error no existe no muestre nada y si existe muestre lo corerspondiente  su contenido
                        (
                            
                                error ==='Agendado' ?
                                (
                                    <div className="alert alert-success mt-3" role="alert">
                                        {OKName} ha sido agendado
                                    </div>
                                )
                                :
                                (
                                    <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                                )
                            
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