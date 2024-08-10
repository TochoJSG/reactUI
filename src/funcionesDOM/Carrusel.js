const span = document.getElementsByClassName('.botonCar');//Obtenemos los 2 botones
let componente = document.getElementsByClassName('prod_car');//Obtenemos todos los Componentes
let product_page = Math.ceil(componente.length/4);
let desplazamiento = 0;
let longitud_desplazada_por_click = 33; //ira de 33 en 33 hasta llegar a 330, es dicir, con 20 clics llegaremos al maximo
let maxMove = 330;//este es el maximo	
	
const mover_derecha=()=>{	//Función flecha que mueve hacia la derecha
	console.log('clic ider');
	desplazamiento = desplazamiento+longitud_desplazada_por_click;//Este es el primer movimiento, inicia en posicion 0 y recorremos 33
	if(componente==1){
		desplazamiento = 0;
		}
	for(const i of componente){
		if(desplazamiento>maxMove){
			desplazamiento = desplazamiento - longitud_desplazada_por_click;
			}	
		i.style.left='-'+desplazamiento+'%';
	}
};
const mover_izquierda=()=>{	//Función flecha que mueve hacia la izquierda
	console.log('clic izq');
	desplazamiento = desplazamiento - longitud_desplazada_por_click;//esta instruccion mueve a la izquierda: Ubicación MENOS la constante de desplazamiento
	if(componente <= 1){
		desplazamiento = 0;
	}
	for(const i of componente){
		if(product_page>1){
			i.style.left = '-'+desplazamiento+'%';
		}
	}
};

//Mobile View
let mobile_view = window.matchMedia("(max-width:768px)");
if(mobile_view.matches){//opcion para portabilidad, se adpata al diferente tamaño de los mobiles
	longitud_desplazada_por_click = 50.36;
	maxMove = 330;//maxivo recorrido, de 25.5
}

module.exports = {mover_derecha,mover_izquierda}