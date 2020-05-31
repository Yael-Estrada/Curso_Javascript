const selectAnio=document.getElementById('anio');
const maxYear=new Date().getFullYear(),minYear=maxYear-20;
const formulario=document.getElementById('cotizar-seguro');
function Seguro(marca,anio,tipo){
	this.marca=marca;
	this.anio=anio;
	this.tipo=tipo;

}
function Interfaz(){}
Interfaz.prototype.mostrarError=function(mensaje,tipo){
	const div=document.createElement('div');
	if(tipo==='error'){
		div.classList.add('mensaje','error');
	}
	else{
		div.classList.add('mensaje','correcto');
	}
	div.innerHTML=mensaje;
	formulario.insertBefore(div,document.querySelector('.form-group'));
	setTimeout(function(){
		document.querySelector('.mensaje').remove();
	},3000);
}
Interfaz.prototype.mostrarSeguro=function(cantidad,seguro){
	let div=document.getElementById('resultado');
	let marca;
	switch(seguro.marca){
		case '1': 
			marca='Americano';
			break;
		case '2':
			marca='Asiatico';
			break;
		case '3':
			marca='Europeo';
			break;
	}
	const div2=document.createElement('div');
	div2.innerHTML=`
		<p class='header'>Tu Seguro:</p>
		<p>Marca: ${marca}</p>
		<p>Anio: ${seguro.anio}</p>
		<p>Tipo: ${seguro.tipo}</p>
		<p>Total: ${cantidad}</p>
	`;
	const spinner=document.querySelector('#cargando img');
	spinner.style.display='block';
	setTimeout(function(){
		spinner.style.display='none';
		div.appendChild(div2);

	},3000);
	
}
Seguro.prototype.cotizarSeguro=function(){
	//1-Americano-1.15 2-Asiatico-1.05 3.Europeo-1.35
	let cantidad;
	const base=2000;
	switch(this.marca){
		case '1':
			cantidad=base*1.15;
			break;
		case '2':
			cantidad=base*1.05;
			break;
		case '3':
			cantidad=base*1.35;
			break;
	}
	const dif=maxYear-this.anio;
	cantidad-=((cantidad)*(dif*3))/100;
	if(this.tipo==='basico'){
		cantidad*=1.30;
	}
	else cantidad*=1.5;
	return cantidad;
}
cargarEventListeners();
function cargarEventListeners(){
	for(let i=maxYear;i>minYear;i--){
		let opt=document.createElement('option');
		opt.innerText=String(i);
		opt.value=i;
		selectAnio.appendChild(opt);
	}
	formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
	e.preventDefault();
	let marca= document.getElementById('marca');
	const marcaSel=marca.options[marca.selectedIndex].value;
	let yr=selectAnio.options[selectAnio.selectedIndex].value;
	const tipo=document.querySelector('input[name="tipo"]:checked').value;
	const interfaz=new Interfaz();
	if(marcaSel===''||yr===''||tipo===''){
		interfaz.mostrarError('Faltan datos, revise e intente de nuevo','error');
	}
	else{
		const resultados=document.querySelector('#resultado div');
		if(resultados!=null){
			resultados.remove();
		}
		const seguro=new Seguro(marcaSel,yr,tipo);
		const cantidad=seguro.cotizarSeguro();
		interfaz.mostrarSeguro(cantidad,seguro);
		interfaz.mostrarError("Cotizando...",'exito');
	}
}

/*
	class Seguro{
		constructor(marca,anio,tipo){
			this.marca=marca;
			this.anio=anio;
			this.tipo=tipo;
		}
		cotizarSeguro(){
			//1-Americano-1.15 2-Asiatico-1.05 3.Europeo-1.35
			let cantidad;
			const base=2000;
			switch(this.marca){
				case '1':
					cantidad=base*1.15;
					break;
				case '2':
					cantidad=base*1.05;
					break;
				case '3':
					cantidad=base*1.35;
					break;
			}
			const dif=maxYear-this.anio;
			cantidad-=((cantidad)*(dif*3))/100;
			if(this.tipo==='basico'){
				cantidad*=1.30;
			}
			else cantidad*=1.5;
			return cantidad;
		}
	}

class Interfaz{
		mostrarError(mensaje,tipo){
			const div=document.createElement('div');
			if(tipo==='error'){
				div.classList.add('mensaje','error');
			}
			else{
				div.classList.add('mensaje','correcto');
			}
			div.innerHTML=mensaje;
			formulario.insertBefore(div,document.querySelector('.form-group'));
			setTimeout(function(){
				document.querySelector('.mensaje').remove();
			},3000);
		}
		mostrarSeguro(cantidad,seguro){
			let div=document.getElementById('resultado');
			let marca;
			switch(seguro.marca){
				case '1': 
					marca='Americano';
					break;
				case '2':
					marca='Asiatico';
					break;
				case '3':
					marca='Europeo';
					break;
			}
			const div2=document.createElement('div');
			div2.innerHTML=`
				<p class='header'>Tu Seguro:</p>
				<p>Marca: ${marca}</p>
				<p>Anio: ${seguro.anio}</p>
				<p>Tipo: ${seguro.tipo}</p>
				<p>Total: ${cantidad}</p>
			`;
			const spinner=document.querySelector('#cargando img');
			spinner.style.display='block';
			setTimeout(function(){
				spinner.style.display='none';
				div.appendChild(div2);

			},3000);
			
		}
}
*/
