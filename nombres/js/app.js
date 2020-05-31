formulario=document.getElementById('generar-nombre');
formulario.addEventListener('submit',generarNombres);

function generarNombres(e){
	e.preventDefault();
	const result=document.getElementById('resultado');
	const xhr=new XMLHttpRequest();
	let html='<ul class="lista">';
	const pais=document.querySelector('#origen');
	const paisSel=pais.options[origen.selectedIndex].value;
	const gender=document.getElementById('genero');
	const genderSel=gender.options[gender.selectedIndex].value;
	const num=document.getElementById('numero').value;
	let url='https://randomuser.me/api/?';
	if(paisSel!==''){
		url+=`nat=${paisSel}&`;
	}
	if(genderSel!==''){
		url+=`gender=${genderSel}&`;
	}
	url+=`results=${num}`;
	console.log(url);
	xhr.open('GET',url,true);
	xhr.onload=function(){
		let array=JSON.parse(this.responseText);
		array.results.forEach(function(obj){
			html+=`
				<li>${obj.name.first}</li>
			`;
		});
		html+='</ul>';
		result.innerHTML=html;
	}
	xhr.send();
}