import * as UI from './interfaz.js';
import {API} from './api.js';
	UI.formulario.addEventListener('submit',(e)=>{
		e.preventDefault();
		const artista=document.querySelector('#artista').value,
		cancion=document.querySelector('#cancion').value;
		if(artista!==''&&cancion!==''){
			const api=new API(artista,cancion);
			api.consultarApi().then(datos=>{
				if(datos.datos.lyrics){
					const letra=datos.datos.lyrics;
					UI.divResultado.textContent=letra;
				}
				else{
					UI.divMensajes.innerHTML='La cancion no existe';
					UI.divMensajes.classList.add('error');
					setTimeout(()=>{
						UI.divMensajes.innerHTML='';
						UI.divMensajes.classList.remove('error');
					},3000);
				}
			});
		}
		else{
			UI.divMensajes.innerHTML='Todos los campos son obligatorios';
			UI.divMensajes.classList.add('error');
			setTimeout(()=>{
				UI.divMensajes.innerHTML='';
				UI.divMensajes.classList.remove('error');
			},3000);
		}
	});