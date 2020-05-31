
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables

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
     // Código de FETCH API AQUI
     fetch(url).then(res=>res.json())
     .then(data=>{
          let html='<h2>Nombres generados</h2>';
          html+='<ul class="lista">';
          console.log(data);
          data.results.forEach(nombre=>{
               html+=`
                    <li> ${nombre.name.first}</li>
               `;
          });
          html+='</ul>';
          document.getElementById('resultado').innerHTML=html;
     }).catch(error=> console.log(error));
     
}    