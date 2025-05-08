// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-udKtFUIy-02XA83lOn-IaS9yx1fl2cc",
  authDomain: "final-75910.firebaseapp.com",
  projectId: "final-75910",
  storageBucket: "final-75910.firebasestorage.app",
  messagingSenderId: "844487784837",
  appId: "1:844487784837:web:e94226465edec8a1db6cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)



///////////////////////////////////////////

//PARA SUBIRLO AUTOMATICAMENTE
/* const misProductos = [
    {  nombre: "Yerba", stock:240, precio: 500, img: "../img/yerba.jpg", idCat: "lacteos" },
    {  nombre: "Fideos", stock:240, precio: 200, img: "../img/fideos.jpg", idCat: "lacteos" },
    {  nombre: "Arroz", stock:360, precio: 300, img: "../img/arroz.jpg", idCat: "almacen" },
    {  nombre: "Aceite", stock:120, precio: 900, img: "../img/aceite.jpg", idCat: "almacen" },
  ]
  
  import { collection, doc, writeBatch } from "firebase/firestore"; 
  
  const subirProductos = async () => {
    const batch = writeBatch(db); // Crear un batch
    const productosRef = collection(db, "productos"); // Referencia a la colección
  
    // Recorre el array de productos
    misProductos.forEach((producto) => {
      const nuevoDoc = doc(productosRef); // Crea un nuevo documento con un ID automático
      batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
    });
  
    // Ejecuta el batch
    try {
      await batch.commit();
      console.log("Productos subidos exitosamente");
    } catch (error) {
      console.error("Error subiendo productos: ", error);
    }
  };

  subirProductos() */