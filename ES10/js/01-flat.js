const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];
//Fusiona los subarreglos con su arreglo original
//Dependiendo de la profundidad que se agrege
console.log(edades);
//[8,10,9,11,[13,18,20,[18,20,21]]]
console.log(edades.flat(1));
//[8,10,9,11,13,18,20,[18,20,21]]
console.log(edades.flat(2));
//[8,10,9,11,13,18,20,18,20,21]
//Para aplanar sin conocer el numero de profundidad
console.log(edades.flat(Infinity));
