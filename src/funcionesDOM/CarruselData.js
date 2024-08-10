const productos = require('../data/Productos.json');

const CarruselData = (criterio) => {
    return productos.filter(producto => producto.plataforma === criterio);
};
export default CarruselData;