/*
	Builder Pattern
	Similar a factory, se crea como una abstraccion
	Crear una abstraccion que nos va a permitir crear distintos tipos de objeto
	*Es usado para permitir la creacion de una variedad de objetos complejos
	desde un objeto fuente(Producto), el objeto fuente se compone de una variedad de
	partes que contribuyen individualmente a la creacion de cada objeto complejo
	mediante un conjunto de llamadas secuenciales a una implementacion específica que extienda
	la clase AbstractBuilder
*/

class Formulario{
	constructor(){
		this.campos=[]
	}
	agregarCampo(tipo,texto){
		let campos=this.campos;
		let campo;
		switch(tipo){
			case "text":
				campo=new InputText(texto);
				break;
			case "email":
				campo=new InputEmail(texto);
				break;
			case "button":
				campo=new InputButton(texto);
				break;
			default:
				throw new Error("Tipo no valido:"+tipo);
		}
		campos.push(campo);
	}
	obtenerFormulario(){
		let form=document.createElement('form');
		let campos=this.campos.length,
		campo;
		for(let i=0;i<campos;i++){
			campo=this.campos[i];
			form.appendChild(campo.crearElemento());
			let br=document.createElement('br');
			form.appendChild(br);
		}
		return form;
	}
}

class Inputs{
	constructor(texto){
		this.texto=texto;
	}
}
class InputText extends Inputs{
	constructor(texto){
		super(texto);
	}
	crearElemento(){
		const inputText=document.createElement('input');
		inputText.setAttribute('type','text');
		inputText.setAttribute('placeholder',this.texto);
		return inputText;
	}
}
class InputEmail extends Inputs{
	constructor(texto){
		super(texto);
	}
	crearElemento(){
		const inputText=document.createElement('input');
		inputText.setAttribute('type','email');
		inputText.setAttribute('placeholder',this.texto);
		return inputText;
	}
}
class InputButton extends Inputs{
	constructor(texto){
		super(texto);
	}
	crearElemento(){
		const inputText=document.createElement('input');
		inputText.setAttribute('type','submit');
		inputText.textContent=this.texto;
		return inputText;
	}
}

const formulario=new Formulario();
formulario.agregarCampo('text','Añade tu nombre');
formulario.agregarCampo('text','Agrega tu apellido');
formulario.agregarCampo('email','Añade tu email');
formulario.agregarCampo('button','Enviar');
console.log(formulario);
document.addEventListener('DOMContentLoaded',()=>{
	document.querySelector('#app').appendChild(formulario.obtenerFormulario());
});