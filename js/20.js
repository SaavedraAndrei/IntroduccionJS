
// FETCH API CON ASYNC - AWAIT

async function obtenerTrabajador(){

    const link = 'trabajador.json';

    const resultado = await fetch(link);
    const datos = await resultado.json();
    console.log(datos);
   
}

obtenerTrabajador();