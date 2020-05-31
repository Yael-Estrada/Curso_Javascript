const formulario=document.getElementById('formulario');
const api=new API('4f752ff1b29bf0e0ac04432bb32a151011a7397a0bc4551fd7bd88d7d97c2c7b');
const ui=new Interface();
formulario.addEventListener('submit',(e)=>{
	e.preventDefault();
	const moneda=document.getElementById('moneda');
	const monedaSel=moneda.options[moneda.selectedIndex].value;
	const cripto=document.getElementById('criptomoneda');
	const criptoSel=cripto.options[cripto.selectedIndex].value;
	if(monedaSel!==''&&criptoSel!==''){
		cotizarMoneda(monedaSel,criptoSel);
	}
	else{
		ui.showMessage('Ambos campos son obligatorios','alert bg-danger text-center');
	}
});

function cotizarMoneda(moneda,cripto){
	api.conversion(cripto,moneda)
	.then(conversion=>{
		if(conversion.Response=='Error'){
			ui.showMessage('La informacion de esta criptomoneda no esta disponible, intente con otra ','alert bg-danger text-center')
		}
		else
			ui.printResult(conversion.DISPLAY,moneda,cripto);
	}).catch(error=>console.log('Error:'+error));
}