const email=document.getElementById('email');
const asunto=document.getElementById('asunto');
const mensaje=document.getElementById('mensaje');
const btnEnviar=document.getElementById('enviar');
const btnReset=document.getElementById('resetBtn');
const formularioEnviar=document.getElementById('enviar-mail');
cargarEventListeners();

function cargarEventListeners(){
	document.addEventListener('DOMContentLoaded',inicioApp);
	asunto.addEventListener('blur',validarCampo);
	email.addEventListener('blur',validarCampo);
	mensaje.addEventListener('blur',validarCampo);
	btnEnviar.addEventListener('click',enviarEmail);
	resetBtn.addEventListener('click',resetFormulario);
}


function inicioApp(){
	//Deshabilita boton enviar
	btnEnviar.disabled=true;
}

function validarCampo(){

	validarLongitud(this);
	//validar email
	if(this.type==='email'){
		validarEmail(this);
	}
	let errores =document.querySelectorAll('.error');
	if(errores.length===0&&email.value!=''&&asunto.value!=''&&mensaje.value!=''){
		btnEnviar.disabled=false;
	}
}

function validarLongitud(campo){
	if(campo.value.length>0){
		campo.style.borderBottomColor='green';
		campo.classList.remove('error');
	}
	else{
		campo.style.borderBottomColor='red';
		campo.classList.add('error');
	}
}
function validarEmail(campo){
	const mensaje=campo.value;
	if(mensaje.indexOf('@')!=-1){
		campo.style.borderBottomColor='green';
		campo.classList.remove('error');
	}
	else{
		campo.style.borderBottomColor='red';
		campo.classList.add('error');
	}
}

function enviarEmail(e){
	const spinnergif=document.querySelector('#spinner');
	spinnergif.style.display='block';

	const enviado=document.createElement('img');
	enviado.src='img/mail.gif';
	enviado.style.display='block';

	setTimeout(function(){
		spinnergif.style.display='none';
		document.querySelector('#loaders').appendChild(enviado);
		setTimeout(function(){
			enviado.remove();
			formularioEnviar.reset();
		},5000);
	},3000);
	e.preventDefault();
}

function resetFormulario(e){
	e.preventDefault();
	formularioEnviar.reset();
}