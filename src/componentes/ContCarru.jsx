import PropTypes from 'prop-types';
import '../estilos/CarruselMain.css';
import CardsCar from './CardsCar.jsx';
import { useState } from 'react';

function ContCarru(props) {
    const [desplazamiento, setDesplazamiento] = useState(0);//Este es un Hook
    const longitud_desplazada_por_click = window.matchMedia("(max-width:768px)").matches ? 50.36 : 33;
    const maxMove = 330;
    
    const mover_derecha = () => {
        const nuevoDesplazamiento = Math.min(desplazamiento + longitud_desplazada_por_click, maxMove);
        setDesplazamiento(nuevoDesplazamiento);
    };

    const mover_izquierda = () => {
        const nuevoDesplazamiento = Math.max(desplazamiento - longitud_desplazada_por_click, 0);
        setDesplazamiento(nuevoDesplazamiento);
    };

    return (
        <div className="carouselMain">
            <div className="main">
                <div className="encabezados_carrusel">
                    <div className="controles">
                        <p>
                            <span onClick={mover_izquierda}> &#139; </span>
                            <span onClick={mover_derecha}> &#155; </span>
                        </p>
                    </div>
                    
                    <div className="texto_car">
                        <h3>{props.marketing}</h3>
                    </div>
                </div>
                <div className="seccion" style={{ left: `-${desplazamiento}%` }}>
                    <CardsCar />
                </div>
            </div>
        </div>
    );
}
/*CardCarr.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
        })
    ), //).isRequired
};*/
export default ContCarru;
