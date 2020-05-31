const btnEmpleado=document.getElementById('boton1');
const btnEmpleados=document.getElementById('boton2');

btnEmpleado.addEventListener('click',function(){
	const xhr=new XMLHttpRequest();
	xhr.open('GET','empleado.json',true);

	xhr.onload=function(){
		if(this.status===200){
			let obj=JSON.parse(this.responseText);
			console.log(obj);
			const html=`
				<ul>
					<li>${obj.id}</li>
					<li>${obj.nombre}</li>
					<li>${obj.empresa}</li>
					<li>${obj.trabajo}</li>
				</ul>
			`;
			document.getElementById('empleado').innerHTML=html;			
		}
	}
	xhr.send();
});
btnEmpleados.addEventListener('click',function(){
	const xhr=new XMLHttpRequest();
	xhr.open('GET','empleados.json',true);
	xhr.onload=function(){
		if(this.status===200){
			let obj=JSON.parse(this.responseText);
			let html='';
			obj.forEach(function(empleado){
				html+=`
				<ul>
					<li>${empleado.id}</li>
					<li>${empleado.nombre}</li>
					<li>${empleado.empresa}</li>
					<li>${empleado.trabajo}</li>
				</ul>
			`;
			});
			document.getElementById('empleados').innerHTML=html;			
		}
	}
	xhr.send();
});