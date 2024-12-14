//import React from 'react'
import PropTypes from 'prop-types'

const Title = ({title, subtitle}) => {
    if(!title){
        throw new Error("El titulo es obligatorio")
      }

  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </>
  )
};

//instalar prop types para validar las propiedades:
Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }

export default Title