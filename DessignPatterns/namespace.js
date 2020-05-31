/*
	Namespace
	La idea es que puedas darle un nombre unico a tu aplicacion
	Es decir, todo lo que creas es al rededor del namespace.
*/

const restaurApp={}
restaurApp.platillos=[
	{
		platillo:'Pizza',
		precio:25
	},
	{
		platillo:'Hamburguesa',
		precio:30
	},
	{
		platillo:'Pasta',
		precio:40
	}
];

restaurApp.funciones={
	ordenar: id=>{
		console.log(`
			Se esta preparando ${restaurApp.platillos[id].platillo}
			`);
	},
	agregarPlatillo: (platillo,precio) =>{
		const nuevo={
			platillo,
			precio
		}
		restaurApp.platillos.push(nuevo);
	},
	mostrarMenu:platillos=>{
		console.log(`Bienvenido a nuestro menu:`);
		platillos.forEach((platillo,index)=>{
			console.log(`${index}:${platillo.platillo} $${platillo.precio}`)
		});
	}
}
console.log(restaurApp);
const {platillos}=restaurApp;
restaurApp.funciones.ordenar(2);
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.agregarPlatillo('Pastel',50);
const {plat}=restaurApp;
restaurApp.funciones.mostrarMenu(platillos);