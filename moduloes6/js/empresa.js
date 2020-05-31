import {Cliente } from './cliente.js';

export const nombreEmpresa='Udemy';
export let ahorro=22313;
export const categoria='Aprendizaje';

export function mostrarInformacion(nombre,ahorro,categoria){
	 return `Empresa: ${nombre}
Ahorro: ${ahorro}
Categoria: ${categoria}`;
}

export class Empresa extends Cliente{
	constructor(nombre,ahorro,categoria){
		super(nombre,ahorro);
		this.categoria=categoria;
	}
	mostrarInformacion(){
		return `Empresa: ${nombre}
Ahorro: ${ahorro}
Categoria: ${categoria}`;
	}
}