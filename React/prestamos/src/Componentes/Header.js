import React,{Fragment} from 'react'

function Header({titulo}){
	//const titulo=props.titulo;
	return(
		<Fragment>
			<h1>{titulo}</h1>
		</Fragment>    
	);
}
/*
const Header=({titulo})=>(
	<h1>{titulo}</h1>
);
*/
export default Header;