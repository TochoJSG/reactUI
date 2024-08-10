import '../estilos/Carrito.css';
import React, { useState, useEffect } from 'react';
import ListaProductos from '../componentes/ListaProductos';
const Carrito = () => {
  const [carrito, setCarrito] = useState({});
  
  useEffect(() => {
    const carritoLocal = localStorage.getItem('carrito');
    if (carritoLocal) {
      setCarrito(JSON.parse(carritoLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const newCarrito = { ...prevCarrito };
      if (newCarrito.hasOwnProperty(producto.id)) {
        newCarrito[producto.id].cantidad += 1;
      } else {
        newCarrito[producto.id] = { ...producto, cantidad: 1 };
      }
      return newCarrito;
    });
  };

  const modificarCantidad = (id, delta) => {
    setCarrito(prevCarrito => {
      const newCarrito = { ...prevCarrito };
      if (newCarrito[id]) {
        newCarrito[id].cantidad += delta;
        if (newCarrito[id].cantidad <= 0) {
          delete newCarrito[id];
        }
      }
      return newCarrito;
    });
  };

  const pintarCarrito = () => {
    return Object.values(carrito).map(producto => (
      <tr key={producto.id}>
        <th>{producto.id}</th>
        <td>{producto.title}</td>
        <td>{producto.cantidad}</td>
        <td>
          <button onClick={() => modificarCantidad(producto.id, 1)} className="btn btn-info">+</button>
          <button onClick={() => modificarCantidad(producto.id, -1)} className="btn btn-danger">-</button>
        </td>
        <td>{producto.precio * producto.cantidad}</td>
      </tr>
    ));
  };

  const pintarPieDeCarrito = () => {
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);
    return (
      <tr>
        <td colSpan="2">Total</td>
        <td>{nCantidad}</td>
        <td colSpan="2">{nPrecio}</td>
      </tr>
    );
  };

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>#</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Acción</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody id="items">
        {pintarCarrito()}
      </tbody>
      <tfoot id="footer">
        {Object.keys(carrito).length === 0 ? (
          <tr>
            <th scope="row" colSpan="5">Comienza a comprar!!! =D</th>
          </tr>
        ) : (
          pintarPieDeCarrito()
        )}
      </tfoot>
    </table>
  );
};

export default Carrito;
