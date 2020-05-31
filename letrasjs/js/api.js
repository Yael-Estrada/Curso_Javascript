export class API{
	constructor(artista,cancion){
		this.artista=artista;
		this.cancion=cancion;
	}
	async consultarApi(){
		const res=await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
		const datos=await res.json();
		return{
			datos
		}
	}
}