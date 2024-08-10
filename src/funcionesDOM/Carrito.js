const unaCard = document.getElementById('contenedorDeCards');
const eventosCarrito = document.getElementById('items');
const footer = document.getElementById('footer');
const leerPlantillaCarrito = document.getElementById('template-carrito').content;//Leemos los elementos anidados en el template
const leerPlantillaFooterCarrito = document.getElementById('template-footer').content;
const crearemosFragmentoHTML = document.createDocumentFragment()
let carrito = {};

unaCard.addEventListener('click', event=>{agregarCarrito(event) });
eventosCarrito.addEventListener('click', event=> botonAumentaDisminuye(event) );

document.addEventListener('DOMContentLoaded',e=>{
    if(localStorage.getItem('carrito')){//Si el objeto local storage tenia objeto carrito 
		carrito = JSON.parse(localStorage.getItem('carrito'));//el carrito en fomrato JSON lo reconvertimos a JS...
		pintamosCarrito();//Y lo usamos para volver a pintar en HTML
	}
});

const agregarCarrito = unaCard =>{
	if(unaCard.target.classList.contains('soyCard')){//Si la card tiene una clase llamada 'soyCard'...
		console.log(unaCard.target.parentElement);
        //insertaCarrito(unaCard.target.parentElement);//Entonces llamamos a la función 'insertaCarrito' y mandamos de parametro el objeto HTML card
	}
	unaCard.stopPropagation();//Truncamos proceso
};
const insertaCarrito = item =>{
	const producto = {//Crearemos Objeto Local para asignar
		title: item.querySelector('h2').textContent,//el valor de cada clave será extraido de las Cards Insertadas en el HTML
		precio: item.querySelector('span').textContent,//item contiene el Componente HTML...
		id: item.querySelector('.soyCard').dataset.id,//de ahi por su tag extraera los textos cotenidos, de datos para el cobro
		cantidad: 1, //A esta ultima clave le asignamos simplemente 1
	};
	console.table(producto);
	if(carrito.hasOwnProperty(producto.id) ){//Si Carrito Ya tiene una Propiedad Producto con determinado ID, no debemos agregar sino incrementar
		producto.cantidad = carrito[producto.id].cantidad+1;//Entonces, al atributo cantidad de dicho producto, le asignamos el numero que Ya tenia en cantidad MÁS 1
	}
	carrito[producto.id] = {...producto};//Si NO existia, esta sentencia agrega el nuevo elemento al Arreglo de Objetos: si existia lo hace actualizado en cantidad
	//pintamosCarrito();
};
const pintamosCarrito =() =>{
	eventosCarrito.innerHTML = '';
	Object.values(carrito).forEach( producto=>{// Carrito es un objeto, que contiene productos, por cada producto...
		leerPlantillaCarrito.querySelector('th').textContent = producto.id;
		leerPlantillaCarrito.querySelectorAll('th')[0].textContent = producto.title;//el valor para cada clave sera leido o extraido del HTML
		leerPlantillaCarrito.querySelectorAll('th')[1] = producto.cantidad;
		leerPlantillaCarrito.querySelector('span').textContent = producto.precio * producto.cantidad; //Multiplicamo el precio Unitario por la cantidad para sutotal
		leerPlantillaCarrito.querySelector('.btn-info').dataset.id = producto.id;	//Al + para incrementar la cantidad de un producto le asociamos el 'id'
		leerPlantillaCarrito.querySelector('.btn-danger').dataset.id = producto.id;	//Al - para incrementar la cantidad de un producto le asociamos el 'id'
		console.log('entramos a pintar carrito');
		const clonar = leerPlantillaCarrito.cloneNode(true);
		crearemosFragmentoHTML.appendChild(clonar);
	});
	eventosCarrito.appendChild(crearemosFragmentoHTML);
	pintamosPieDeCarrito();
	localStorage.setItem('carrito', JSON.stringify(carrito) );//Ya tenemos productos que guardar, los asignamos a LocalSorage con 'setItem' en fomrato JSON
};	
const pintamosPieDeCarrito = () =>{//Buy Process; Global Buy Button
    footer.innerHTML = '';
    if(Object.keys(carrito).length===0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito Vacío</th>`
        return
	}
	const nCantidad=Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad,0);
    const nPrecio=Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0);
    leerPlantillaFooterCarrito.querySelectorAll('td')[0].textContent = nCantidad;
    leerPlantillaFooterCarrito.querySelector('span').textContent = nPrecio;
    
	const clone = leerPlantillaFooterCarrito.cloneNode(true);
    crearemosFragmentoHTML.appendChild(clone);
    footer.appendChild(crearemosFragmentoHTML);
};
const botonAumentaDisminuye = e =>{
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.idProducto];
        producto.cantidad++;
		carrito[e.target.dataset.idProducto] = {...producto};
        pintamosCarrito();
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.idProducto];
        producto.cantidad--;
        if(producto.cantidad===0){
            delete carrito[e.target.dataset.idProducto];
        }else{carrito[e.target.dataset.idProducto] = {...producto}}
        pintamosCarrito();
    }
    e.stopPropagation();
};
export default {agregarCarrito,botonAumentaDisminuye};