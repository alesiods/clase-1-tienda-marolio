import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit ducimus consequuntur magni id ratione quas quod nobis, ad, assumenda sequi corrupti, doloremque perferendis placeat quidem eum. Distinctio, harum at.</p>


    </div>
  )
}

export default ItemDetail