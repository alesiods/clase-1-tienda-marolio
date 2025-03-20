import React from 'react'


const TituloPrincipal = ({saludo, producto}) => {

    console.log(producto)

    const {precio} = producto


  return (
    <>
    <h1>{saludo}</h1>
    <h2>{precio}</h2>
    </>
  )
}

export default TituloPrincipal