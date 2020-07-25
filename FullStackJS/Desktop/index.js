const {app,BrowserWindow}=require('electron');

let appWindow=null;

function crearVentana(){
	appWindow=new BrowserWindow({
		width:1200,
		height:800,
		resizable: false,
		center: true,
		show:false
	});
	//Cuando se cierra la aplicacion
	appWindow.on('closed',()=>{
		appWindow=null;
	});
	//Cargar html
	appWindow.loadFile('./index.html');
	//Cuando la app este lista
	appWindow.once('ready-to-show',()=>{
		appWindow.show();
	});
}

app.on('ready',crearVentana);