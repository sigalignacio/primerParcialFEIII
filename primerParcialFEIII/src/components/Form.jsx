import React from 'react'
import { useState } from 'react'
import Card from './Card'
import ErrorMessage from './ErrorMessage';
import Styles from '../styles/Form.module.css'

const Form = () => {
    const [informacion, setInformacion] = useState({
        nombre: "",
        artista: "" 
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false)

    const nombreSinEspacios = /\s/.test(informacion.nombre)

    const handleSubmit = (event) => {
        event.preventDefault();

        if(informacion.nombre.length > 3 && informacion.artista.length > 6 && !nombreSinEspacios) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className={Styles.display}>
            <label>Ingrese su Nombre:</label>
            <input type="text" value={informacion.nombre}
            onChange={(event) =>
                setInformacion({...informacion, nombre: event.target.value })
            }
            />

            <label> Ingrese su Artista favorito:</label>
            <input type="text" value={informacion.artista} 
            onChange={(event) =>
                setInformacion({...informacion, artista: event.target.value})
            }
            />

            <button  className={Styles.button} type='submit'>Enviar</button>

        </form>

        {show ? <Card informacion={informacion}></Card> : null}
        {error ? <ErrorMessage></ErrorMessage> : null }
    </div>
  )
}

export default Form