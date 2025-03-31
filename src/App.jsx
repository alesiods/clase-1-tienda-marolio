import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './componentes/Boton/Boton'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {

  function saludo() {
  console.log("Hola chicos")
 }

 saludo()

 let cantidad = 30

 let colorFondo = {backgroundColor: "green"} 

 const celular = {
  marca: "Samsung",
  precio: 500.000
 }

  return (
    <>
      {/* <h1 className='colorFondoPrincipal'> HOLA CHICOS, BIENVENIDOS. En la clase de hoy somos {cantidad} </h1>
      <h2 style={colorFondo}>Hola Mundo</h2>
      <h3 style={{color:"blue"}}> Aguante Riiiiact</h3>
      <section>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non enim at magni debitis! Obcaecati voluptas laboriosam commodi possimus dolorem, deserunt a doloribus id vitae quia, laborum tempora adipisci soluta.</p>
        <div></div>
      </section>
      <Boton/>
      <Boton/>
      <Boton/>
      <Boton/> */}
      {/* <TituloPrincipal saludo= "Hola Comisión asdasdas" producto= {celular}/> */}
      {/* <ItemCount stock={15}/>
      <ItemCount stock={10}/>
      <ItemCount stock={5}/> */}
      <NavBar/>
      <ItemListContainer/>
    </>
    
    
)
}

export default App
