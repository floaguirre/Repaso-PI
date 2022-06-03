import React, {useEffect} from 'react'
import Card from './Card'

import {useSelector} from 'react-redux';



function Personajes() {

  

  const personajes = useSelector(state => state.personajes);
  const loading = useSelector(state => state.loading);
  
  


  return (
    <div className='container'>
      	<div className='row mt-5'>
          {loading ? <h1>Cargando...</h1>: (
            personajes.length === 0 ? 'No hay personajes' : (
              personajes.map(personaje => (
                <Card 
                  key={personaje.id}
                  personaje={personaje}
                />
              ))
  
            )

          )}
          
        </div>
    </div>
  )
}

export default Personajes