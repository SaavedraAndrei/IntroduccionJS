


class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatP(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }

    returnPrecio(){
        return this.precio;
    }
}

class Libro extends Producto{

    constructor(nombre,precio,nHojas){
        super(nombre,precio);
        this.nHojas = nHojas;
    }

    format(){
        return ` ${super.formatP()} y su isbn es: ${this.nHojas}`
    }


}

const libro1 = new Libro('100 soledades', 45, 552)

const producto1 = new Producto('Monitor',765)

console.log(libro1.format());