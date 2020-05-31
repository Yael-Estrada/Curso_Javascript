document.getElementById('cargar').addEventListener('click',cargarDatos);
function cargarDatos(){
	//Crea el objeto XMLHttpRequest
	const xhr=new XMLHttpRequest();
	//Abrir una conexion
	xhr.open('GET','datos.txt',true);
	//Una vez que carga
	xhr.onreadystatechange=function(){
		//200:Correcto|403:Prohibido|404:Not Found
		if(this.readyState===4&&this.status===200){
			document.getElementById('listado').innerHTML= `<h1>${this.responseText}</h1>`;
		}
	}
	/*
		Ready Status
		0- No inicializado
		1- Conexion establecida
		2- Recibido
		3- Procesando
		4- Respuesta lista
	*/
	//Enviar el request
	xhr.send();
}