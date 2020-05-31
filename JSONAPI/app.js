//Se usara la API JSONPlaceholder
//Fake online REST API for Testing and Prototyping

btnCargar=document.getElementById('cargar');

btnCargar.addEventListener('click',function(){
	const xhr=new XMLHttpRequest();
	xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
	console.log("presed");
	xhr.onload=function(){
		if(this.status===200){
			let array=JSON.parse(this.responseText);
			let html='';
			array.forEach(function(post){
				html+=`
						<h3>${post.title}</h3>
						<p>${post.body}</p>
				`;
			});
			document.getElementById('listado').innerHTML=html;
		}
	}
	xhr.send();
});