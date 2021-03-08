import React from 'react'
import{Link} from 'react-router-dom'
import boostrap from 'bootstrap/dist/css/bootstrap.min.css'

const Menu = () => {
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                </ul>
            </nav>
        </div>
    )
}

export default Menu