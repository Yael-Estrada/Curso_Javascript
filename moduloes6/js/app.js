//puedes importar varios archivos a la vez, cada uno con su import
import * as cliente from './cliente.js';
import * as empresas from './empresa.js';
//Todos los campos y funciones de este import deben ir con un "cliente." antes de llamarse
console.log(cliente.nombreCliente);
console.log(cliente.mostrarInformacion(cliente.nombreCliente,cliente.ahorro));
let client=new cliente.Cliente(cliente.nombreCliente,cliente.ahorro);
console.log(client);
let empresa=new empresas.Empresa('Udemy',12312,'Aprendizaje');
console.log(empresa);