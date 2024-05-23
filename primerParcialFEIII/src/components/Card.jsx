import React from 'react'
import Form from './Form'

const Card = ({informacion}) => {
  const { nombre, artista } = informacion;

  return (
    <div>
      <h4>Tu nombre es: {nombre} </h4>
      <h4>Y tu artista favorito es: {artista}</h4>
    </div>
  )
}

export default Card