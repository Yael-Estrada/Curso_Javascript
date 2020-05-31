const api=new API();
const ui=new Interface();
const buscarBtn=document.getElementById('buscarBtn');
buscarBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	//Leer entrada
	const texto=document.getElementById('evento').value;
	const listaCat=document.getElementById('listado-categorias');
	const categoria=listaCat.options[listaCat.selectedIndex].value;
	if(texto!=='')
		buscarEvento(texto,categoria);
	else
		ui.showMessage('Escribe algo en el buscador','alert alert-danger nt-4');
});

function buscarEvento(texto,categoria){
	const listEvents=api.getEvents(texto,categoria)
	.then(resultado=>{
		console.log(resultado);
	});
}
