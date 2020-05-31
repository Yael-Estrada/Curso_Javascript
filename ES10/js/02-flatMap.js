const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];

let resultado=productos.map(producto=>[producto.nombre,producto.precio]);
console.log(resultado);
console.log(resultado.flat(1));
//Todo esto se puede simplificar en:
resultado=productos.flatMap(producto=>[producto.nombre,producto.precio]);
console.log(resultado);