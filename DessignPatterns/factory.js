/* FACTORY PATTERN
	Ayuda a crear objetos que son de tipo similar pero que no sabes
	cual vas a utilizar, la ejecucion del programa decide que tipo utilizar.
	Consiste en utilizar una clase constructora abstracta con unos cuantos metodos
	definidos  otros abstractos: el dedidaco a la construccion de objetos de un subtipo
	de un tipo determinado.
*/

function constructorSitios(){
	this.crearElemento=function(texto,tipo){
		let html;
		if(tipo=='input'){
			html=new InputHTML(texto);
		}
		else if(tipo=='img'){
			html=new ImagenHTML(texto);
		}
		else if(tipo=='h1'){
			html=new HeadingHTML(texto);
		}
		else if(tipo=='p'){
			html=new ParrafoHTML(texto);
		}
		html.tipo=tipo;
		html.mostrar=function(){
			const elem=document.createElement(this.tipo);
			if(this.tipo=='input'){
				elem.setAttribute('placeholder',this.texto);
			}
			else if(this.tipo=='img'){
				elem.setAttribute('src',this.texto);
			}
			else{
				elem.appendChild(document.createTextNode(this.texto));
			}
			document.getElementById('app').appendChild(elem);
		}
		return html;
	}

}
const HeadingHTML=function(texto){
	this.texto=texto;
}
const InputHTML=function(texto){
	this.texto=texto;
}
const ImagenHTML=function(texto){
	this.texto=texto;
}
const ParrafoHTML=function(texto){
	this.texto=texto;
}

const sitioweb=new constructorSitios();
const elementosWeb=[];
elementosWeb.push(sitioweb.crearElemento('Bienvenidos','h1'));
elementosWeb.push(sitioweb.crearElemento('Bienvenidos a mi sitio','p'));
elementosWeb.push(sitioweb.crearElemento('logo.svg','img'));
elementosWeb.push(sitioweb.crearElemento('Contacto','input'));
console.log(sitioweb);
elementosWeb.forEach(elem=>{
	elem.mostrar();
});