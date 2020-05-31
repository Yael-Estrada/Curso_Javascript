//Variables
	const carrito=document.getElementById('carrito');
	const cursos=document.getElementById('lista-cursos');
	const listaCursos= document.querySelector('#lista-carrito tbody');
	const vaciarCarritoBtn=document.getElementById('vaciar-carrito');
//Listeners
cargarEventListeners();

function cargarEventListeners(){
	cursos.addEventListener('click',addToCart);
	listaCursos.addEventListener('click',borrarCurso);
	vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
	document.addEventListener('DOMContentLoaded',cargarCursosCarrito);
}
//Funciones

function addToCart(e){
	e.preventDefault();
	//Cuando presionamos agregar carrito, lee el curso seleccionado
	if(e.target.classList.contains('agregar-carrito')){
		const curso=e.target.parentElement.parentElement;
		leerDatosCurso(curso);
	}
}

function leerDatosCurso(curso){
	const infoCurso= {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id')
	}
	insertarCarrito(infoCurso);
}

//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
	const row= document.createElement('tr');
	row.innerHTML=`
		<td>
			<img src="${curso.imagen}" width=100>
		</td>
		<td>${curso.titulo}</td>
		<td>${curso.precio}</td>
		<td>
			<a href="#" class="borrar-curso" 
			data-id="${curso.id}">X</a>
		</td>
	`;
	listaCursos.appendChild(row);
	guardarCursoLocalStorage(curso);
}

function borrarCurso(e){
	e.preventDefault();
	let curso,cursoId;
	if(e.target.classList.contains('borrar-curso')){
		e.target.parentNode.parentNode.remove();
		curso=e.target.parentElement.parentElement;
		cursoId=curso.querySelector('a').getAttribute('data-id');
	}
	borrarCursoLocalStorage(cursoId);
}

function vaciarCarrito(e){
	e.preventDefault();
	//listaCursos.innerHTML='';
	while(listaCursos.firstChild){
		let curso=listaCursos.firstChild;
		borrarCursoLocalStorage(curso.querySelector('a').getAttribute('data-id'));
		listaCursos.removeChild(listaCursos.firstChild);
	}
}

function guardarCursoLocalStorage(curso){
	let cursos;
	cursos=obtenerCursosLocalStorage();
	cursos.push(curso);
	localStorage.setItem('Cursos',JSON.stringify(cursos));
}

function obtenerCursosLocalStorage(){
	let cursos;
	if(localStorage.getItem('Cursos')==null){
		cursos=[]
	}
	else{
		cursos=JSON.parse(localStorage.getItem('Cursos'));
	}
	return cursos;
}	

function cargarCursosCarrito(){
	let cursos=obtenerCursosLocalStorage();
	cursos.forEach(function(curso){
		const row= document.createElement('tr');
		row.innerHTML=`
		<td>
			<img src="${curso.imagen}" width=100>
		</td>
		<td>${curso.titulo}</td>
		<td>${curso.precio}</td>
		<td>
			<a href="#" class="borrar-curso" 
			data-id="${curso.id}">X</a>
		</td>
	`;
	listaCursos.appendChild(row);
	});
}

function borrarCursoLocalStorage(cursoid){
	let cursos=obtenerCursosLocalStorage();
	cursos.forEach(function(curso){
		if(curso.id==cursoid){
			console.log('Borrado el item: '+curso);
			let index=cursos.indexOf(curso);
			cursos.splice(index,1);
			localStorage.setItem('Cursos',JSON.stringify(cursos);
		}
	});
}