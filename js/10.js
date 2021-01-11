

// CLASES CLASES

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    format(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }

    returnPrecio(){
        return this.precio;
    }
}


const producto1 = new Producto('Monitor',765)

console.log(producto1.returnPrecio());