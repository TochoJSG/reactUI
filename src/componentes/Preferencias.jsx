import React from 'react';
import '../estilos/Preferencias.css';
function Preferencias(){
    return(
    <section id="navegacion" className="navegacionMain">
        <div className="navegacionContenido">
            <div id="main"><a target="_self" href="index.html">
                <img className="imgMenu" src="img/navegar.png" alt="loading..."/></a></div>
            <div id="swipear"><a target="_self" href="swipear.html">
                <img className="imgMenu" src="img/swippear.png" alt="loading..."/></a></div>
            <div id="contacto"><a target="_self" href="contacto.html">
                <img className="imgMenu" src="img/chat.png" alt="loading..."/></a></div>
            <div id="preferencias"><a target="_self" href="config.html">
                <img className="imgMenu" src="img/config.png" alt="loading..."/></a></div>
        </div>
    </section>
    );
}
export default Preferencias;