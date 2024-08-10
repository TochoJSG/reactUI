import '../estilos/CarruselMain.css';
function CardCarr(props){  
        return(
            <div className="prod_car">
                <picture>
                    <div className="imgBx">
                    <img src={props.imagen} alt="loading..." />
                    </div>
                </picture>
                <div className="details_car">
                    <h2>{props.title}
                        </h2>
                    <span>${props.precio}
                        </span>
                    <a id={props.id} type="button">Carrito
                        </a>
                </div>
            </div>
        );
}
export default CardCarr;