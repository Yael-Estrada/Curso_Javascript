/*
	Event loop
	En la ejecucion del programa hay un stack y un queue
	Job Queue va primero que el Task Queue
*/

console.log('Yo me mostrare primero');
setTimeout(function(){
console.log('Yo me mostrare segundo');
},0);

console.log('Yo me mostrare tercero');
setTimeout(function(){
console.log('Yo me mostrare cuarto');
},0);
new Promise(function(res){
	res('Yo soy Promise');

}).then(console.log);
console.log('Yo me mostrare quinto');