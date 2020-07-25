/* Clases y Prototypes */
/*
function Playlist(nombre){
	this.nombre=nombre;
}
Playlist.prototype.play=function(){
	console.log('Reproduciendo la playlist '+this.nombre);
}
const playlist=new Playlist('Rock 90s');

console.log(playlist);
playlist.play();

*/
class Playlist{
	constructor(nombre){
		this.nombre=nombre;
	}
	play(){
		console.log('Reproduciendo la playlist '+this.nombre);
	}
}

const playlist=new Playlist('Rock 90s');

console.log(playlist);
playlist.play();