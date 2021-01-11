

// POO

//OBJECT LITERAL 
const obj1 = {
    nombre: 'monitor',
    precio: 450
}



//OBJECT CONSTRUCTOR
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}


Producto.prototype.format = function(){
    return `El nombre del producto es: ${this.nombre} y el precio es: ${this.precio}`;
}


function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.format = function() {
    return `El nombre completo del cliente es: ${this.nombre} ${this.apellido}`
}

// function FormatProducto(elemente){
//     return `El nombre del producto es: ${elemente.nombre} y el precio es: ${elemente.precio}`;
// }


const producto1 = new Producto('mouse', 450);
const cliente1 = new Cliente('Andrei', 'Saavedra');

// console.log(FormatProducto(producto1));
// console.log(FormatProducto(cliente1));


console.log(producto1.format());
console.log(cliente1.format());