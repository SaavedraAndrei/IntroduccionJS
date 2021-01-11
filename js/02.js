// "use strict"


// obj1.nombre == obj1["nombre"]
const producto1 = {
    nombre: 'Monitor',
    precio: '550'
}

const producto2 = {
    nombre: 'Mouse',
    precio: '660'
}

const producto3 = {
    nombre: 'Teclado',
    precio: '1128'
}

Object.seal(producto3);

producto3.precio = '2500';
delete producto3.nombre 

console.log(Object.isSealed(producto2));
console.log(producto3);
// FREEZE <> SEAL => SEAL SI SE MODIFICA

//DESTRUCTURING

const {nombre,precio} = producto3;

console.log(precio);

//

