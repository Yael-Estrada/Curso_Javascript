//4f752ff1b29bf0e0ac04432bb32a151011a7397a0bc4551fd7bd88d7d97c2c7b
class API{
	constructor(apikey){
		this.apikey=apikey;
	}
	async getAllCoins(){
		const url=`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
		const urlGet=await fetch(url);
		const monedas=await urlGet.json();
		return {monedas};
	}
	async conversion(from,to){
		const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${from}&tsyms=${to}&api_key=${this.apikey}`
		const urlGet=await fetch(url);
		const converted=await urlGet.json();
		return converted;
	}
}