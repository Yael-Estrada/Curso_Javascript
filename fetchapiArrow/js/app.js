document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBTN').addEventListener('click',cargarAPI);
function cargarTXT(){
	fetch('datos.txt').then(res=>res.text())
	.then(data=> document.getElementById('resultado').innerHTML=data)
	.catch(error=>console.log(error));
}

function cargarJSON(){
	fetch('empleados.json').then(res=>res.json())
	.then(data => {
		let html='';
		data.forEach(function(empleado){
			html+=`
				<li>${empleado.nombre} ${empleado.puesto}</li>
			`;
		});
		document.getElementById('resultado').innerHTML=html;
	}).catch(error=>console.log(error));
}

function cargarAPI(){
	fetch('https://picsum.photos/list').then(res=>res.json())
	.then(data => {
		let html='';
		console.log(data);
		data.forEach(function(dato){
			html+=`
				<li>
					<a target="_blank" href="${dato.post_url}">Ver Imagen</a>
					${dato.author}
				</li>
			`;
		});
		document.getElementById('resultado').innerHTML=html;
	}).catch(error=>console.log(error));
}