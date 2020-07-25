/*
	Composicion

*/
const obtenerNombre=(info)=>({
	mostrarNombre(){
		console.log('Nombre: '+info.nombre);
	}
});	
const guardarEmail=(info)=>({
	email(email){
		console.log('Guardando email en:'+info.nombre);
		info.email=email;
	}
});
const obtenerEmail=(info)=>({
	mostrarEmail(){
		console.log('Email: '+info.email);
	}
});
function Cliente(nombre, email, empresa){
	let info={
		nombre,
		email,
		empresa
	}
	return Object.assign(
		info,
		obtenerNombre(info),
		guardarEmail(info),
		obtenerEmail(info)
		)
}
function Empleado(nombre,email,puesto){
	let info={
		nombre,
		email,
		puesto
	}
	return Object.assign(
		info,
		obtenerNombre(info),
		guardarEmail(info),
		obtenerEmail(info)
		)
}

const cliente=Cliente('Juan');
cliente.mostrarNombre();
cliente.email='juan@gmail.com';
cliente.mostrarEmail();
const empleado=Empleado('Pedro');
empleado.mostrarNombre();
empleado.email='empleado@gmail.com';
empleado.mostrarEmail();