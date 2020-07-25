/*
	This con explicit Binding con call
	Si pasas un arreglo, debes colocar todas las posiciones
*/

function persona(el1,el2){
	console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`);
}

const informacion={
	nombre:'Juan',
	trabajo: 'Programador'
}
const generosMusicales=['Pop','Bachata'];
persona.call(informacion,generosMusicales[0],generosMusicales[1]);

/*
	This con explicit binding con apply
*/

persona.apply(informacion,generosMusicales);

/*
	con .bind
*/
const nuevaFn=persona.bind(informacion,generosMusicales[0],generosMusicales[1]);
nuevaFn();