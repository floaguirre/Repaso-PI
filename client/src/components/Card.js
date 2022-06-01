import React from 'react'

function Card({personaje}) {

    const {id, image, name, origin, species, episodes} = personaje;

  return (
    <div>
        <div>
            <h2> {name} </h2>
            <img src={image} alt={`Imagen de ${name}`}></img>
            <p>{origin}</p>
            <p>{species}</p>
            
        </div>
    </div>
  )
}

export default Card