let nombre=prompt('Cual es tu nombre?');
let edad= prompt('Cual es tu edad?');

document.getElementById('app').innerHTML='Bienvenido '+nombre+' de '+edad+' años';
alert("Se enviaron valores a consola");
console.log('consola');

console.log(2+2);
console.log([1,2,3]);
console.table([1,2,3]);

console.time('Time');
console.warn("Hubo un warning");
console.error("Hubo un error");
console.timeEnd("Time");