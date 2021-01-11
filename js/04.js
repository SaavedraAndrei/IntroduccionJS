

"use strict"

// ARRAYS


const numeros = [1,2,3,4,5];
const meses = ['Enero', 'Febrero', 'Marzo',
'Abril', 'Mayo', 'Junio'];


// MÉTODOS PUSH-UNSHIFT-POP-SHIFT-SPLICE-SLICE

numeros.push(6);

numeros.unshift(0);

numeros.shift();

numeros.pop();

const copia = numeros.slice(1,3);

numeros.splice(1,0);


// SPREAD OPERATOR - REST OPERATOR

const resultado = { c:'Diciembre', ...meses};



// console.log(numeros);
// console.table(meses);
// console.table(copia);
// console.table(resultado)


const copia2 = numeros.map( (x) => Math.pow(x,3));


console.log(copia2)


