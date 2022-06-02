import React from 'react'

function Card({personaje}) {

    const {id, image, name, origen, species, episodes} = personaje;

  return (
    <div className='col-md-4 mb-3 mt-5'>
        <div className='card'>
            <h2 className='card-header'> {name} </h2>
            <img className='card-img-top' src={image} alt={`Imagen de ${name}`}></img>
            <p>{origen}</p>
            <p>{species}</p>
            
            
        </div>
    </div>
  )
}

export default Card