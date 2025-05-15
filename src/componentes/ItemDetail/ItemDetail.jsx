import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

//Importamos CarritoContext
import { CarritoContext } from '../../context/CarritoContext'
//Importamos el Hook
import { useContext } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    //creamos una funcon manejadora de la cantidad:

    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
      console.log("Productos agregados:" + cantidad)
      //Ahora acá yo puedo crear un objeto con el item y la cantidad
      const item = {id,nombre,precio};
      agregarAlCarrito(item, cantidad)
      toast.success("Su compra fue enviada al carrito",{autoClose: 1000, theme: "dark", position: "top-right"})
    }



  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{descripcion}</p>
        {
          //Aca empleamos la lógica de montaje y desmontaje del contador

          agregarCantidad > 0 ?( <Link to="/cart"> Terminar Compra</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }

    </div>
  )
}

export default ItemDetail