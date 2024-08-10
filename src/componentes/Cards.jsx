import '../estilos/Productos.css';
function Cards(props){
	return(
    <div className='boxRGB'>
		<div className='imgBxRGB'>
			<div className='imgBx'>
				<img src={props.imagen} alt='loading...'/>
			</div>
		</div>
		<div className='contentRGB'>
			<h2>{props.title}
				</h2>
			<span>{props.precio}
				</span>
			<button id={props.id} className='soyCard' type='button'>Carrito
				</button>
		</div>
	</div>
	);
}
export default Cards;