import React, {useEffect, useState} from 'react'
import Personajes from './Personajes'

import { useDispatch, useSelector } from "react-redux";

import {cargarPersonajesAction, cargarEpisodiosAction} from '../redux/actions'


function Home() {

  


  

  const dispatch = useDispatch();

  const cargarEpisodios = useSelector(state => state.episodiosCargados);
  

  useEffect(() => {
    if(!cargarEpisodios){
      const cargarEpisodios = () => dispatch(cargarEpisodiosAction());
      cargarEpisodios();
    }
    const cargarPersonajes = () => dispatch(cargarPersonajesAction());
    cargarPersonajes();
    

  }, [], cargarEpisodios)

  

  

  

  return (
    <div>
      <Personajes />
    </div>
  )
}

export default Home