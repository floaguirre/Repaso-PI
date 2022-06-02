import React, {useEffect} from 'react'
import Card from './Card'

import {useSelector, useDispatch} from 'react-redux';

import {cargarPersonajesAction} from '../redux/actions';

function Personajes() {

  const dispatch = useDispatch();

  

  useEffect(() => {

    const cargarPersonajes = () => dispatch(cargarPersonajesAction());
    cargarPersonajes();

  },[])

  const personajes = useSelector(state => state.personajes);
  const loading = useSelector(state => state.loading);


  return (
    <div className='container'>
    <div className='row mt-5'>
      {personajes.length === 0 ? 'No hay personajes' : (
        personajes.map(personaje => (
          <Card 
            key={personaje.id}
            personaje={personaje}
          />
        ))

      )}
    </div>
    </div>
  )
}

export default Personajes