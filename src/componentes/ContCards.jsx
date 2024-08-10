import '../estilos/Productos.css';
import Cards from '../componentes/Cards';
import CarruselData from '../funcionesDOM/CarruselData';
const ContCards = ()=>{
    const items = CarruselData('ml');
    return(
        <div id="Cards" className="cardsGral">
        {
            items.map((item,index)=>(
                <Cards key={index} title={item.title} precio={item.precio} imagen={require(`../img/${item.imBase}`)}/>
            ))
        }
        </div>
    );
};
export default ContCards;