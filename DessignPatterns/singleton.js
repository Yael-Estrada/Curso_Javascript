/*
	Singleton
	Define la creacion de un objeto que solo tiene una instancia.
	Ej. Un object literal
	Permite restringir la creacion de objetos pertenecientes a una
	clase o el valor de un tipo a un unico objeto.
	Garantiza que una clase solo tenga una instancia y proporciona un punto de acceso
	global a ella.
*/

const alumnos={
	listaAlumnos:[],

	get:function(id){
		console.log(id);
		return this.listaAlumnos[id];
	},

	crear: function(datos){
		console.log(datos);
		this.listaAlumnos.push(datos);
	},

	listado: function(){
		return this.listaAlumnos;
	}
}
const alumno1={
	nombre: 'Juan',
	edad: 20
}
const alumno2={
	nombre: 'Pablo',
	edad:21
}
alumnos.crear(alumno1);
alumnos.crear(alumno2);
const listado=alumnos.listado();
console.log(listado);
console.log(alumnos.get(1));