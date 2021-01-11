

// ASYNC AWAIT


function descargarClientes(){

    return new Promise( function(resolve){

        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Se descargaron los clientes.')
        }, 3000);
    })
}

async function MostrarClientes(){

    try {
        const resultado = await descargarClientes();
        console.log(resultado);
        console.log('Se están mostrado los clientes');
    } catch (error) {
        console.log(error);
    }
}

MostrarClientes();

console.log('Juego de dinosaurio');







// function descargarClientes(){

//     return new Promise( function(resolve){
//         console.log('Descargando clientes...');

//         setTimeout(() => {
//             resolve('Se descagaron los clientes.')
//         }, 3000);
//     })
// }


// async function app(){
//     try {
//         const resultado = await descargarClientes();
//         console.log(resultado);
//         console.log('Mostrar Clientes');
//     } catch (error) {
//         console.log(error);
//     }
// }

// app();

// console.log('Se va mostrando la página web')