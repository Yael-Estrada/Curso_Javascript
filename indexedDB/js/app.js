let DB;
const form=document.querySelector('form'),
nombreMascota=document.getElementById('mascota'),
nombreCliente=document.getElementById('cliente'),
telefono=document.getElementById('telefono'),
fecha=document.getElementById('fecha'),
hora=document.getElementById('hora'),
sintomas=document.getElementById('sintomas'),
citas=document.getElementById('citas'),
headingAdmin=document.getElementById('administra');
//Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded',()=>{
	let crearDB=window.indexedDB.open('citas',1);
	crearDB.onerror=()=>{
		console.log('Hubo un error al crear la BD');
	}
	crearDB.onsuccess=()=>{
		console.log('DB creada!');
		DB=crearDB.result;
		mostrarCitas();
	}
	crearDB.onupgradeneeded=(e)=>{
		let db=e.target.result;
		let objectStore=db.createObjectStore('citas',{keyPath: 'key', autoIncrement: true});
		objectStore.createIndex('mascota','mascota',{unique: false});
		objectStore.createIndex('cliente','cliente',{unique:false});	
		objectStore.createIndex('telefono','telefono',{unique:false});	
		objectStore.createIndex('fecha','fecha',{unique:false});	
		objectStore.createIndex('hora','hora',{unique:false});	
		objectStore.createIndex('sintomas','sintomas',{unique:false});	
	}

});

form.addEventListener('submit',agregarDatos);
function agregarDatos(e){
	e.preventDefault();
	const nuevaCita={
		mascota:nombreMascota.value,
		cliente:nombreCliente.value,
		telefono:telefono.value,
		fecha: fecha.value,
		hora: hora.value,
		sintomas: sintomas.value
	};
	let transaction=DB.transaction(['citas'],'readwrite');
	let objectStore=transaction.objectStore('citas');
	let peticion=objectStore.add(nuevaCita);
	peticion.onsuccess=()=>{
		form.reset();
	}
	transaction.oncomplete=()=>{
		console.log('Cita agregada');
		mostrarCitas();
	}
	transaction.onerror=()=>{
		console.log('Error en la transaccion');
	}
}

function mostrarCitas(){
	while(citas.firstChild){
		citas.removeChild(citas.firstChild);
	}
	let objectStore=DB.transaction('citas').objectStore('citas');
	objectStore.openCursor().onsuccess=(e)=>{
		let cursor=e.target.result;
		if(cursor){
			let citaHTML=document.createElement('li');
			citaHTML.setAttribute('data-cita-id',cursor.value.key);
			citaHTML.classList.add('list-group-item');
			citaHTML.innerHTML=`
				<p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
				<p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
				<p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
				<p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
				<p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
				<p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>				
			`;
			const botonBorrar=document.createElement('button');
			botonBorrar.classList.add('borrar','btn','btn-danger');
			botonBorrar.innerHTML='<span aria-hidden="true">x</span> Borrar';
			botonBorrar.onclick=borrarCita;
			citaHTML.appendChild(botonBorrar);
			citas.appendChild(citaHTML);
			cursor.continue();
		}
		else{
			if(!citas.firstChild){
				headingAdmin.textContent='Agrega citas para comenzar';
				let listado=document.createElement('p');
				listado.classList.add('text-center');
				listado.textContent='No hay registros';
				citas.appendChild(listado);
			}
			else{
				headingAdmin.textContent='Administra tus citas';
			}
		}
	}
}

function borrarCita(e){
	let citaID=Number(e.target.parentElement.getAttribute('data-cita-id'));
	let transaction=DB.transaction(['citas'],'readwrite');
	let objectStore=transaction.objectStore('citas');
	let peticion=objectStore.delete(citaID);
	transaction.oncomplete=()=>{
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
		console.log('Se elimino la cita con id:'+citaID);
		mostrarCitas();
	}
}

