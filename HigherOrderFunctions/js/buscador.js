import {autos} from './app.js';
// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
let datosBusqueda={
	marca:'',
	year:'',
	minimo:'',
	maximo:'',
	puertas:'',
	transmision:'',
	color:''
}
document.addEventListener('DOMContentLoaded',()=>{
	mostrarAutos(autos);
});

const marca=document.getElementById('marca');
marca.addEventListener('input',e=>{
	datosBusqueda.marca=e.target.value;
	filtrarAuto();
});
const year=document.getElementById('year');
year.addEventListener('input',e=>{
	datosBusqueda.year=Number(e.target.value);
	filtrarAuto();
});
const minimo=document.getElementById('minimo');
const maximo=document.getElementById('maximo');
minimo.addEventListener('input',e=>{
	datosBusqueda.minimo=Number(e.target.value);
	filtrarAuto();
});
maximo.addEventListener('input',e=>{
	datosBusqueda.maximo=Number(e.target.value);
	filtrarAuto();
});
const puertas=document.getElementById('puertas');
puertas.addEventListener('input',e=>{
	datosBusqueda.puertas=Number(e.target.value);
	filtrarAuto();
});
const transmision=document.getElementById('transmision');
transmision.addEventListener('input',e=>{
	datosBusqueda.transmision=e.target.value;
	filtrarAuto();
});
const color=document.getElementById('color');
color.addEventListener('input',e=>{
	datosBusqueda.color=e.target.value;
	filtrarAuto();
});
function mostrarAutos(autos){
	const contenedor=document.getElementById('resultado');
	while(contenedor.firstChild){
		contenedor.removeChild(contenedor.firstChild);
	}
	autos.forEach(auto=>{
		const autohtml=document.createElement('p');
		autohtml.innerHTML=`
			<p> ${auto.marca} - ${auto.year} - 
			${auto.puertas} puertas - Transmision: ${auto.transmision} 
			Precio: ${auto.precio} - Color: ${auto.color}</p>

		`;
		contenedor.appendChild(autohtml);
	});
}
function filtrarAuto(){
	const resultado=autos.filter(filtrarMarca)
	.filter(filtrarAnio).filter(filtrarMinimo)
	.filter(filtrarMaximo).filter(filtrarPuertas)
	.filter(filtrarTransmision).filter(filtrarColor);
	if(resultado.length){
		mostrarAutos(resultado);
	}
	else{
		noResultado();
	}
}
function filtrarMarca(auto){
	if(datosBusqueda.marca){
		return datosBusqueda.marca===auto.marca;
	}
	return auto;
}
function filtrarAnio(auto){
	if(datosBusqueda.year){
		return datosBusqueda.year===auto.year;
	}
	return auto;
}
function filtrarMinimo(auto){
	if(datosBusqueda.minimo){
		return auto.precio >=datosBusqueda.minimo;
	}
	return auto;
}
function filtrarMaximo(auto){
	if(datosBusqueda.maximo){
		return auto.precio<=datosBusqueda.maximo;
	}
	return auto;
}
function filtrarPuertas(auto){
	if(datosBusqueda.puertas){
		return auto.puertas===datosBusqueda.puertas;
	}
	return auto;
}
function filtrarTransmision(auto){
	if(datosBusqueda.transmision){
		return auto.transmision===datosBusqueda.transmision;
	}
	return auto;
}
function filtrarColor(auto){
	if(datosBusqueda.color){
		return auto.color===datosBusqueda.color;
	}
	return auto;
}
function noResultado(){
	const contenedor=document.getElementById('resultado');
	while(contenedor.firstChild){
		contenedor.removeChild(contenedor.firstChild);
	}
	const noResultado=document.createElement('div');
	noResultado.classList.add('alerta','error');
	noResultado.appendChild(document.createTextNode('No hay resultados'));
	contenedor.appendChild(noResultado);
}
/*
Aquaman
*/