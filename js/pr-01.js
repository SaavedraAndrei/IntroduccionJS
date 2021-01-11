

// JAVASCRIPT

// FETCH - API



async function descargarProfesores(){

    // const link = 'http://www.google.com/api'
    const link = 'profesores.json'


    const resultado = await fetch(link);
    const datos = await resultado.json();
    console.log(datos)

}

descargarProfesores();