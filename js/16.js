
// ASYNC - AWAIT -> CON DOS A MÁS CONSULTAS

function descargarClientes(){

    return new Promise( function(resolve){

        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Se descargaron los clientes.')
        }, 3000);
    })
}

function descargarPedidos(){

    return new Promise( function(resolve){

        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Se descargaron los pedidos.')
        }, 3000);
    })
}


async function app(){

    try {
        const resultado = await Promise.all([ descargarPedidos(), descargarClientes()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
        console.log('Se están mostrando las ventas');
    } catch (error) {
        console.log(error);
    }
}


app();