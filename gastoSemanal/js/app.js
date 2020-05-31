//Variables
const presupuestoSemanal=prompt('Cual es tu presupuesto semanal?');
let cantidadPrespuesto;
const formulario=document.getElementById('agregar-gasto');
//Clases
class Presupuesto{
	constructor(cantidad){
		this.presupuesto=Number(cantidad);
		this.restante=Number(cantidad);
	}
	presupuestoRestante(cantidad=0){
		return this.restante-=Number(cantidad);
	}
}

class Interfaz{
	insertarPresupuesto(cantidad){
		const presSpan=document.querySelector('span#total');
		const restSpan=document.querySelector('span#restante');
		presSpan.innerHTML=`${cantidad}`;
		restSpan.innerHTML=`${cantidad}`;
	}
	imprimirMensaje(mensaje,tipo){
		const divMsj=document.createElement('div');
		divMsj.classList.add('text-center','alert');
		switch(tipo){
			case 'error':
				divMsj.classList.add('alert-danger');
				break;
			case 'success':
				divMsj.classList.add('alert-success');
				break;
		}
		divMsj.appendChild(document.createTextNode(mensaje));
		document.querySelector('.primario').insertBefore(divMsj,formulario);
		setTimeout(function(){
			document.querySelector('.primario .alert').remove();
			formulario.reset();
		},3000);
	}
	agregarGastoListado(nombre,cantidad){
		let li=document.createElement('li');
		const gastos=document.querySelector('#gastos ul');
		li.className='list-group-item d-flex justify-content-between align-items-center';
		li.innerHTML=`
		${nombre} 
		<span class="badge badge-primary badge-pill"> $ ${cantidad}</span>`;
		gastos.appendChild(li);
	}
	presupuestoRestante(cantidad){
		let rest=cantidadPrespuesto.presupuestoRestante(cantidad);
		const restSpan=document.querySelector('span#restante');
		restSpan.innerHTML=`${rest}`;
		this.comprobarPresupuesto();
	}
	comprobarPresupuesto(){
		const presupuesto=cantidadPrespuesto.presupuesto;
		const restante=cantidadPrespuesto.restante;
		if(restante<(presupuesto/4)){
			const rest=document.querySelector('.restante');
			rest.classList.remove('alert-success','alert-warning');
			rest.classList.add('alert-danger');
		}
		else{
			if(restante<(presupuesto/2)){
				const rest=document.querySelector('.restante');	
				rest.classList.remove('alert-success');
				rest.classList.add('alert-warning');
			}
		}
	}
}

//Event Listeners
document.addEventListener('DOMContentLoaded',function(){
	if(presupuestoSemanal==null||presupuestoSemanal==''){
		window.location.reload();
	}else{
		cantidadPrespuesto=new Presupuesto(presupuestoSemanal);
		let interfaz=new Interfaz();
		interfaz.insertarPresupuesto(cantidadPrespuesto.presupuesto);
	}

});
formulario.addEventListener('submit',function(e){
	e.preventDefault();
	const nombreGasto=document.querySelector('#gasto').value;
	const cantidadGasto=document.querySelector('#cantidad').value;
	let interfaz=new Interfaz();
	if(nombreGasto==''||cantidadGasto==''){
		interfaz.imprimirMensaje('Hubo un error','error');
	}
	else{
		interfaz.imprimirMensaje('Agregado','success');
		interfaz.agregarGastoListado(nombreGasto,cantidadGasto);
		interfaz.presupuestoRestante(cantidadGasto);
	}
	
});