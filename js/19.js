// FETCH API

function obtenerTrabajador(){

    const link = 'trabajador.json';

    fetch(link)
        .then(function(resultado){
            return resultado.json(); 
        })
        .then( function(datos){
            const {trabajador} = datos;
            
            trabajador.forEach(trabajador => {
                console.log(trabajador.nombre);
                console.log(trabajador.apellido);
                console.log(trabajador.id);

                document.querySelector('.contenido').textContent += trabajador.nombre;
            });
        })

}

obtenerTrabajador();