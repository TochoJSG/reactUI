import React from 'react';
import PropTypes from 'prop-types';
import '../estilos/Carrito.css';
import CardCarr from './CardCarr.jsx';
import CarruselData from '../funcionesDOM/CarruselData';

const items = CarruselData('amazon');  // Aquí se obtiene la lista de productos filtrados
const CardsCar = () =>{
  return(
    <div id="carrusel-gral">            
      {
      items.map((item, index) =>(      //parametro item accede a elementos del registro, index servirá para iterar
        <CardCarr key={index} 
				id={item.id} 
				title={item.title} 
				precio={item.precio}  
				imagen={require(`../img/${item.imBase}`)}/>
      ))
      }
    </div>
  );
};
/*CardsCar.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          precio: PropTypes.number.isRequired,
      })
  ).isRequired,
};*/
export default CardsCar;