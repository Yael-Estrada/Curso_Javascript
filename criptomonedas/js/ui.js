class Interface{
	constructor(){
		this.init();
	}
	init(){
		this.buildSelect();
	}
	showMessage(msg,type){
		const resultAnterior=document.querySelector('#resultado > div');
		if(resultAnterior)
			resultAnterior.remove();
		const div=document.createElement('div');
		div.className=type;
		div.appendChild(document.createTextNode(msg));
		document.querySelector('.mensajes').appendChild(div);
		setTimeout(()=>{
			document.querySelector('.mensajes div').remove();
		},3000);
	}
	buildSelect(){
		const select=document.getElementById('criptomoneda');
		api.getAllCoins().then(monedas=>{
			for(const[key,value] of Object.entries(monedas.monedas.Data)){
				const option=document.createElement('option');
				option.value=value.Symbol;
				option.appendChild(document.createTextNode(value.CoinName));
				select.appendChild(option);	
			}
		});
	}
	printResult(resultado,moneda,cripto){
		const resultAnterior=document.querySelector('#resultado > div');
		if(resultAnterior)
			resultAnterior.remove();
		const datosMoneda=resultado[cripto][moneda];
		let precio=Number(datosMoneda.PRICE.split(' ')[1].replace(',','')).toFixed(2),porcentaje=Number(datosMoneda.CHANGEPCTDAY).toFixed(2);
		let temphtml=`
			<div class="card bg-warning">
				<div class="card-body text-light">
					<h2 class="card-title">Resultado:</h2>
					<p>El precio de: ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
					<p>Variacion ultimo dia: % ${porcentaje}</p>
					<p>Ultima actualizacion: ${datosMoneda.LASTUPDATE}</p>
				</div>
			</div>
		`;
		this.mostrarSpinner('block');
		setTimeout(()=>{
			document.getElementById('resultado').innerHTML=temphtml;
			this.mostrarSpinner('none');
		},3000);
	}
	mostrarSpinner(vista){
		const spinner=document.querySelector('.contenido-spinner');
		spinner.style.display=vista;
	}
}