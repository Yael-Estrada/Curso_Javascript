function Playlist(nombre){
	this.nombre=nombre;
}
Playlist.prototype.play=function(){
	console.log('Reproduciendo la playlist '+this.nombre);
}
Playlist.prototype.eliminar=function(){
	console.log('Eliminando la playlist ');
}
const playlist=new Playlist('Rock 90s');

console.log(playlist);
playlist.play();

function Cancion(nombre,genero){
	Playlist.call(this,nombre);
	this.genero=genero;
}
Cancion.prototype=Object.create(Playlist.prototype);

const cancion=new Cancion('Nothing else matters','Heavy Metal');

cancion.play();