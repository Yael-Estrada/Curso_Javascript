//Variables

const listaTweets=document.getElementById('lista-tweets');
cargarTweets();
//Event Listeners
eventListeners();

function eventListeners(){
	//Cuando se envia el formulario
	document.getElementById('formulario')
	.addEventListener('submit',agregarTweet);
	
	//Borrar tweets DELEGATION
	listaTweets.addEventListener('click',borrarTweet);
}

//Funciones

//Agregar tweet a lista
function agregarTweet(e){
	e.preventDefault();
	//Leer valor del textArea
	const tweet=document.getElementById('tweet').value;
	//Boton de borrar
	const botonBorrar=document.createElement('a');
	//botonBorrar.addEventListener('click',borrarTweet);
	botonBorrar.classList.add('borrar-tweet');
	botonBorrar.textContent='X';

	//Crear elemento y añadirlo a la lista
	const li=document.createElement('li');
	li.innerText=tweet;
	//Añade el boton de borrar al tweet
	li.appendChild(botonBorrar);
	listaTweets.appendChild(li);

	//Agregar a local storage
	addToLocalStorage(tweet);
	document.getElementById('tweet').value='';
}

//Borrar un tweet
function borrarTweet(e){
	e.preventDefault();
	if(e.target.classList.contains('borrar-tweet')){
		e.target.parentNode.remove();
	}
	deleteFromLocalStorage(e.target.parentNode.textContent);
}

//Agrega un tweet a local storage
function addToLocalStorage(tweet){
	let tweets;
	tweets=obtenerTweetsLocalStorage();
	tweets.push(tweet);
	localStorage.setItem('tweets',JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage(){
	let tweets;
	
	if(localStorage.getItem('tweets')==null){
		tweets=[];
	}
	else{
		tweets=JSON.parse(localStorage.getItem('tweets'));
	}
	return tweets;
}

function deleteFromLocalStorage(tweet){
	let tweets;
	tweet=tweet.substring(0,tweet.length-1);
	if(localStorage.getItem('tweets')!=null){
		console.log('Borrando tweet '+ tweet);
		tweets=JSON.parse(localStorage.getItem('tweets'));
		let index=tweets.indexOf(tweet);
		tweets.splice(index,1);
	    localStorage.setItem('tweets',JSON.stringify(tweets));
	}
}

function cargarTweets(){
	let tweets;
	tweets=obtenerTweetsLocalStorage();
	tweets.forEach(function(tweet){
		const botonBorrar=document.createElement('a');
		botonBorrar.classList.add('borrar-tweet');
		botonBorrar.textContent='X';

		//Crear elemento y añadirlo a la lista
		const li=document.createElement('li');
		li.innerText=tweet;
		//Añade el boton de borrar al tweet
		li.appendChild(botonBorrar);
		listaTweets.appendChild(li);
	});
}