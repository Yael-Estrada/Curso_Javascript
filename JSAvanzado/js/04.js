/*
	Window Binding
*/
function obtenerAuto(){
	console.log(`Mi auto es color ${this.color}`);
}

const color='Negro';
window.color=color;
obtenerAuto();