import React from 'react';
import '../estilos/Carrito.css';
const ListaProductos = ({ productos, agregarCarrito }) => {
  return (
    <div className="contenedorDeCards">
      {productos.map(producto => (
        <div key={producto.id} className="card soyCard" onClick={() => agregarCarrito(producto)}>
          <h2>{producto.title}</h2>
          <span>{producto.precio}</span>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
