//VERSION SIMPLE


/* import React, { useContext } from 'react'
import { useState } from 'react'
import {CarritoContext} from '../../context/CarritoContext'
import {db} from '../../services/config'
import {collection, addDoc} from "firebase/firestore"


const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)

    //funciones y validaciones:

    const manejadorFormulario =(evento) => {
        evento.preventDefault()
        //verificamos que los campos esten completos

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError ("Por favor completa todos los campos requeridos o moriras")
            return
        }
        //validamos que los campos del email coincidan

        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden, maldito insecto!! chequea que esten bien")
            return
        }

        //1) Creamos un objeto con todos los datos de la orden de compra:

        const orden = {
                items: carrito.map(producto => ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono, 
                email
        }

        //2) guardar la orden en la base de datos:
        addDoc(collection(db,"ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch(error => {
                console.log("Error al crear la orden de compra", error)
                setError("Se producjo un error al crear la orden de compra")
            })


    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                    </div>
                ))
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=> setTelefono(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
            </div>
            {
                error && <p style={{color: "red"}}>{error}</p>
            }


            <button type='submit'>Confirmar Compra</button>
            {
                ordenId && ( <strong> Gracias por tu compra!! tu numero de orden es: {ordenId}</strong>)
            }

        </form>


    </div>
  )
}

export default Checkout */



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from 'react'
import { useState } from 'react'
import {CarritoContext} from '../../context/CarritoContext'
import {db} from '../../services/config'
import {collection, addDoc, updateDoc, doc, getDoc} from "firebase/firestore"


const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)

    //funciones y validaciones:

    const manejadorFormulario =(evento) => {
        evento.preventDefault()
        //verificamos que los campos esten completos

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError ("Por favor completa todos los campos requeridos o moriras")
            return
        }
        //validamos que los campos del email coincidan

        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden, maldito insecto!! chequea que esten bien")
            return
        }

        //1) Creamos un objeto con todos los datos de la orden de compra:

        const orden = {
                items: carrito.map(producto => ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono, 
                email
        }

        //2) Vamos a modificar el codigo para que ejecture varias promesas en parelelo, por un lado que actulice el stock de productos y por el otro que genere una orden de compra
        //Utilizando Promise.all

        Promise.all(
            orden.items.map(async (productoOrden)=>{
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=> {

            addDoc(collection(db,"ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id)
                    vaciarCarrito()
                })
                .catch(error => {
                    console.log("Error al crear la orden de compra", error)
                    setError("Se producjo un error al crear la orden de compra")
                })
        })
        .catch((error)=> {
            console.log("No se pudo actualizar el stock", error)
            setError("No se puede actualizar el stock, intente en el supermecado Vital")
        })





    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                    </div>
                ))
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=> setTelefono(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
            </div>
            {
                error && <p style={{color: "red"}}>{error}</p>
            }


            <button type='submit'>Confirmar Compra</button>
            {
                ordenId && ( <strong> Gracias por tu compra!! tu numero de orden es: {ordenId}</strong>)
            }

        </form>


    </div>
  )
}

export default Checkout