import React from 'react';
import './App.css';
import NavMain from './componentes/NavMain.jsx';
import Carrito from './componentes/Carrito.jsx';
import ContCarru from './componentes/ContCarru';
import ContCards from './componentes/ContCards.jsx';
import Preferencias from './componentes/Preferencias.jsx';
function App() {  //esta estructura sera mostrada al usuario
  /*const carritoRef = React.createRef();
  const agregarCarrito = (producto) => {
    carritoRef.current.agregarCarrito(producto);
  };*/
  return (
    <div className="App">
      <NavMain nombreCIA="Comercializadora X" presentacion="Comercio Mayorista" />
      <section id="contenedorDeCards">
        <ContCarru marketing="Aprovecha descuentos del GranFin"/>
          <Carrito/>
        <ContCards/>
      </section>
      <Preferencias />
    </div>
  );
}

export default App;