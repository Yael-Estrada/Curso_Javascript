function persona(nombre){
	console.log('Hola soy '+nombre);
}

persona('Juan');

//This con implicit binding

const usuario={
	nombre: 'Juan',
	edad: 20,
	presentacion(){
		console.log(`Hola minombre es ${this.nombre} y tengo ${this.edad}`);
	},
	mascota:{
		nombre:'Hook',
		edad:1,
		presentacion(){
			console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
		}
	}
}

usuario.presentacion();
usuario.mascota.presentacion();