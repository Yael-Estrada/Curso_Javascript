const mongoose=require('mongoose');
const Paciente=require('../models/Paciente');
//Cuando se crea un nuevo cliente
exports.nuevoCliente=async (req,res,next)=>{
	//TODO: Insertar en la base de datos
	const paciente=new Paciente(req.body);
	try{
		await paciente.save();
		res.json({mensaje: 'El cliente se agregó correctamente'});
	} catch(error){
		console.log(error);
		next();
	}
}

exports.obtenerPacientes=async (req,res,next)=>{
	try{
		const pacientes=await Paciente.find({});
		res.json(pacientes);
	} catch(error){
		console.log(error);
		next();
	}
}
//Obtiene un paciente por su ID
exports.obtenerPaciente=async (req,res,next)=>{
	try{
		const paciente=await Paciente.findById(req.params.id);
		res.json(paciente);
	} catch(error){
		console.log(error);
		next();
	}
}
//Actualiza un registro por ID
exports.actualizarPaciente=async (req,res,next)=>{
	try{
		const paciente=await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.json(paciente);
	} catch(error){
		console.log(error);
		next();
	}
}

//Eliminar un registro por id
exports.eliminarPaciente=async (req,res,next)=>{
	try{
		const paciente=await Paciente.findOneAndDelete({_id: req.params.id});
		res.json({mensaje:'El paciente fue eliminado!'});
	} catch(error){
		console.log(error);
		next();
	}
}