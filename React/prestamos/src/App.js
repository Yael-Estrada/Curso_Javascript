import React,{Fragment,useState} from 'react';
import Header from './Componentes/Header'
import Formulario from './Componentes/Formulario'
import Mensaje from './Componentes/Mensaje'
import Resultado from './Componentes/Resultado'
import Spinner from './Componentes/Spinner'
function App() {
  const [cantidad,guardarCantidad]=useState(0);
  const [plazo,guardarPlazo]=useState('');
  const [total,guardarTotal]=useState(0);
  const [cargando,guardarCargando]=useState(false);
  let componente;
  if(cargando){
  	componente=<Spinner/>
  }
  else if(total===0){
  	componente=<Mensaje/>
  }
  else{
  	componente=<Resultado
  					total={total}
  					plazo={plazo}
  					cantidad={cantidad}
  				/>
  }
  return (
    <Fragment>
         <Header 
         	titulo="Cotizador de prestamos"
         />
         <div className="container">
         	<Formulario
         		cantidad={cantidad}
         		guardarCantidad={guardarCantidad}
         		plazo={plazo}
         		guardarPlazo={guardarPlazo}
         		total={total}
         		guardarTotal={guardarTotal}
         		cargando={cargando}
         		guardarCargando={guardarCargando}
         	/>
         	<div className="mensajes">
         		{componente}
         	</div>
         </div>
    </Fragment>
  );
}

export default App;
