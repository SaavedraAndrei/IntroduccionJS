"use strict"



const numeros = [1,2,3,4,5];

const meses = ['Enero', 'Febrero', 'Marzo',
'Abril', 'Mayo', 'Junio'];


const producto = [
    {nombre: 'monitor', precio: 120},
    {nombre: 'teclado', precio: 240},
    {nombre: 'mouse', precio: 360},

]


// ARRAY METHODS 2 

// FOREACH - INCLUDES - SOME - REDUCE 
// - FILTER

producto.forEach(x => {

    // console.log(x.nombre);
});

producto.map( (x) => {
    console.log(x.nombre)
})

producto.some( function(x){
    // if (x.nombre === 'teclado') {
    //     console.log('Si existe');
    // }
})

const total1 = producto.reduce( function(total,x){
    return total += x.precio
},0);

// console.log(total1);

const total2 = producto.filter( (x) => {
    return x.precio > 120
})

// console.log(total2);



