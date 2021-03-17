import React, { useState } from 'react'
import {auth} from '../firebaseConfig' //auth es una libreria para registrar ususarios en firebase
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [mensajeErr, setMensajeErr] = useState(null) //lo defino como null para poder usar operador ternario para el mensaje de error
    const [mensajeLog, setMensajeLog] = useState(null)

    const RegistrarUser = (e) =>{
        e.preventDefault() //Para que el submit no recarge la pagina
        auth.createUserWithEmailAndPassword(email, pass)//esto es una solicitud que se hace a firebse para cargar un usuario nuevo
            .then (r=> setMensajeErr('Usuario registrado')) //then es una promesa, si todo sale bien se carga lo que esta entre parentesis, esto pasa cuando hay un delay de carga de datos como aca que tiene que esperar una respuesta desde firebase
            .catch (e=>{//el catch es como llo contrario al then y es una solucion cuando aparecen errores de carga, en este caso dos errores (mail incorrecto y contrasena mala)
                 // code: "auth/invalid-email" es el atributo de error de mail invalido (atributo del evento submit, se puede ver en la consola del navegador como un error)
                //code: "auth/weak-password", lo mismoque lo anterior pero para contrasena muy corta 
                if (e.code === 'auth/invalid-email'){
                    // alert('El mail es incorrecto')
                    setMensajeErr('Mail incorrecto')

                }
                if (e.code ==='auth/weak-password'){
                    // alert('clave muy debil')
                    setMensajeErr('Clave muy corta')
                }
            })        
    }

    const LoguearUsuario = (e) =>{
        auth.signInWithEmailAndPassword(email,pass)
            .then((r)=>{setMensajeLog('Sesion Iniciada')})
            .catch(
                // ERRORES: code: "auth/user-not-found"
                //         message: "There is no user record corresponding to this identifier.

                //         code: "auth/wrong-password"
                //         message: "The password is invalid or the user does not have a passwo
                (e)=>{
                    if (e.code === 'auth/user-not-found'){
                        setMensajeLog('Usuario no registrado')
                    }
                    if (e.code === 'auth/wrong-password'){
                        setMensajeLog('Contrasena incorrecta')
                    }
                }         

            )
    }

    return(
        <div className='row'>
            <div className="col"></div>
            <div className="col">
                <form className="form-group"
                    onSubmit={RegistrarUser}>
                    <input 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="form-control mb-3 mt-3"
                        placeholder="ingresar mail"
                        type="text"/>
                    <input
                        onChange={(e)=>{setPass(e.target.value)}}
                        className="form-control mb-3" 
                        placeholder="ingresar la password"
                        type="password"/>
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-block"
                        onClick={LoguearUsuario}
                        >
                            Iniciar Sesion
                        </button>
                    <input 
                        type="submit" 
                        className="btn btn-dark btn-block"
                        value="Registrar"
                        
                        />
                    
                </form>
                
                    {
                        mensajeErr !== null ? //si este elemento NO ES NULO muestra lo de abajo                         
                        (
                            mensajeErr === 'Usuario registrado'? //aca si el mensaje es 'usuario registrado' se muestra el cartel verde, si no el cartel rojo
                            (
                                <div className="alert alert-success">
                                    {mensajeErr}
                                </div> 
                            )
                            :
                            (
                                <div className="alert alert-danger">
                                    {mensajeErr}
                                </div> 
                            )                            
                        )
                        :
                        ('')
                    }

                    {
                        mensajeLog !== null ? //si este elemento NO ES NULO muestra lo de abajo                         
                        (
                            mensajeLog === 'Sesion Iniciada'? //aca si el mensaje es 'usuario registrado' se muestra el cartel verde, si no el cartel rojo
                            (
                                <div className="alert alert-primary">
                                    {mensajeLog}
                                </div> 
                            )
                            :
                            (
                                <div className="alert alert-danger">
                                    {mensajeLog}
                                </div> 
                            )                            
                        )
                        :
                        ('')

                    }
                
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login