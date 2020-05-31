const ui=new UI();
document.addEventListener('DOMContentLoaded',()=>{
	ui.mostrarEstablecimientos();
});
const buscador=document.querySelector('#buscar input');
buscador.addEventListener('input',()=>{
	const busqueda=buscador.value;
	if(busqueda.length>5){
		ui.obtenerSugerencias(busqueda);
	}
	else{
		ui.mostrarEstablecimientos();
	}
});