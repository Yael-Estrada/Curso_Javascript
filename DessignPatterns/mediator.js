/*
	Mediator Pattern
	Variable del observer, define objetos ya localizados
	para un objetivo especifico.
	Define un objeto que encapsula como un conjunto de objetos interactuan
	La comunicacion entre objetos es encapsulada con un objeto mediador,
	los objetos no se comunican de forma directa sino mediante un mediador.
*/
const vendedor=function(nombre){
	this.nombre=nombre;
	this.sala=null;
}
const comprador=function(nombre){
	this.nombre=nombre;
	this.sala=null;
}
vendedor.prototype={
	oferta: function(articulo,precio){
		console.log('Tenemos el siguiente articulo: '+articulo+" iniciamos en:"+precio)
	},
	vendido: function(comprador){
		console.log('Vendido a: '+comprador);
	}
}

comprador.prototype={
	oferta: function(mensaje,comprador){
		console.log(`${comprador.nombre} : ${mensaje}`);
	}
}

const Subasta=function(){
	let compradores={};
	return{
		registrar: function(usuario){
			compradores[usuario.nombre]=usuario;
			usuario.sala=this;
		}
	}
}

const juan=new comprador('Juan');
const pablo=new comprador('Pablo');
const karen=new comprador('Karen');
const vende=new vendedor('Vendedor');
console.log(juan);
const subasta=new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);
console.log(subasta);
vende.oferta('Mustang 1966',300);
juan.oferta(3500,juan);
pablo.oferta(4000,pablo);
karen.oferta(1000,karen);
vende.vendido(karen.nombre);