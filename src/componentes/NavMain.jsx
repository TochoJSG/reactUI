import React from 'react';
import '../estilos/NavMain.css';
import '../funcionesDOM/navToggle.js';
function NavMain(props){
    return(
        <header id="main-header">
		<a className="logo" href="index.html">
		<img src="logo.jpg"/></a>
		<a id="logo-header" href="index.html">
			<span className="site-name">{props.nombreCIA}</span>
			<span className="site-desc">{props.presentacion}</span>
		</a>
		<nav>
			<div className="inputBox">
				<input className="busqueda" type="text" placeholder="Que estas buscando?"/><input type="submit" value="Buscar"/>
			
			<div className="navigation">
				<div className="toggle">
					<span></span></div>
				<ul>
					<li><a href="#">Categoria</a></li>
					<li><a href="#">Sector</a></li>
					<li><a href="#">Condicion</a></li>
					<li><a href="#">Puntuacion</a></li>
				</ul>
			</div></div>
		</nav>
	</header>
    );
}
export default NavMain;