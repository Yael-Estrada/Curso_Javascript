class API{
	constructor(){
		this.api_key='HVQ2VMVTE2EYBG6IYW';
		this.token_priv='MLDKI467WIWJT43MCXSD';
		this.token_pub='M3DTDIEEEVK3HSFRPYMG';
		this.ordenar='date';
	}
	async getCategories(){
		//Consulta las categorias a la REST API de event brite
		const respuesta=await fetch('https://www.eventbriteapi.com/v3/categories/?token='+this.token_priv);		
		const categorias=await respuesta.json();
		return categorias;
	}
	async getEvents(evento,categoria){
		const result=await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_priv}`);
		const events=await result.json();
		return events;
	}
}