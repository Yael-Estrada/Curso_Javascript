class Interface{
	constructor(){ 
		this.init();
		this.listado=document.getElementById('resultado-eventos');
	}
	init(){
		this.printCategories();
	}
	printCategories(){
		const listaCategorias=api.getCategories()
		.then(result=>{
			const categorias=result.categories;
			const selectCategoria=document.getElementById('listado-categorias');
			categorias.forEach(cat=>{
				const option=document.createElement('option');
				option.value=cat.id;
				option.appendChild(document.createTextNode(cat.name_localized));
				selectCategoria.appendChild(option);
				setTimeout(()=>this.cleanMessage(),3000);
			})
		});
	}
	cleanMessage(){
		const alert=document.querySelector('.alert');
		if(alert)
			alert.remove();
	}
	showMessage(msj,tipo){
		const div=document.createElement('div');
		div.classList=tipo;
		div.appendChild(document.createTextNode(msj));
		document.getElementById('buscador').appendChild(div);
	}
}