import React, { useState, useEffect } from 'react'
import { store } from '../firebaseConfig'



const Agendar =  () => {

    const[name, setName] = useState('')
    const[phone,setPhone] = useState('')
    const[error, setError] = useState(null)
    const[dispName, setDispName] = useState('')
    const[dispPhone, setDispPhone] = useState('')
    const[OKName, setOKName]=useState('')
    const[userAgendados, getUserAgendados]=useState([])
    

    useEffect(()=>{
            const getUsuarios = async()=>{
                const {docs} = await store.collection('Agenda').get() //await genera un hilo independiente que se ejecuta paralelo al resto de la aplicacion, cuando este termina se almacena en 'docs'
                const arrayUsuarios = docs.map( item => ({id:item.id,...item.data()}))
                getUserAgendados(arrayUsuarios)
            }
            getUsuarios()
        },[])
    

    const AgendarCont = async (e) =>{
        e.preventDefault()
        setError(null)
               
        
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
            
        }catch(er){
            console.log(er);
        }
        
        setDispName('')//variable secundaria para mostrar en el display y que se reinicie con el enviar
        setDispPhone('')//variable secundaria para mostrar en el display y que se reinicie con el enviar   
        setOKName(name)
        
        
                
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
                    <h2>Contactos Agendados</h2><button >Actualizar</button>
                    {
                        userAgendados.length!==0 ?
                        ( 
                            userAgendados.map(item=>(
                                <ul className="list-group list-group-horizontal pr-4 ">
                                    <li className="list-group-item rp-4"  key={item.id}>
                                        {item.nombre}
                                    </li>
                                    <li className="list-group-item"  key={item.id}>
                                        {item.telefono}
                                    </li>   
                                </ul>
                            ))
                        )
                        :
                        (
                            <span>
                                No hay usuarios agendados
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Agendar