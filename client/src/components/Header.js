import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1><Link to={'/'} className='text-light'>RICK Y MORTY APP</Link></h1>

            </div>
            <Link to='/personaje/nuevo' className='btn btn-danger nuevo-post d-block d-md-inline-block'>Agregar Personaje &#43; </Link>

        </nav>
    </Fragment>
  )
}

export default Header