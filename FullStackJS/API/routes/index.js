const express=require('express');
const router=express.Router();
const pacientesController=require('../controllers/pacienteController');
module.exports=function(){
	//Agregar nuevos pacientes via POST
	router.post('/pacientes',pacientesController.nuevoCliente);
	//Obtiene todos los registros de pacientes en la BD
	router.get('/pacientes',pacientesController.obtenerPacientes);
	//Obtiene un paciente en especifico (ID)
	router.get('/pacientes/:id',pacientesController.obtenerPaciente);
	//Actualizar un registro con un id especifico
	router.put('/pacientes/:id',pacientesController.actualizarPaciente);
	//Eliminar registro
	router.delete('/pacientes/:id',pacientesController.eliminarPaciente);
	return router;
}