import React ,{useEffect, useState} from 'react'
import{Link} from 'react-router-dom'
import boostrap from 'bootstrap/dist/css/bootstrap.min.css'
import { auth } from '../firebaseConfig'

const Menu = () => {

    const [usuario,setUsuario] = useState(null)
    useEffect( ()=>{ //useEffect genera una ccion una vez se haya terminado de ejecutar el render
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsuario(user.email)
            }
        })
    },[])

    const CerrarSesion = ()=>{
        auth.signOut()
        setUsuario(null)
    }



    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <nav>
                <ul className='navbar-nav mr-auto'>
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className='nav-link'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/admin' className='nav-link'>Admin</Link>
                    </li>
                    {
                    usuario?
                    (<li className="nav-item">
                         <Link to='/agendar' className='nav-link'>Agendar contacto</Link>
                        
                        
                        </li>)
                    :
                    (
                        <span></span>
                    )
                }
                </ul>
                {
                    usuario?
                    (<button
                        onClick={CerrarSesion}
                        className="d-inline btn btn-danger "
                    >Cerrar sesion</button>)
                    :
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>
    )
}

export default Menu