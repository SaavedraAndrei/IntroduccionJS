"use strict"

const producto1 = {
    nombre1: 'Monitor',
    precio1: '550'
}

const producto2 = {
    nombre2: 'Mouse',
    precio2: '660'
}

const producto3 = {
    nombre3: 'Teclado',
    precio3: '1128'
}

// SPREAD OPERATOR - REST OPERATOR

const resultado = {...producto1, ...producto2, 
...producto3}

console.log(resultado);

