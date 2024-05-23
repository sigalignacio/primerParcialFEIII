import React from 'react'
import Styles from '../styles/ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={Styles.errorMsg}> Por favor chequea que la información sea correcta.</div>
  )
}

export default ErrorMessage