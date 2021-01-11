window.nombre = 'un nombre';
window.precio = 'un nombre';
window.seg = 'un nombre';
window.min = 'un nombre';



const Spotify = {

    nombre: 'Como Dueles',
    precio: 5000,
    min: 3,
    seg: 30,
    
    Resumen : function(){
        console.log(`Nombre de la cancion ${nombre}, 
        precio: ${precio} y duración: ${min} ${seg}`)
    }

}


Spotify.Resumen();