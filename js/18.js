

// FETCH API

async function obtenerEmpleados(){

    // const archivo = 'http://www.google.com/api'
    const archivo = 'empleados.json';

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();