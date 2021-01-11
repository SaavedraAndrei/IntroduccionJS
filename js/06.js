
Sumar(10,19)
//DECLARACIÓN DE UNA FUNCIÓN
function Sumar(n1, n2){
    console.log(n1+n2);
}




// EXPRESIÓN DE UNA FUNCIÓN
// PROBLEMA DEL HOISTING
const obj1 = function(n1,n2){
    return n1*n2;
}

const resultado = obj1(50,2);

console.log(resultado);


//IIFE
(function(){
    console.log("Auto-Calling");
}());

