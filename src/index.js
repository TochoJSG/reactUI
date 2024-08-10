import React from 'react';
import ReactDOM from 'react-dom/client';  //importamos paquete react-dom
import './index.css';
import App from './App';  //importamos el archivo que contine la(s) estructuras a mostrar al usuario

const root = ReactDOM.createRoot(document.getElementById('root'));//obtenemos la raiz del documento por su id para renderizar ahí...
root.render(    //sobre 'root', que obtuvimos, renderizaremos
  <React.StrictMode>
    <App />
  </React.StrictMode>
);