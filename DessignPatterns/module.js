/*  MODULE PATTERN
	Es una forma de crear variables privadas y publicas 
	en tus objetos
	Consiste en proporcionar las caracteristicas y estructura
	sintactida a lenguajes de programacion que no son compatibles o a medias.
	Ej. Javascript no acepta variables public y private
*/

const comprarBoleto=(function(){
	//Privado
	let evento='EXPO SEXO';
	const adquirirBoleto=()=>{
		const elemento=document.createElement('p');
		elemento.textContent=`Comprando boleto para: ${evento}`;
		document.getElementById('app').appendChild(elemento);
	}
	//Publico
	return{
		mostrarBoleto: function(){
			adquirirBoleto();
		}
	}
})();

comprarBoleto.mostrarBoleto();